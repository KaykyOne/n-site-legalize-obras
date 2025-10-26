import React from 'react'

let url = '';
if (typeof window !== "undefined") {
    url = window.location.href.origin || '';
}

export default function Footer() {
    return (
        <footer className='bg-black w-full flex flex-col gap-10 items-center justify-center px-6 md:px-20 lg:px-40 text-white min-h-[300px] pt-10 pb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 w-full'>
                <div className='flex flex-col items-center lg:items-start justify-center gap-3'>
                    <div className='flex gap-2 justify-center lg:justify-start w-full'>
                        <div className='uppercase text-white font-bold text-2xl md:text-3xl text-center lg:text-left'>legalize obras</div>
                    </div>
                    <p className='text-sm text-neutral-400 text-justify leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae dolorem alias libero officia non veritatis reiciendis illum sit, quo dolor, facere veniam explicabo eaque? Ipsum voluptatem beatae optio magni Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, neque officiis maxime optio omnis architecto minima, exercitationem corrupti a nam alias inventore rem eveniet veniam, quae natus? Dolorum, libero qui.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-6 w-full text-center sm:text-left'>
                    <div className='h-full w-full flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <h3 className='text-neutral-300 text-sm'>Contato</h3>
                            <h1 className='text-xl md:text-2xl font-bold'>(17) 99669-6293</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-neutral-300 text-sm'>E-mail:</h3>
                            <h1 className='text-xl md:text-2xl font-bold break-words'>asdasdasd@asdasd.com</h1>
                        </div>
                    </div>

                    <div className='h-full w-full flex flex-col gap-2 text-sm items-center sm:items-start'>
                        <a href={`${url}/`} className='hover:text-primary-color transition-colors'>Home</a>
                        <a href={`${url}/sobre`} className='hover:text-primary-color transition-colors'>Sobre</a>
                        <a href={`${url}/duvidas`} className='hover:text-primary-color transition-colors'>Dúvidas</a>
                        <a href={`${url}/blog`} className='hover:text-primary-color transition-colors'>Blog</a>
                    </div>
                </div>
            </div>

            <div className='bg-neutral-500 w-full h-[1px]'></div>
            <a className='text-xs md:text-sm text-neutral-400 text-center px-4'>Todos os direitos reservados @legalize obras</a>
        </footer>
    )
}
