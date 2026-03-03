'use server'

import Image from "next/image";
import styles from "./arrow.module.sass";

export default async function Arrow() {
    return (
        <Image
            src={`/arrow.svg`}
            alt="arrow"
            width={90}
            height={22.26}
            className={styles.arrow}
        />
    );
}
