import { useState } from 'react';

const projects = [
  { id: 1, title: "Project One", description: "Details about Project One" },
  { id: 2, title: "Project Two", description: "Details about Project Two" },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative flex-grow w-full p-4 bg-[#1a1a1d] text-[#e0e0e0] min-h-screen pb-24 flex justify-center items-center">
      <div className="w-full md:w-2/3 grid grid-cols-1 gap-4 z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-[#2c2c2e] border border-[#3a3a3c] cursor-pointer hover:bg-[#3a3a3c]"
            onClick={() => setSelected(project)}
          >
            {project.title}
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-[#121224]/70 text-[#FFD600] backdrop-blur-md shadow-xl p-6 overflow-y-auto z-50">
          <button
            onClick={() => setSelected(null)}
            className="text-white mb-4 hover:text-red-400"
          >
            ✕ Close
          </button>
          <h2 className="text-lg font-bold mb-2">{selected.title}</h2>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
}
