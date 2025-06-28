import ReactMarkdown from "react-markdown";

export default function ProjectPanel({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-[#121224] text-[#e0e0e0] shadow-lg p-6 overflow-y-auto z-50">
      <button onClick={onClose} className="text-white mb-4 font-bold text-sm hover:text-[#FFD600]">
        Close
      </button>

      <h2 className="text-2xl font-bold text-[#FFD600] mb-4">
        {project.title}
      </h2>

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

      <div className="flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-green-400 hover:underline"
          >
            Live Demo
          </a>
        )}
        {project.doc && (
          <a
            href={project.doc}
            target="_blank"
            className="text-purple-400 hover:underline"
          >
            Documentation
          </a>
        )}
      </div>
    </div>
  );
}
