import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="bg-[#1e1e22] p-5 rounded-lg border border-[#2c2c2e] shadow hover:shadow-lg transition duration-200 block"
    >
      <h2 className="text-xl font-bold text-[#FFD600] mb-2">{blog.title}</h2>

      <p className="text-sm text-gray-400 line-clamp-4">
        {blog.summary || blog.body.slice(0, 160)}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {blog.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-[#3a3a3c] text-gray-300 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
