'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./floating-form.module.sass";
import { sendEmail } from "@/app/actions/send-email";
import { useToast } from "../toast/toast";
import ConsentCheckboxes from "../consent-checkboxes/consent-checkboxes";

export default function FloatingForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consentPersonal, setConsentPersonal] = useState(false);
    const [consentMarketing, setConsentMarketing] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(40);
    const { showToast } = useToast();
    const elRef = useRef<HTMLDivElement | HTMLButtonElement>(null);

    const updatePosition = useCallback(() => {
        const footer = document.querySelector('footer');
        if (!footer) return;
        const footerTop = footer.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const isMobile = window.innerWidth <= 640;
        const minGap = isMobile ? 20 : 100;
        if (footerTop < viewportHeight) {
            setBottomOffset(viewportHeight - footerTop + minGap);
        } else {
            setBottomOffset(40);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400 && !isVisible) {
                setIsVisible(true);
            }
            updatePosition();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible, updatePosition]);

    if (!isVisible) return null;

    if (!isOpen) {
        return (
            <button className={styles.questionBtn} style={{ bottom: bottomOffset }} onClick={() => setIsOpen(true)} aria-label="Открыть форму заявки">
                <span>?</span>
            </button>
        );
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const result = await sendEmail({
            type: 'floating',
            phone,
            name,
            email,
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
        <div className={styles.popup} style={{ bottom: bottomOffset }}>
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
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Иван"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="name@mail.ru"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
