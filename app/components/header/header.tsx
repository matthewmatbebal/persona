'use server'

import Logotype from "../logotype/logotype";
import Link from "next/link";
import styles from "./header.module.sass";

export default async function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <Logotype/>
                    <div className={styles.slogan}>Защищаем бизнес по всей России</div>
                </div>
                <div className={styles.center}>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Telegram">
                            <span>tg</span>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="VK">
                            <span>tg</span>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="WhatsApp">
                            <span>tg</span>
                        </a>
                    </div>
                    <div className={styles.workHours}>Время работы с 9:00 до 22:00 по МСК</div>
                    <div className={styles.sloganMobile}>Защищаем бизнес по всей России</div>
                </div>
                <div className={styles.nav}>
                    <Link href="#hero">О нас</Link>
                    <Link href="#services">Услуги</Link>
                    <Link href="#problems">Штрафы</Link>
                    <Link href="#faq">Частые вопросы</Link>
                </div>
            </div>
        </header>
    );
}
