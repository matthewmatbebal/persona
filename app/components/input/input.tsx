'use client'

import styles from "./input.module.sass";

interface IInput {
    title: string
    name: string
    id?: string
    type?: string
    placeholder?: string
}

export default function Input({title, name, id="input", type="text", placeholder}:IInput) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>{title}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                name={name}
                className={styles.input}
            />
        </div>
    );
}
