'use server'

import Image from "next/image";
import styles from "./logotype.module.sass";

export default async function Logotype() {
    return (
        <div className={styles.logotype}>
            <Image src="./logo.svg" alt="logotype" width={64} height={64} className={styles.logo}/>
            <div className={styles.title}>
                Персонта
            </div>
        </div>
    );
}
