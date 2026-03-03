'use client'

import { createContext, useCallback, useContext, useRef, useState } from 'react'
import styles from './toast.module.sass'

interface Toast {
    id: number
    message: string
    type: 'success' | 'error'
}

interface ToastContextValue {
    showToast: (message: string, type?: 'success' | 'error') => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([])
    const counter = useRef(0)

    const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
        const id = ++counter.current
        setToasts(prev => [...prev, { id, message, type }])
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, 4000)
    }, [])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className={styles.container}>
                {toasts.map(toast => (
                    <div key={toast.id} className={`${styles.toast} ${styles[toast.type]}`}>
                        <span className={styles.icon}>{toast.type === 'success' ? '✓' : '✕'}</span>
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export function useToast() {
    const ctx = useContext(ToastContext)
    if (!ctx) throw new Error('useToast must be used inside ToastProvider')
    return ctx
}
