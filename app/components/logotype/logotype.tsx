'use server'

import Image from "next/image";
import styles from "./logotype.module.sass";

export default async function Logotype() {
    return (
        <div className={styles.logotype}>
            <Image src="/logo.png" alt="logotype" width={128} height={128} className={styles.logo}/>
            <div className={styles.title}>
                Персонта
            </div>
        </div>
    );
}
