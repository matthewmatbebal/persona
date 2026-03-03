'use server'

import Logotype from "../logotype/logotype";
import Link from "next/link";
import styles from "./header.module.sass";

export default async function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Logotype/>
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
