'use client'

import { useEffect, useState } from "react";
import Button from "../button/button";
import styles from "./floating-form.module.sass";
import { sendEmail } from "@/app/actions/send-email";
import { useToast } from "../toast/toast";
import ConsentCheckboxes from "../consent-checkboxes/consent-checkboxes";

export default function FloatingForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [consentPersonal, setConsentPersonal] = useState(false);
    const [consentMarketing, setConsentMarketing] = useState(false);
    const { showToast } = useToast();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400 && !isVisible) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    if (!isVisible) return null;

    if (!isOpen) {
        return (
            <button className={styles.questionBtn} onClick={() => setIsOpen(true)} aria-label="Открыть форму заявки">
                <span>?</span>
            </button>
        );
    }

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
            setIsOpen(false);
        } else {
            showToast(result.error ?? 'Ошибка отправки', 'error');
        }
    };

    return (
        <div className={styles.popup}>
            <div className={styles.header}>
                <h3 className={styles.title}>Оформить заявку на услуги</h3>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Закрыть">
                    ✕
                </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    placeholder="+7 (000) 000-00-00"
                />
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Иван"
                />
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="name@mail.ru"
                />
                <ConsentCheckboxes
                    consentPersonal={consentPersonal}
                    onConsentPersonalChange={setConsentPersonal}
                    consentMarketing={consentMarketing}
                    onConsentMarketingChange={setConsentMarketing}
                />
                <Button variant="dark" size="md" className={styles.btn} type="submit" disabled={loading || !consentPersonal || !consentMarketing}>
                    {loading ? 'Отправка...' : 'Отправить'}
                </Button>
            </form>
        </div>
    );
}
