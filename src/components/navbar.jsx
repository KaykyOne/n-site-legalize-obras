import React, { useState } from 'react'
import Button from './button'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Base path para GitHub Pages
    const basePath = '/n-site-legalize-obras';

    const Menu = () => {
        return (
            <nav className='gap-6 fade-in fade-in mr-6 text-secondary-color mt-[70px] bg-white font-semibold flex flex-col w-full items-center fixed pt-4 pb-4 lg:hidden z-20 shadow-2xl'>
                <a href={`${basePath}/`} className='hover:border-b'>Home</a>
                <a href={`${basePath}/sobre`} className='hover:border-b'>Sobre</a>
                <a href={`${basePath}/duvidas`} className='hover:border-b'>Dúvidas</a>
                <a href={`${basePath}/blog`} className='hover:border-b'>Blog</a>
                <a className='w-full pl-5 pr-5'>
                    <Button type={'whatsapp'} className='!w-full'>
                        <img src={`${basePath}/icon-whatsapp.png`} alt="WhatsApp Icon" className='w-5 h-5 mr-2' />
                        Contato
                    </Button>
                </a>

            </nav >
        )
    }
    return (
        <div>
            {/* <div className='w-full h-[25px] bg-green-500'>

            </div> */}
            <nav className='w-full h-[70px] bg-linear-90 from-primary-color to-secondary-color flex justify-between items-center lg:pl-40 lg:pr-40 pl-6 pr-6 z-20 fixed'>
                <a href={`${basePath}/`} className='flex items-center gap-3'>
                    <img src={`${basePath}/img-logo.png`} alt="Legalize Obras Logo" className='h-12 rounded-full' />
                    <span className='uppercase text-white font-bold'>legalize obras</span>
                </a>
                <div className='flex gap-3 items-center justify-center'>
                    <nav className='gap-6 mr-6 text-white font-semibold hidden lg:flex'>
                        <a href={`${basePath}/`} className='hover:border-b'>Home</a>
                        <a href={`${basePath}/sobre`} className='hover:border-b'>Sobre</a>
                        <a href={`${basePath}/duvidas`} className='hover:border-b'>Dúvidas</a>
                        <a href={`${basePath}/blog`} className='hover:border-b'>Blog</a>
                    </nav >
                    <Button type={'whatsapp'} className='hidden lg:flex'>
                        <img src={`${basePath}/icon-whatsapp.png`} alt="WhatsApp Icon" className='w-5 h-5 mr-2' />
                        Contato
                    </Button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='flex lg:hidden text-white hover:scale-105 hover:rotate-90 transition-all duration-300 cursor-pointer'>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </div>

            </nav>
            {isOpen && <Menu />}
        </div>

    )
}
