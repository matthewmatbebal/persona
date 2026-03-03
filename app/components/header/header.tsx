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
                    <Link href="#">О нас</Link>
                    <Link href="#">Услуги</Link>
                    <Link href="#">Штрафы</Link>
                    <Link href="#">Частые вопросы</Link>
                </div>
            </div>
        </header>
    );
}
