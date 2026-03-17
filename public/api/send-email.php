<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['type'])) {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit;
}

$type = $input['type'];

function row(string $label, string $value): string {
    $val = $value ?: '—';
    return '<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">'
        . htmlspecialchars($label)
        . '</td><td style="padding:6px 12px;color:#111">'
        . htmlspecialchars($val)
        . '</td></tr>';
}

$titles = [
    'floating' => 'Быстрая заявка',
    'contact'  => 'Форма обратной связи',
    'quiz'     => 'Квиз-заявка',
];

$subjects = [
    'floating' => 'Быстрая заявка с сайта',
    'contact'  => 'Заявка из формы обратной связи',
    'quiz'     => 'Квиз-заявка с сайта',
];

if (!isset($titles[$type])) {
    echo json_encode(['success' => false, 'error' => 'Unknown form type']);
    exit;
}

$rows = '';

if ($type === 'floating') {
    $rows = row('Телефон', $input['phone'] ?? '')
          . row('Имя', $input['name'] ?? '')
          . row('Email', $input['email'] ?? '');
} elseif ($type === 'contact') {
    $rows = row('Email', $input['mail'] ?? '')
          . row('Имя', $input['name'] ?? '')
          . row('Организация', $input['organization'] ?? '')
          . row('Телефон', $input['phone'] ?? '');
} else {
    $rows = row('Орг. форма', $input['orgForm'] ?? '')
          . row('Сотрудники в штате', $input['hasEmployees'] ?? '')
          . row('Облачное хранилище', $input['cloudStorage'] ?? '')
          . row('Есть сайт', $input['hasWebsite'] ?? '');
    if (!empty($input['websiteUrl'])) {
        $rows .= row('Сайт', $input['websiteUrl']);
    }
    $services = isset($input['services']) && is_array($input['services'])
        ? implode(', ', $input['services'])
        : '';
    $rows .= row('Услуги', $services)
           . row('Способ связи', $input['contactMethod'] ?? '')
           . row('Контакт', $input['contactValue'] ?? '');
}

$html = '
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
  <h2 style="background:#1a1a2e;color:#fff;margin:0;padding:16px 20px;border-radius:8px 8px 0 0">
    Новая заявка — ' . htmlspecialchars($titles[$type]) . '
  </h2>
  <table style="width:100%;border-collapse:collapse;background:#fafafa;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
    <tbody>' . $rows . '</tbody>
  </table>
</div>';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(SMTP_USER);
    $mail->addAddress(SMTP_TO);

    $mail->isHTML(true);
    $mail->Subject = $subjects[$type];
    $mail->Body    = $html;

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
