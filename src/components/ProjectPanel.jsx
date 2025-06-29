import ReactMarkdown from "react-markdown";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { IoClose } from "react-icons/io5";

export default function ProjectPanel({ project, onClose }) {
  if (!project) return null;

  const githubLinks = Array.isArray(project.github)
    ? project.github
    : project.github
    ? [project.github]
    : [];

  const demoLinks = Array.isArray(project.demo)
    ? project.demo
    : project.demo
    ? [project.demo]
    : [];

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-[#121224] text-[#e0e0e0] shadow-lg p-6 overflow-y-auto z-50">
      
      <div className="flex justify-between items-start gap-4 mb-6">
        <h2 className="text-2xl font-bold text-[#FFD600]">{project.title}</h2>
        <button onClick={onClose} className="text-white hover:text-[#FFD600] text-2xl leading-none">
          <IoClose /> 
        </button>
      </div>


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

      {/* Button-styled links */}
      <div className="flex flex-wrap gap-3 text-sm mt-4">
        {githubLinks.map((link, index) => {
          const url = typeof link === "string" ? link : link?.url;
          const label =
            typeof link === "object" && link?.name
              ? link.name
              : `GitHub Repo ${index + 1}`;

          return (
            url && (
              <a
                key={`github-${index}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#3a3a3c] hover:bg-[#333] text-white px-3 py-2 rounded transition"
              >
                <FaGithub className="text-[#FFD600]" />
                {label}
              </a>
            )
          );
        })}

        {demoLinks.map((link, index) => {
          const url = typeof link === "string" ? link : link?.url;
          const label =
            typeof link === "object" && link?.name
              ? link.name
              : `Live Demo ${index + 1}`;

          return (
            url && (
              <a
                key={`demo-${index}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#3a3a3c] hover:bg-[#333] text-white px-3 py-2 rounded transition"
              >
                <FaExternalLinkAlt className="text-[#FFD600]" />
                {label}
              </a>
            )
          );
        })}

        {project.docs && (
          <a
            href={project.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#4285F4] text-white px-3 py-2 rounded hover:bg-[#3367D6] transition"
          >
            <SiGoogledocs className="text-lg" />
            Documentation
          </a>
        )}
      </div>
    </div>
  );
}
