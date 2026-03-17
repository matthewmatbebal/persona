'use server'

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./problem-card.module.sass";

interface IProblemCard {
    title: string
    description: ReactNode|string|string[]
    icon: "debit-card"|"dislike"|"lock"
    href?: string
}

const iconsParams = {
    'debit-card': { width: 140 },
    'dislike': { width: 110 },
    'lock': { width: 105 },
}

export default async function ProblemCard({title, description, icon="debit-card", href}:IProblemCard) {
    console.log(Array.isArray(description));

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <Image
                    src={`/problem-icons/${icon}.svg`}
                    alt="icon"
                    width={iconsParams[icon].width}
                    height={110}
                    className={styles.icon}
                />
            </div>
            <div className={styles.description}>
                {Array.isArray(description) ?
                    description.map((text) => <p key={text}>{text}</p>)
                : description}
            </div>
            {href && <div className={styles.linkWrapper}>
                <Link href={href} className={styles.link} target="_blank" rel="noopener noreferrer">Подробнее → </Link>
            </div>}
        </div>
    );
}
