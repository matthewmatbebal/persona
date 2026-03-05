'use client'

import Button from "../button";
import Modal from "../../modal/modal";
import { useState } from "react";
import QuizModal from "../../quiz-modal/quiz-modal";

interface CalculateButtonProps {
    variant?: "dark" | "primary"
    size?: "sm" | "md"
    children?: string
    className?: string
}

export default function CalculateButton({ variant = "dark", size = "md", children = "Оставить заявку", className }: CalculateButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <Button variant={variant} size={size} onClick={() => setIsOpen(true)} className={className}>{children}</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <QuizModal onClose={() => setIsOpen(false)} />
        </Modal>
    </>);
}