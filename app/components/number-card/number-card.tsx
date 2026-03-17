import Image from "next/image";
import styles from "./number-card.module.sass";

interface INumberCard {
    number: '01'|'02'|'03'|'04'|'05'
    title: string
    description: string
}

const numbers = {
    '01': { width: 75 },
    '02': { width: 98 },
    '03': { width: 98 },
    '04': { width: 101 },
    '05': { width: 98 },
}

export default async function NumberCard({number='01', title, description}:INumberCard) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Image
                    src={`/numbers/${number}.svg`}
                    alt={number}
                    width={numbers[number].width}
                    height={49}
                    className={styles.numberIcon}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
}
