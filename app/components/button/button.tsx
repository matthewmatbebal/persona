'use client'

import { ReactNode } from "react";
import styles from "./button.module.sass";

interface IButton {
    children: ReactNode,
    onClick?: () => void
    variant?: "dark"|"primary"
    size?: "sm"|"md"
    className?: string
    type?: "button"|"submit"|"reset"
    disabled?: boolean
}

export default function Button({children, onClick, variant='primary', size='sm', className='', type='button', disabled=false}:IButton) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        >
            <span className={styles.inner}>{children}</span>
        </button>
    );
}
