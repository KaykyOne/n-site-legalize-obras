import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';

export default function ContactButton({ children, className, type = "transparente" }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cssPadrao = "flex w-fit pl-10 pr-10 gap-2 items-center justify-center cursor-pointer rounded-sm font-semibold hover:scale-105 transform transition-transform duration-200 ease-in-out hover:opacity-90";
    const css = {
        primario: "bg-primary-color text-white px-4 py-2  hover:bg-primary-color-dark transition-colors" + ' ' + cssPadrao,
        whatsapp: "bg-linear-90 from-green-500 to-green-700 text-white px-4 py-2  hover:bg-green-700 transition-colors" + ' ' + cssPadrao,
        transparente: "bg-transparent border-2 border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors group" + ' ' + cssPadrao,
    }

    useEffect(() => {
        if(isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`group ${css[type]} ${className || ''}`}
            >
                {children}
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
