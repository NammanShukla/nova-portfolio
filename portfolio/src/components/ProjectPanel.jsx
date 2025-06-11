export default function ProjectPanel({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-[#121224] text-[#FFD600] shadow-lg p-6 overflow-y-auto z-50">
      <button onClick={onClose} className="text-white mb-4">Close</button>
      <h2 className="text-lg font-bold mb-2">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}