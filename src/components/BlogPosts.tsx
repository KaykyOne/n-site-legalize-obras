import { useEffect, useState } from "react";

const API_URL = "https://vps62603.publiccloud.com.br";

interface Post {
  id: number;
  title: string;
  category: string;
  coverImage: { url: string };
  excerpt: string;
  content: string;
  publicadoEm: string;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/posts?populate=*`);
        
        if (!res.ok) {
          throw new Error(`Erro ${res.status}: ${res.statusText}`);
        }
        
        const data = await res.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-color mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <span className="material-symbols-outlined text-red-500 text-4xl mb-4 block">error</span>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Erro ao carregar posts</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-gray-400 text-6xl mb-4 block">article</span>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum post encontrado</h3>
        <p className="text-gray-500">Volte em breve para ver novos conteúdos!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        const readTime = Math.ceil(post.content.split(" ").length / 200);
        
        return (
          <article
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={`${API_URL}${post.coverImage.url}`}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-color text-white px-3 py-1 rounded-sm text-xs font-semibold uppercase">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>{new Date(post.publicadoEm).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>{readTime} min de leitura</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-secondary-color mb-3 leading-tight hover:text-primary-color transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-primary-color font-semibold text-sm uppercase hover:gap-3 transition-all duration-200"
              >
                Ler mais
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}