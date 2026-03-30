'use client'

import Button from "../button";
import Modal from "../../modal/modal";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";
import { useToast } from "../../toast/toast";
import ConsentCheckboxes from "../../consent-checkboxes/consent-checkboxes";
import styles from "./request.module.sass";

interface RequestButtonProps {
    variant?: "dark" | "primary"
    size?: "sm" | "md"
    children?: string
    className?: string
}

export default function RequestButton({ variant = "dark", size = "md", children = "Оставить заявку", className }: RequestButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [consentPersonal, setConsentPersonal] = useState(false);
    const [consentMarketing, setConsentMarketing] = useState(false);
    const { showToast } = useToast();

    const handleClose = () => {
        setIsOpen(false);
        setConsentPersonal(false);
        setConsentMarketing(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setLoading(true);
        const result = await sendEmail({
            type: 'floating',
            phone: fd.get('phone') as string,
            name: fd.get('name') as string,
            email: fd.get('email') as string,
        });
        setLoading(false);
        if (result.success) {
            showToast('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
            handleClose();
        } else {
            showToast(result.error ?? 'Ошибка отправки', 'error');
        }
    };

    return (<>
        <Button variant={variant} size={size} onClick={() => setIsOpen(true)} className={className}>{children}</Button>
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Оформить заявку на услуги</h3>
                    <button className={styles.closeBtn} onClick={handleClose} aria-label="Закрыть">✕</button>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} type="tel" name="phone" placeholder="+7 (000) 000-00-00" />
                    <input className={styles.input} type="text" name="name" placeholder="Иван" />
                    <input className={styles.input} type="email" name="email" placeholder="name@mail.ru" />
                    <ConsentCheckboxes
                        consentPersonal={consentPersonal}
                        onConsentPersonalChange={setConsentPersonal}
                        consentMarketing={consentMarketing}
                        onConsentMarketingChange={setConsentMarketing}
                    />
                    <Button variant="dark" size="md" type="submit" disabled={loading || !consentPersonal}>
                        {loading ? 'Отправка...' : 'Отправить'}
                    </Button>
                </form>
            </div>
        </Modal>
    </>);
}
