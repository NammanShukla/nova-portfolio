import profilePic from '../assets/profile-pic.jpeg'; 
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Profile() {
  return (
    <div className="w-full h-full px-4 py-16 flex flex-col items-center justify-start text-center bg-[#1a1a1d] text-[#e0e0e0] overflow-y-auto pb-4">
      <img
        src={profilePic}
        alt="Profile"
        className="w-50 h-50 rounded-full border-4 border-[#FFD600] mb-4 object-cover"
      />

      <h1 className="text-2xl font-bold text-[#FFD600] mb-2">Namman Shukla</h1>

      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed">
        Software Developer and Tech Enthusiast
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="https://discordapp.com/users/nammanc137"
          target="_blank"
          rel="noreferrer"
          className="bg-[#3a3a3c] p-3 rounded-full hover:bg-[#5865F2] transition"
        >
          <FaDiscord className="text-white text-xl" />
        </a>

        <a
          href="mailto:nammanshukla137@gmail.com"
          className="bg-[#3a3a3c] p-3 rounded-full hover:bg-[#D44638] transition"
        >
          <MdEmail className="text-white text-xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/namman-shukla-7b0531275/"
          target="_blank"
          className="bg-[#3a3a3c] p-3 rounded-full hover:bg-[#0072b1] transition"
        >
          <FaLinkedin className="text-white text-xl" />
        </a>

        <a
          href="https://github.com/NammanShukla"
          target="_blank"
          rel="noreferrer"
          className="bg-[#3a3a3c] p-3 rounded-full hover:bg-[#333] transition"
        >
          <FaGithub className="text-white text-xl" />
        </a>
      </div>

      <div className="mt-10 flex flex-col items-center w-full px-4">
        <img
        src="https://streak-stats.demolab.com/?user=NammanShukla&theme=tokyonight"
        alt="GitHub Streak"
        className="w-full max-w-md rounded-lg shadow-md"/>
      </div>
    </div>
  );
}