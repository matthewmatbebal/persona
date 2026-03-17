'use client'

import { useState, useEffect } from 'react'
import styles from './cookie-banner.module.sass'

const COOKIE_KEY = 'cookie_consent'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem(COOKIE_KEY)) {
            setVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem(COOKIE_KEY, '1')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className={styles.banner}>
            <p className={styles.text}>
                Мы используем файлы cookie и сервис веб-аналитики Яндекс.Метрика для улучшения работы сайта.
                Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                <a href="/docs/cookie-policy.pdf" target="_blank" rel="noopener noreferrer">Политикой использования файлов cookie</a>
                {' '}и{' '}
                <a href="/docs/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">Политикой обработки персональных данных</a>.
            </p>
            <button className={styles.acceptBtn} onClick={handleAccept}>Принять</button>
        </div>
    )
}
