import ReactMarkdown from "react-markdown";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export default function ProjectPanel({ project, onClose }) {
  if (!project) return null;

  const githubLinks = Array.isArray(project.github)
    ? project.github
    : project.github
    ? [project.github]
    : [];

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-[#121224] text-[#e0e0e0] shadow-lg p-6 overflow-y-auto z-50">
      <button
        onClick={onClose}
        className="text-white mb-4 font-bold text-sm hover:text-[#FFD600]"
      >
        Close
      </button>

      <h2 className="text-2xl font-bold text-[#FFD600] mb-4">{project.title}</h2>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded mb-4 border border-[#FFD600]"
        />
      )}

      <div className="prose prose-invert prose-sm md:prose-base max-w-none mb-6">
        <ReactMarkdown>{project.body}</ReactMarkdown>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-[#3a3a3c] text-white px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 🔥 Button-styled links */}
      <div className="flex flex-wrap gap-3 text-sm mt-4">
        {githubLinks.map((link, index) => {
          const url = typeof link === "string" ? link : link?.url;
          const label = typeof link === "object" && link?.name
            ? link.name
            : `GitHub Repo ${index + 1}`;

          return (
            url && (
              <a
                key={index}
                href={url}
                target="_blank"
                className="flex items-center gap-2 bg-[#3a3a3c] hover:bg-[#333] text-white px-3 py-2 rounded transition"
              >
                <FaGithub className="text-[#FFD600]" />
                {label}
              </a>
            )
          );
        })}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 bg-[#3a3a3c] hover:bg-[#0072b1] text-white px-3 py-2 rounded transition"
          >
            <FaExternalLinkAlt className="text-[#00FFA3]" />
            Live Demo
          </a>
        )}

        {project.doc && (
          <a
            href={project.doc}
            target="_blank"
            className="flex items-center gap-2 bg-[#3a3a3c] hover:bg-[#9b59b6] text-white px-3 py-2 rounded transition"
          >
            <FaFileAlt className="text-[#FFD600]" />
            Documentation
          </a>
        )}
      </div>
    </div>
  );
}
