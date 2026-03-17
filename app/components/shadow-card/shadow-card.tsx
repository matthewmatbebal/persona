import { ReactNode } from "react";
import Image from "next/image";
import styles from "./shadow-card.module.sass";

interface IShadowCard {
    title: ReactNode
    icon: string
    rounding: "top"|"bottom"|"full"
}

export default async function ShadowCard({title, icon, rounding="full"}:IShadowCard) {
    return (
        <div className={`${styles.card} ${styles[rounding]}`}>
            <p className={styles.title}>{title}</p>
            <Image
                src={icon}
                alt="cowbell icon"
                width={72}
                height={72}
                className={styles.icon}
            />
        </div>
    );
}
