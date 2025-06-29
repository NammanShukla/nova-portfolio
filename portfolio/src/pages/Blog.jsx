import { useEffect, useState } from "react";
import matter from "gray-matter";
import BlogCard from "../components/BlogCard";

const blogContext = import.meta.glob('/src/blogs/*.md', {
  query: '?raw',
  import: 'default',
});

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const loaded = [];

      for (const path in blogContext) {
        const raw = await blogContext[path]();
        const { data, content } = matter(raw);

        loaded.push({
          ...data,
          body: content,
          id: path,
          slug: path.split('/').pop().replace('.md', ''),
        });
      }

      loaded.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBlogs(loaded);
    }

    loadBlogs();
  }, []);

  const toggleTag = (tag) => {
    setTagFilter((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(search.toLowerCase()) ||
      blog.body?.toLowerCase().includes(search.toLowerCase());

    const matchesTag =
      tagFilter.length === 0 ||
      tagFilter.every((tag) => blog.tags?.includes(tag));

    return matchesSearch && matchesTag;
  });

  const uniqueTags = [...new Set(blogs.flatMap((b) => b.tags || []))];

  return (
    <div className="min-h-screen p-6 bg-[#121224] text-[#e0e0e0] px-4 py-6 sm:px-8 pb-26">
      <h1 className="text-4xl font-bold text-center text-[#FFD600] mb-6">My Blog</h1>

      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="p-3 bg-[#1a1a1d] border border-[#FFD600] rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2 justify-center">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                tagFilter.includes(tag)
                  ? "bg-[#FFD600] text-black"
                  : "bg-[#2a2a2e] text-white hover:bg-[#3a3a3c]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
        {filteredBlogs.length === 0 && (
          <div className="text-center text-gray-500 col-span-full py-10">
            No blog posts found.
          </div>
        )}
      </div>
    </div>
  );
}
