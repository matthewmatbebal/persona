import styles from './consent-checkboxes.module.sass'

interface ConsentCheckboxesProps {
    consentPersonal: boolean
    onConsentPersonalChange: (v: boolean) => void
    consentMarketing: boolean
    onConsentMarketingChange: (v: boolean) => void
}

export default function ConsentCheckboxes({
    consentPersonal,
    onConsentPersonalChange,
    consentMarketing,
    onConsentMarketingChange,
}: ConsentCheckboxesProps) {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} onClick={(e) => e.stopPropagation()}>
                <div
                    className={`${styles.checkbox} ${consentPersonal ? styles.checkboxChecked : ''}`}
                    onClick={(e) => { e.preventDefault(); onConsentPersonalChange(!consentPersonal) }}
                />
                <span>
                    Я даю{' '}
                    <a href="/docs/privacy-agreement.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        согласие на обработку персональных данных
                    </a>{' '}
                    и соглашаюсь с{' '}
                    <a href="/docs/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Политикой обработки персональных данных
                    </a>
                </span>
            </label>
            <label className={styles.label} onClick={(e) => e.stopPropagation()}>
                <div
                    className={`${styles.checkbox} ${consentMarketing ? styles.checkboxChecked : ''}`}
                    onClick={(e) => { e.preventDefault(); onConsentMarketingChange(!consentMarketing) }}
                />
                <span>
                    Я даю{' '}
                    <a href="/docs/ads-agreement.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Согласие на получение информационной и рекламной рассылки
                    </a>
                </span>
            </label>
        </div>
    )
}
