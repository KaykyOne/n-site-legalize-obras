import { useState } from 'react';
import ContactModal from './ContactModal';

export default function ContactButton({ children, className, type = "transparente" }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const baseClasses = type === "primario"
        ? "bg-linear-to-r from-primary-color to-secondary-color text-white"
        : "border-2 border-white text-white hover:bg-white hover:text-primary-color";

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`group px-8 py-3 rounded-md font-medium transition-all duration-300 ${baseClasses} ${className || ''}`}
            >
                {children}
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
