'use server'

import nodemailer from 'nodemailer'

type FormType = 'contact' | 'floating' | 'quiz'

interface ContactFormData {
    type: 'contact'
    mail: string
    name: string
    organization: string
    phone: string
}

interface FloatingFormData {
    type: 'floating'
    phone: string
    name: string
    email: string
}

interface QuizFormData {
    type: 'quiz'
    orgForm: string
    hasEmployees: string
    cloudStorage: string
    hasWebsite: string
    websiteUrl?: string
    services: string[]
    contactMethod: string
    contactValue: string
}

type FormData = ContactFormData | FloatingFormData | QuizFormData

function buildHtml(data: FormData): string {
    const row = (label: string, value: string) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#111">${value || '—'}</td></tr>`

    let rows = ''

    if (data.type === 'floating') {
        rows = [
            row('Телефон', data.phone),
            row('Имя', data.name),
            row('Email', data.email),
        ].join('')
    } else if (data.type === 'contact') {
        rows = [
            row('Email', data.mail),
            row('Имя', data.name),
            row('Организация', data.organization),
            row('Телефон', data.phone),
        ].join('')
    } else {
        rows = [
            row('Орг. форма', data.orgForm),
            row('Сотрудники в штате', data.hasEmployees),
            row('Облачное хранилище', data.cloudStorage),
            row('Есть сайт', data.hasWebsite),
            data.websiteUrl ? row('Сайт', data.websiteUrl) : '',
            row('Услуги', data.services.join(', ')),
            row('Способ связи', data.contactMethod),
            row('Контакт', data.contactValue),
        ].join('')
    }

    const titles: Record<FormType, string> = {
        floating: 'Быстрая заявка',
        contact: 'Форма обратной связи',
        quiz: 'Квиз-заявка',
    }

    return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <h2 style="background:#1a1a2e;color:#fff;margin:0;padding:16px 20px;border-radius:8px 8px 0 0">
        Новая заявка — ${titles[data.type]}
      </h2>
      <table style="width:100%;border-collapse:collapse;background:#fafafa;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
        <tbody>${rows}</tbody>
      </table>
    </div>`
}

export async function sendEmail(data: FormData): Promise<{ success: boolean; error?: string }> {
    const { SMTP_USER, SMTP_PASS, SMTP_TO } = process.env

    if (!SMTP_USER || !SMTP_PASS || !SMTP_TO) {
        return { success: false, error: 'SMTP не настроен' }
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const subjects: Record<FormType, string> = {
        floating: 'Быстрая заявка с сайта',
        contact: 'Заявка из формы обратной связи',
        quiz: 'Квиз-заявка с сайта',
    }

    try {
        await transporter.sendMail({
            from: SMTP_USER,
            to: SMTP_TO,
            subject: subjects[data.type],
            html: buildHtml(data),
        })
        return { success: true }
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        console.error('[send-email] Yandex SMTP error:', message)
        return { success: false, error: message }
    }
}
