import React from 'react'

export default function Button({children, type, className = "", ...props}) {

const cssPadrao = "flex w-fit pl-10 pr-10 gap-2 items-center justify-center cursor-pointer rounded-sm font-semibold hover:scale-105 transform transition-transform duration-200 ease-in-out hover:opacity-90";
const css = {
    primario: "bg-primary-color text-white px-4 py-2  hover:bg-primary-color-dark transition-colors" + ' ' + cssPadrao,
    whatsapp: "bg-linear-90 from-green-500 to-green-700 text-white px-4 py-2  hover:bg-green-700 transition-colors" + ' ' + cssPadrao,
    transparente: "bg-transparent border-2 border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors group" + ' ' + cssPadrao,
}

  return (
    <a className={`${css[type] || css.primario} ${className}`} {...props}>{children}</a>
  )
}