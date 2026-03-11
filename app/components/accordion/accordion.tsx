'use client'

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image";
import styles from "./accordion.module.sass";

interface IAccordion {
    title: string
    description: string
    className?: string
    isOpen: boolean
    onToggle: () => void
}

export default function Accordion({title, description, className, isOpen, onToggle}:IAccordion) {
    return (
        <div className={`${styles.accordion} ${className ?? ''}`}>
            <div onClick={onToggle} className={styles.header}>
                <div className={styles.title}>{title}</div>
                <AnimatePresence>
                    <motion.div
                        initial={{rotate: isOpen ? 45 : 0}}
                        animate={{rotate: isOpen ? 45 : 0}}
                        transition={{ type: "spring", stiffness: 200 }}
                        className={styles.icon}
                    >
                        <Image
                            src="/plus.svg"
                            alt="plus"
                            width={24}
                            height={24}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {isOpen && <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        opacity: { type: "spring", delay: 0.1, visualDuration: 0.3 },
                        height: { type: "spring", visualDuration: 0.3, bounce: 0.1 },
                    }}
                    className={styles.content}
                >
                    <div className={styles.description}>{description}</div>
                </motion.div>}
            </AnimatePresence>
        </div>
    );
}
