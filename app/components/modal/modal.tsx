'use client'

import { AnimatePresence, motion } from "motion/react"
import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import styles from "./modal.module.sass";

interface IModal {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function Modal({children, isOpen, onClose}:IModal) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, [])

    if (!isReady) {
        return;
    }

    const ModalContainer = () => {
        return (
            <AnimatePresence>
                <motion.div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={isOpen ? onClose : undefined}>
                    {isOpen && <motion.div className={styles.content}>
                        {children}
                    </motion.div>}
                </motion.div>
            </AnimatePresence>
        )
    }

    return createPortal(<ModalContainer/>, document.body);
}
