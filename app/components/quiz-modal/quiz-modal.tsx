'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './quiz-modal.module.sass'
import { sendEmail } from '@/app/actions/send-email'
import { useToast } from '@/app/components/toast/toast'
import ConsentCheckboxes from '@/app/components/consent-checkboxes/consent-checkboxes'

interface QuizModalProps {
    onClose: () => void
}

const SERVICES = [
    'Регистрация в Роскомнадзоре',
    'Внесение изменений в регистрацию в Роскомнадзоре',
    'Подготовка документации по ФЗ-152 «О Персональных данных»',
    'Аудит сайта на соответствие ФЗ-152 «О персональных данных»',
    'Аудит записи о регистрации в реестре Роскомнадзора с внесением изменений',
    'Подготовка к проверке от Роскомнадзора',
    'Подготовка ответов на предписание/требования Роскомнадзора',
]

const CONTACT_METHODS = ['Телефон', 'WhatsApp', 'Telegram']

const STEP_META = [
    { title: 'Ваша организационно-правовая форма' },
    { title: 'У вас есть сотрудники в штате?' },
    { title: 'Используете ли вы облачную систему хранения данных о клиентах (CRM, ERP, файлы, документы, таблицы)?' },
    { title: 'У вашей организации есть сайт?' },
    { title: 'Укажите ссылку на ваш сайт' },
    { title: 'Какие услуги вас интересуют?' },
    { title: 'Как с вами связаться?' },
]

export default function QuizModal({ onClose }: QuizModalProps) {
    const [step, setStep] = useState(0)
    const [submitting, setSubmitting] = useState(false)
    const { showToast } = useToast()
    const [orgForm, setOrgForm] = useState<string>('')
    const [hasEmployees, setHasEmployees] = useState<string>('')
    const [cloudStorage, setCloudStorage] = useState<string>('')
    const [hasWebsite, setHasWebsite] = useState<string>('')
    const [websiteUrl, setWebsiteUrl] = useState<string>('')
    const [services, setServices] = useState<string[]>([])
    const [contactMethod, setContactMethod] = useState<string>('Телефон')
    const [contactValue, setContactValue] = useState<string>('')
    const [consentPersonal, setConsentPersonal] = useState(false)
    const [consentMarketing, setConsentMarketing] = useState(false)

    const handleClose = () => {
        setStep(0)
        setOrgForm('')
        setHasEmployees('')
        setCloudStorage('')
        setHasWebsite('')
        setWebsiteUrl('')
        setServices([])
        setContactMethod('Телефон')
        setContactValue('')
        setConsentPersonal(false)
        setConsentMarketing(false)
        onClose()
    }

    const handleNext = () => {
        // Skip website URL step if no website
        if (step === 3 && hasWebsite === 'Нет') {
            setStep(5)
        } else {
            setStep(s => s + 1)
        }
    }

    const handleBack = () => {
        // Skip website URL step when going back
        if (step === 5 && hasWebsite === 'Нет') {
            setStep(3)
        } else {
            setStep(s => s - 1)
        }
    }

    const toggleService = (service: string) => {
        setServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        )
    }

    const isNextDisabled = () => {
        if (step === 0) return !orgForm
        if (step === 1) return !hasEmployees
        if (step === 2) return !cloudStorage
        if (step === 3) return !hasWebsite
        if (step === 4) return !websiteUrl.trim()
        if (step === 5) return services.length === 0
        return false
    }

    const { title } = STEP_META[step]
    const totalSteps = STEP_META.length

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Закрыть">✕</button>
            </div>
            {step === 5 && (
                <div className={styles.subtitle}>Выберите один или несколько вариантов</div>
            )}

            <div className={styles.body}>
                {/* Step 0: Org form */}
                {step === 0 && (
                    <div className={styles.radioRow}>
                        {['Самозанятый', 'ИП', 'ООО'].map(option => (
                            <div
                                key={option}
                                className={`${styles.radioCard} ${orgForm === option ? styles.radioCardSelected : ''}`}
                                onClick={() => setOrgForm(option)}
                            >
                                <div className={`${styles.radio} ${orgForm === option ? styles.radioSelected : ''}`} />
                                {option}
                            </div>
                        ))}
                    </div>
                )}

                {/* Step 1: Employees */}
                {step === 1 && (
                    <div className={styles.radioRow}>
                        {['Да', 'Нет'].map(option => (
                            <div
                                key={option}
                                className={`${styles.radioCard} ${hasEmployees === option ? styles.radioCardSelected : ''}`}
                                onClick={() => setHasEmployees(option)}
                            >
                                <div className={`${styles.radio} ${hasEmployees === option ? styles.radioSelected : ''}`} />
                                {option}
                            </div>
                        ))}
                    </div>
                )}

                {/* Step 2: Cloud storage */}
                {step === 2 && (
                    <div className={styles.radioRow}>
                        {['Да', 'Нет', 'Не уверен'].map(option => (
                            <div
                                key={option}
                                className={`${styles.radioCard} ${cloudStorage === option ? styles.radioCardSelected : ''}`}
                                onClick={() => setCloudStorage(option)}
                            >
                                <div className={`${styles.radio} ${cloudStorage === option ? styles.radioSelected : ''}`} />
                                {option}
                            </div>
                        ))}
                    </div>
                )}

                {/* Step 3: Has website */}
                {step === 3 && (
                    <div className={styles.radioRow}>
                        {['Да', 'Нет'].map(option => (
                            <div
                                key={option}
                                className={`${styles.radioCard} ${hasWebsite === option ? styles.radioCardSelected : ''}`}
                                onClick={() => setHasWebsite(option)}
                            >
                                <div className={`${styles.radio} ${hasWebsite === option ? styles.radioSelected : ''}`} />
                                {option}
                            </div>
                        ))}
                    </div>
                )}

                {/* Step 4: Website URL */}
                {step === 4 && (
                    <input
                        className={styles.textInput}
                        type="text"
                        placeholder="https://example.com"
                        value={websiteUrl}
                        onChange={e => setWebsiteUrl(e.target.value)}
                    />
                )}

                {/* Step 5: Services */}
                {step === 5 && (
                    <>
                        <div className={styles.checkboxGrid}>
                            {SERVICES.map(service => (
                                <div
                                    key={service}
                                    className={styles.checkboxItem}
                                    onClick={() => toggleService(service)}
                                >
                                    <div className={`${styles.checkbox} ${services.includes(service) ? styles.checkboxChecked : ''}`} />
                                    {service}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Step 6: Contact */}
                {step === 6 && (
                    <div className={styles.contactWrapper}>
                        <div className={styles.contactTabs}>
                            {CONTACT_METHODS.map(method => (
                                <button
                                    key={method}
                                    className={`${styles.contactTab} ${contactMethod === method ? styles.contactTabSelected : ''}`}
                                    onClick={() => setContactMethod(method)}
                                >
                                    {method === 'Телефон' && (
                                        <Image src="/icons/phone-circle.svg" alt="" width={18} height={18} className={styles.icon} />
                                    )}
                                    {method === 'WhatsApp' && (
                                      <Image src="/icons/whatsapp-circle.svg" alt="" width={18} height={18} className={styles.icon} />
                                    )}
                                    {method === 'Telegram' && (
                                      <Image src="/icons/telegram.svg" alt="" width={18} height={18} className={styles.icon} />
                                    )}
                                    <span>{method}</span>
                                </button>
                            ))}
                        </div>
                        <input
                            className={styles.textInput}
                            type="text"
                            placeholder={contactMethod === 'Телефон' ? '+7 (___) ___-__-__' : '@username'}
                            value={contactValue}
                            onChange={e => setContactValue(e.target.value)}
                        />
                        <ConsentCheckboxes
                            consentPersonal={consentPersonal}
                            onConsentPersonalChange={setConsentPersonal}
                            consentMarketing={consentMarketing}
                            onConsentMarketingChange={setConsentMarketing}
                        />
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <button
                    className={`${styles.backBtn} ${step === 0 ? styles.backBtnHidden : ''}`}
                    onClick={handleBack}
                >
                    ← Назад
                </button>

                {step < totalSteps - 1 ? (
                    <button
                        className={styles.nextBtn}
                        onClick={handleNext}
                        disabled={isNextDisabled()}
                    >
                        Далее →
                    </button>
                ) : (
                    <button
                        className={styles.submitBtn}
                        disabled={submitting || !consentPersonal || !consentMarketing}
                        onClick={async () => {
                            setSubmitting(true)
                            const result = await sendEmail({
                                type: 'quiz',
                                orgForm,
                                hasEmployees,
                                cloudStorage,
                                hasWebsite,
                                websiteUrl,
                                services,
                                contactMethod,
                                contactValue,
                            })
                            setSubmitting(false)
                            handleClose()
                            if (result.success) {
                                showToast('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
                            } else {
                                showToast(result.error ?? 'Ошибка отправки', 'error')
                            }
                        }}
                    >
                        {submitting ? 'Отправка...' : 'Отправить заявку'}
                    </button>
                )}
            </div>
        </div>
    )
}
