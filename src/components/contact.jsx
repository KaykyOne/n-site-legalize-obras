import React, { useState } from 'react';
import Button from './button';

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
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Entre em contato</h2>
                    <p className="text-base sm:text-lg text-gray-300 px-4">
                        Preencha seus dados e envie. Em breve, um de nossos especialistas entrará em contato com você!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Campo Nome */}
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium mb-2">
                                Nome completo *
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-color text-white placeholder-gray-400 text-sm sm:text-base"
                                placeholder="Seu nome"
                            />
                        </div>

                        {/* Campo Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                E-mail *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-color text-white placeholder-gray-400 text-sm sm:text-base"
                                placeholder="seu@email.com"
                            />
                        </div>
                    </div>

                    {/* Campo Telefone */}
                    <div>
                        <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                            Telefone *
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-color text-white placeholder-gray-400 text-sm sm:text-base"
                            placeholder="(00) 00000-0000"
                        />
                    </div>

                    {/* Campo Mensagem */}
                    <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary-color text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                            placeholder="Conte-nos sobre seu projeto..."
                        ></textarea>
                    </div>

                    {/* Botão de Envio */}
                    <div className="flex justify-center pt-2 md:pt-4">
                        <Button type="primario" className="w-full sm:w-auto px-8 sm:px-12! py-3 sm:py-4! text-base sm:text-lg!">
                            Enviar mensagem
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
