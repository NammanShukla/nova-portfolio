import profilePic from '../assets/profile-pic.jpeg'; 
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-[#e0e0e0] w-full max-w-lg px-2">
      <img
        src={profilePic}
        alt="Profile"
        className="w-50 h-50 rounded-full border-4 border-[#FFD600] mb-4 object-cover"
      />

      <h1 className="text-2xl font-bold text-[#FFD600] mb-2">Namman Shukla</h1>

      <p className="text-sm text-gray-400 mb-6">
        Tech enthusiast from New Delhi. I code, I game, I watch anime, and I'm on a quest to level up in life — mentally, physically, and professionally.
      </p>

      <div className="flex gap-3">
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
    </div>
  );
}