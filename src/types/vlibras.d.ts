// Declaração de tipos para atributos customizados do VLibras no Astro
declare module 'astro/jsx-runtime' {
  namespace JSX {
    interface HTMLAttributes {
      vw?: boolean | '';
      'vw-access-button'?: boolean | '';
      'vw-plugin-wrapper'?: boolean | '';
    }
  }
}

// Declaração de tipos para a API do VLibras no window
declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => void;
    };
  }
}

export {};
