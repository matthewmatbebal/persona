'use client'

import Button from "../button";
import Modal from "../../modal/modal";
import { useState } from "react";
import QuizModal from "../../quiz-modal/quiz-modal";

export default function CalculateButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <Button variant="primary" size="md" onClick={() => setIsOpen(true)}>Рассчитать стоимость услуг</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <QuizModal onClose={() => setIsOpen(false)} />
        </Modal>
    </>);
}