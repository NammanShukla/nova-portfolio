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
  const [tagFilter, setTagFilter] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }

    loadProjects();
  }, []);

  const toggleTag = (tag) => {
    setTagFilter((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter((proj) => {
    const matchesSearch =
      proj.title?.toLowerCase().includes(search.toLowerCase()) ||
      proj.body?.toLowerCase().includes(search.toLowerCase());

    const matchesTag =
      tagFilter.length === 0 ||
      tagFilter.every((tag) => proj.tags?.includes(tag));

    return matchesSearch && matchesTag;
  });

  const uniqueTags = [...new Set(projects.flatMap((proj) => proj.tags || []))];

  return (
    <div className="min-h-screen bg-[#1a1a1d] text-[#e0e0e0] relative">
      {/* Search + Filter */}
      <div
        className={`p-6 pb-0 transition-all duration-300 ease-in-out ${
          selectedProject ? "md:mr-[33%]" : ""
        }`}
      >
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <input
            type="text"
            placeholder="Search Projects..."
            className="p-3 w-full sm:w-1/2 bg-[#2a2a2e] border border-[#FFD600] rounded text-base focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded text-xs ${
                  tagFilter.includes(tag)
                    ? "bg-[#FFD600] text-black"
                    : "bg-[#3a3a3c] text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div
        className={`p-6 pt-0 transition-all duration-300 ease-in-out ${
          selectedProject ? "md:mr-[33%]" : ""
        }`}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {loading ? (
            <div className="text-center text-gray-400 col-span-full py-10">
              Loading...
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center text-gray-500 col-span-full py-10">
              No Results Found.
            </div>
          ) : (
            filteredProjects.map((proj, idx) => (
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
            ))
          )}
        </div>
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
