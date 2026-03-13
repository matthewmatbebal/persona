'use server'

import Logotype from "../logotype/logotype";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.sass";

export default async function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <Logotype slogan="Защищаем бизнес по всей России"/>
                </div>
                <div className={styles.nav}>
                    <Link href="#hero">О нас</Link>
                    <Link href="#services">Услуги</Link>
                    <Link href="#problems">Штрафы</Link>
                    <Link href="#faq">Частые вопросы</Link>
                </div>
                <div className={styles.right}>
                    {/* Mobile only */}
                    <div className={styles.mobileInfo}>
                        <div className={styles.socialsMobile}>
                            <a href="tel:+79186810978" className={styles.socialLink} aria-label="Телефон">
                                <Image src="/icons/phone-header.svg" alt="Телефон" width={24} height={24} />
                            </a>
                            <a href="https://t.me/PersontaSupport_bot" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Telegram">
                                <Image src="/icons/telegram-filled.svg" alt="Telegram" width={24} height={24} />
                            </a>
                            <a href="mailto:personta.info@yandex.ru" className={styles.socialLink} aria-label="Email">
                                <Image src="/icons/mail-filled.svg" alt="Email" width={24} height={24} />
                            </a>
                        </div>
                        <div className={styles.workHours}>Время работы с 9:00 до 22:00 по МСК</div>
                        <div className={styles.sloganMobile}>Защищаем бизнес по всей России</div>
                    </div>
                    {/* Desktop only */}
                    <div className={styles.rightDesktop}>
                        <div className={styles.workHoursDesktop}>Время работы с 9:00 до 22:00 по МСК</div>
                        <div className={styles.socialsDesktop}>
                            <a href="tel:+79186810978" className={styles.socialLink} aria-label="Телефон">
                                <Image src="/icons/phone-header.svg" alt="Телефон" width={24} height={24} />
                            </a>
                            <a href="https://t.me/PersontaSupport_bot" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Telegram">
                                <Image src="/icons/telegram-filled.svg" alt="Telegram" width={24} height={24} />
                            </a>
                            <a href="mailto:personta.info@yandex.ru" className={styles.socialLink} aria-label="Email">
                                <Image src="/icons/mail-filled.svg" alt="Email" width={24} height={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
