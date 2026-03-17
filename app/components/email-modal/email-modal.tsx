'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '../modal/modal'
import styles from './email-modal.module.sass'

const EMAIL = 'personta.info@yandex.ru'

export default function EmailModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <button className={styles.emailBtn} onClick={() => setIsOpen(true)} aria-label="Email">
                <Image src="/icons/mail-filled.svg" alt="Email" width={24} height={24} />
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
                    <div className={styles.title}>Наша почта</div>
                    <div className={styles.email}>{EMAIL}</div>
                    <button className={styles.copyBtn} onClick={handleCopy}>
                        {copied ? 'Скопировано!' : 'Копировать'}
                    </button>
                </div>
            </Modal>
        </>
    )
}
