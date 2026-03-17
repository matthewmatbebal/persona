import { ReactNode } from "react";
import SelectServiceButton from "../button/buttons/select-service";
import styles from "./service-card.module.sass";

interface IServiceCard {
    number: '01'|'02'|'03'|'04'|'05'|'06'
    title: ReactNode
    description: string
    className?: string
}

const numbers = {
    '01': { width: 85 },
    '02': { width: 98 },
    '03': { width: 98 },
    '04': { width: 101 },
    '05': { width: 98 },
    '06': { width: 101 },
}

export default async function ServiceCard({number, title, description, className}:IServiceCard) {
    return (
        <div className={`${styles.card} ${className ?? ''}`}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <img
                        src={`/numbers/${number}.svg`}
                        alt={number}
                        width={numbers[number].width}
                        className={styles.number}
                    />
                    <div className={styles.title}>{title}</div>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
            <SelectServiceButton />
        </div>
    );
}
