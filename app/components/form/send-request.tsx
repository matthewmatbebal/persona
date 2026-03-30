'use client'

import { useRef, useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import styles from "./send-request.module.sass";
import { sendEmail } from "@/app/actions/send-email";
import { useToast } from "../toast/toast";
import ConsentCheckboxes from "../consent-checkboxes/consent-checkboxes";

export default function SendRequestForm() {
    const [loading, setLoading] = useState(false);
    const [consentPersonal, setConsentPersonal] = useState(false);
    const [consentMarketing, setConsentMarketing] = useState(false);
    const { showToast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setLoading(true);
        const result = await sendEmail({
            type: 'contact',
            mail: fd.get('mail') as string,
            name: fd.get('name') as string,
            organization: fd.get('organization') as string,
            phone: fd.get('phone') as string,
        });
        setLoading(false);
        if (result.success) {
            showToast('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
            formRef.current?.reset();
            setConsentPersonal(false);
            setConsentMarketing(false);
        } else {
            showToast(result.error ?? 'Ошибка отправки', 'error');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <Input
                type="text"
                name="mail"
                title="Ваша почта"
                placeholder="Введите вашу почту"
            />
            <Input
                type="text"
                name="name"
                title="Ваше имя"
                placeholder="Введите ваше имя"
            />
            <Input
                type="text"
                name="organization"
                title="Наименование организации"
                placeholder="Введите наименование вашей организации"
            />
            <Input
                type="text"
                name="phone"
                title="Ваш телефон"
                placeholder="Введите ваш номер телефона"
            />
            <ConsentCheckboxes
                consentPersonal={consentPersonal}
                onConsentPersonalChange={setConsentPersonal}
                consentMarketing={consentMarketing}
                onConsentMarketingChange={setConsentMarketing}
            />
            <Button variant="dark" size="md" className={styles.submitBtn} type="submit" disabled={loading || !consentPersonal}>
                {loading ? 'Отправка...' : 'Отправить'}
            </Button>
        </form>
    );
}
