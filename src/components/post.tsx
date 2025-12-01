import { useEffect, useState } from "react";

// Lazy load para react-share (problema com SSR)
const WhatsappShareButton = ({ url, title, children }: any) => {
  const [isClient, setIsClient] = useState(false);
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    import("react-share").then(module => {
      setComponent(() => module.WhatsappShareButton);
    });
  }, []);

  if (!isClient || !Component) return <>{children}</>;
  return <Component url={url} title={title}>{children}</Component>;
};

const WhatsappIcon = (props: any) => {
  const [isClient, setIsClient] = useState(false);
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    import("react-share").then(module => {
      setComponent(() => module.WhatsappIcon);
    });
  }, []);

  if (!isClient || !Component) return null;
  return <Component {...props} />;
};


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

export default function BlogPost({id}: {id: string}) {
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    console.log("Fetching post with ID:", id);
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/posts?populate=*`);
        const data = await res.json();
        const posts: Post[] = data.data || [];
        const foundPost = posts.find((p) => p.id === parseInt(id || "0"));
        if (!foundPost) {
          console.error("Post não encontrado com ID:", id);
          return;
        }
        setPost(foundPost);
        setRelatedPosts(
          posts
            .filter((p) => p.category === foundPost.category && p.id !== foundPost.id)
            .slice(0, 3)
        );
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchPosts();
  }, [id]);

  if (!post) return <div>Carregando...</div>;

  const readTime = post.content.split(" ").length / 200;

  return (
      <div className="w-full min-h-screen bg-gray-50">
        {/* Header da Postagem */}
        <div className="relative">
          <div className="absolute w-full h-full">
            <div className="absolute bg-black/60 w-full h-full backdrop-blur-sm" />
            <img
              className="w-full h-full object-cover"
              src={`${API_URL}${post.coverImage.url}`}
              alt={post.title}
            />
          </div>

          <div className="relative px-6 md:px-20 lg:px-40 py-20 md:py-32 text-white">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm">
              <a href="/" className="hover:text-primary-color transition-colors">Home</a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary-color transition-colors">Blog</a>
              <span>/</span>
              <span className="text-gray-300">{post.title}</span>
            </div>

            {/* Categoria */}
            <div className="mb-4">
              <span className="bg-primary-color text-white px-4 py-2 rounded-sm text-sm font-semibold uppercase">
                {post.category}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl capitalize">
              {post.title}
            </h1>

            {/* Meta informações */}
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">person</span>
                <span>Legalize obras</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                <span>{new Date(post.publicadoEm).toLocaleDateString("pt-BR")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">schedule</span>
                <span>{readTime.toFixed(0)} min de leitura</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo da Postagem */}
        <div className="px-6 md:px-20 lg:px-40 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Excerpt */}
            <div className="bg-primary-color/10 border-l-4 border-primary-color p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-700 italic capitalize">{post.excerpt}</p>
            </div>

            {/* Conteúdo principal */}
            <article className="prose prose-lg max-w-none">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Compartilhar */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-secondary-color">
                Compartilhe este artigo
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <WhatsappShareButton 
                  url={typeof window !== 'undefined' ? window.location.href : ''} 
                  title={post.title}
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Relacionados */}
        {relatedPosts.length > 0 && (
          <div className="px-6 md:px-20 lg:px-40 py-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary-color text-center">
              Artigos Relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${API_URL}${relatedPost.coverImage.url}`}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-color text-white px-3 py-1 rounded-sm text-xs font-semibold uppercase">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {`${(relatedPost.content.split(" ").length / 200).toFixed(0)} min de leitura`}
                    </div>

                    <h3 className="text-lg font-bold text-secondary-color mb-3 leading-tight hover:text-primary-color transition-colors">
                      {relatedPost.title}
                    </h3>

                    <a
                      href={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center gap-2 text-primary-color font-semibold text-sm uppercase hover:gap-3 transition-all duration-200"
                    >
                      Ler mais
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )} 
      </div>
  );
}
