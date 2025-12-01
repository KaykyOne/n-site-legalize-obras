import { useEffect, useState } from "react";
import Post from "./post";
import ContactButton from "./ContactButton";

interface Props {
  id: string;
}

export default function BlogPostPage({ id }: Props) {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Post id={id} />
      
      {/* CTA Section */}
      <div className="px-6 md:px-20 lg:px-40 py-16 bg-linear-to-r from-secondary-color to-primary-color">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gostou do conteúdo? Fale com nossos especialistas!
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Nossa equipe está pronta para ajudar sua empresa a economizar e regularizar suas obras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactButton
              type="transparente"
              className="text-lg sm:text-xl font-normal uppercase flex items-center justify-center"
            >
              FALE COM UM ESPECIALISTA
            </ContactButton>
            <a
              href="/blog"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Voltar ao Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}