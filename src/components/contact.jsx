import React, { useState } from 'react';
import ContactButton from './ContactButton';

export default function Contact() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de envio do formulário
        console.log('Formulário enviado:', formData);
    };

    return (
        <div className="w-full bg-black text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-40">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Entre em contato</h2>
                    <p className="text-base sm:text-lg text-gray-300 px-4">
                        Preencha seus dados e envie. Em breve, um de nossos especialistas entrará em contato com você!
                    </p>
                </div>
                <ContactButton
                    client:load
                    type="primario"
                >
                    <img
                        src="/icon-whatsapp.png"
                        alt="WhatsApp"
                        class="w-5 h-5 mr-2 group-hover:invert"
                        width="20"
                        height="20"
                    />
                    FALAR COM ESPECIALISTA
                </ContactButton>
            </div>
        </div>
    );
}
