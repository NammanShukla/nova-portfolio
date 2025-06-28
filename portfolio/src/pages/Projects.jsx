import { useEffect, useState } from "react";
import matter from "gray-matter";
import ProjectPanel from "../components/ProjectPanel";

const projectsContext = import.meta.glob('/src/projects/*.md', {
  query: '?raw',
  import: 'default',
});

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      const loaded = [];

      for (const path in projectsContext) {
        const raw = await projectsContext[path]();
        const { data, content } = matter(raw);

        loaded.push({
          ...data,
          body: content,
          id: path,
        });
      }

      setProjects(loaded);
    }

    loadProjects();
  }, []);

  const filteredProjects = projects.filter((proj) => {
    const matchesSearch =
      proj.title?.toLowerCase().includes(search.toLowerCase()) ||
      proj.body?.toLowerCase().includes(search.toLowerCase());

    const matchesTag = tagFilter ? proj.tags?.includes(tagFilter) : true;

    return matchesSearch && matchesTag;
  });

  const uniqueTags = [...new Set(projects.flatMap((proj) => proj.tags || []))];

  return (
    <div className="min-h-screen p-6 bg-[#1a1a1d] text-[#e0e0e0] relative">
      {/* Search + Filter */}
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search Projects..."
          className="p-2 w-full sm:w-auto bg-[#2a2a2e] border border-[#3a3a3c] rounded text-sm"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagFilter(tagFilter === tag ? "" : tag)}
              className={`px-3 py-1 rounded text-xs ${
                tagFilter === tag
                  ? "bg-[#FFD600] text-black"
                  : "bg-[#3a3a3c] text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(proj)}
            className="bg-[#2c2c2e] p-5 rounded-lg shadow hover:shadow-lg transition duration-200 cursor-pointer"
          >
            <h2 className="text-lg font-bold text-[#FFD600] mb-2">
              {proj.title}
            </h2>
            <p className="text-sm text-gray-400 line-clamp-4">
              {proj.summary || proj.body?.slice(0, 160)}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#3a3a3c] text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Side Panel */}
      {selectedProject && (
        <ProjectPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
