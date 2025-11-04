import { useState } from 'react';

// Ícones SVG das redes sociais
const SocialIcons = {
    instagram: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    ),
    facebook: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    ),
    linkedin: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
    google: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
        </svg>
    ),
    indicacao: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
    ),
    youtube: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
    ),
    outro: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
    )
};

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        nome: '',
        problema: '',
        comoConheceu: ''
    });

    const redesSociais = [
        { value: 'instagram', label: 'Instagram', color: '#E4405F' },
        { value: 'facebook', label: 'Facebook', color: '#1877F2' },
        { value: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
        { value: 'google', label: 'Google / Site', color: '#4285F4' },
        { value: 'youtube', label: 'YouTube', color: '#FF0000' },
        { value: 'indicacao', label: 'Indicação de Amigo', color: '#10B981' },
        { value: 'outro', label: 'Outro', color: '#6B7280' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação básica
        if (!formData.nome || !formData.problema || !formData.comoConheceu) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Formatar mensagem para WhatsApp
        const redeSocialSelecionada = redesSociais.find(r => r.value === formData.comoConheceu);
        const mensagem = `*Nova solicitação de contato*\n\n` +
                        `👤 *Nome:* ${formData.nome}\n\n` +
                        `💬 *Problema/Dúvida:*\n${formData.problema}\n\n` +
                        `📱 *Como conheceu:* ${redeSocialSelecionada?.label || formData.comoConheceu}`;

        // Número do WhatsApp (substitua pelo número real da empresa)
        const numeroWhatsApp = '5517997419297'; // Formato: código país + DDD + número
        const mensagemCodificada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        // Abrir WhatsApp
        window.open(urlWhatsApp, '_blank');

        // Limpar formulário e fechar modal
        setFormData({ nome: '', problema: '', comoConheceu: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-linear-0 from-secondary-color to-primary-color p-6 rounded-t-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Entre em Contato</h2>
                        <button 
                            onClick={onClose}
                            className="text-white hover:text-white/80 transition-colors text-4xl leading-none font-light -mt-2"
                            aria-label="Fechar modal"
                        >
                            ×
                        </button>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base mt-2">Preencha o formulário abaixo e fale conosco pelo WhatsApp</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Nome */}
                    <div>
                        <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                            Nome Completo *
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-primary-color outline-none transition-all text-gray-900 placeholder-gray-400"
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>

                    {/* Problema/Dúvida */}
                    <div>
                        <label htmlFor="problema" className="block text-sm font-semibold text-gray-700 mb-2">
                            Seu Problema/Dúvida *
                        </label>
                        <textarea
                            id="problema"
                            name="problema"
                            value={formData.problema}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-primary-color outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
                            placeholder="Descreva sua dúvida ou problema..."
                            required
                        ></textarea>
                    </div>

                    {/* Como conheceu */}
                    <div>
                        <label htmlFor="comoConheceu" className="block text-sm font-semibold text-gray-700 mb-2">
                            Como conheceu a Legalize Obras? *
                        </label>
                        <div className="relative">
                            <select
                                id="comoConheceu"
                                name="comoConheceu"
                                value={formData.comoConheceu}
                                onChange={handleChange}
                                className="text-black w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-primary-color outline-none transition-all bg-white cursor-pointer appearance-none"
                                required
                            >
                                <option value="">Selecione uma opção</option>
                                {redesSociais.map(rede => (
                                    <option key={rede.value} value={rede.value}>
                                        {rede.label}
                                    </option>
                                ))}
                            </select>
                            {/* Ícone dinâmico */}
                            <div 
                                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" 
                                style={{ color: redesSociais.find(r => r.value === formData.comoConheceu)?.color || '#6B7280' }}
                            >
                                {formData.comoConheceu && SocialIcons[formData.comoConheceu] ? 
                                    <div style={{ color: redesSociais.find(r => r.value === formData.comoConheceu)?.color }}>
                                        {SocialIcons[formData.comoConheceu]()}
                                    </div> : 
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                }
                            </div>
                            {/* Seta dropdown */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all uppercase text-sm sm:text-base"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-linear-to-r from-primary-color to-secondary-color text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase text-sm sm:text-base"
                        >
                            <span>Enviar WhatsApp</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
