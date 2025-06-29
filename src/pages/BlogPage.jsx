import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const blogContext = import.meta.glob('/src/blogs/*.md', {
  query: '?raw',
  import: 'default',
});

export default function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function loadBlog() {
      const path = Object.keys(blogContext).find((p) =>
        p.endsWith(`${slug}.md`)
      );

      if (path) {
        const raw = await blogContext[path]();
        const { data, content } = matter(raw);
        setBlog({ ...data, body: content });
      }
    }

    async function loadFeatured() {
      const loaded = [];

      for (const path in blogContext) {
        const raw = await blogContext[path]();
        const { data } = matter(raw);
        const id = path.split('/').pop().replace('.md', '');

        if (data.featured) {
          loaded.push({ ...data, slug: id });
        }
      }

      setFeatured(loaded.slice(0, 3));
    }

    loadBlog();
    loadFeatured();
  }, [slug]);

  if (!blog) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#121224] text-[#e0e0e0]">
      <div className="px-4 py-6 sm:px-6 md:px-12 lg:px-20 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12">
          
          {/* Sidebar (only desktop) */}
          <aside className="hidden md:flex flex-col">
            <button
              onClick={() => navigate("/blog")}
              className="mb-4 inline-flex items-center px-4 py-2 bg-[#FFD600] text-black rounded hover:bg-yellow-400 transition"
            >
              ← Back to Blogs
            </button>

            <h3 className="text-lg font-bold text-[#FFD600] mb-2"> | Featured |</h3>
            <ul className="space-y-2">
              {featured.map((f) => (
                <li
                  key={f.slug}
                  onClick={() => navigate(`/blogs/${f.slug}`)}
                  className="cursor-pointer text-sm text-[#e0e0e0] hover:text-[#FFD600] transition"
                >
                  {f.title}
                </li>
              ))}
            </ul>
          </aside>

          {/* Blog Content */}
          <main className="w-full">
            {/* Mobile back button */}
            <button
              onClick={() => navigate("/blog")}
              className="md:hidden mb-6 inline-flex items-center px-4 py-2 bg-[#FFD600] text-black rounded hover:bg-yellow-400 transition"
            >
              ← Back to Blogs
            </button>

            <h1 className="text-3xl font-bold text-[#FFD600] mb-2">{blog.title}</h1>

            {blog.date && (
              <p className="text-sm text-gray-400 mb-4">
                {new Date(blog.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#3a3a3c] text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert prose-sm md:prose-base max-w-none mb-12">
              <ReactMarkdown 
                children={blog.body}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              />
            </div>

            {/* Featured on Mobile */}
            <div className="block md:hidden mt-10">
              <h3 className="text-lg font-bold text-[#FFD600] mb-2">| Featured |</h3>
              <ul className="space-y-2">
                {featured.map((f) => (
                  <li
                    key={f.slug}
                    onClick={() => navigate(`/blogs/${f.slug}`)}
                    className="cursor-pointer text-sm text-[#e0e0e0] hover:text-[#FFD600] transition"
                  >
                    {f.title}
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
