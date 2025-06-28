import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from 'react-icons/fa';

export default function Resume() {
  return (
    <div className="w-full h-full bg-[#1e1e20] text-[#e0e0e0] px-4 py-10 md:px-12 md:py-16 pb-28 overflow-y-auto">
      <div className="w-full space-y-10 text-base md:text-lg leading-relaxed ">

        {/* About Me */}
        <div>
          <div className="flex items-center gap-3 text-[#FFD600] text-xl font-semibold mb-2">
            <FaUser />
            <span>About Me</span>
          </div>
          <p className="text-base md:text-base leading-relaxed">
            A detail oriented and self driven software developer with a grounded approach to work. With experience internationally and in-team environments, I bring a balanced mix of technical skills and soft skills.
            <br />
            Outside of development, I stay committed to improving my technical knowledge, exploring new technologies and growing as a professional. 
          </p>
        </div>

        {/* Education */}
          <div>
              <div className="flex items-center gap-3 text-[#FFD600] text-xl font-semibold mb-2">
                <FaGraduationCap />
                <span>Education</span>
              </div>
            <ul class="text-base md:text-base space-y-2">

              <li>
                <strong>James Cook University, Singapore</strong> — Bachelor of IT (2024)<br />
                <ol className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>GPA - 5.02 / 7</li>
                  <li>Earned High Distinction in Advanced Software Engineering, Collective Intelligence & Entrepreneurship</li>
                  <li>First Prize Winner @ JCUS 29th Convergence Conference</li>
                  <li>Elected IT Club President @ iD8Labs JCUS</li>
                </ol>
              </li>

            </ul>
          </div>


        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 text-[#FFD600] text-xl font-semibold mb-2">
            <FaBriefcase />
            <span>Work Experience</span>
          </div>
          <ul className="text-base md:text-base space-y-6">
            <li>
              <strong>Software Intern — Think Future Technologies (TFTUS)</strong> <br />
              <span className="text-gray-500 italic">May 2025 – Present</span><br />
              Working under the guidance of Full Stack Developer Ms. Jyoti Mishra, contributing to productive projects and enhancing skills in modern web development.  
              Responsibilities include research, documentation, and iterative feature building across the stack.
            </li>
            
            <li>
            <strong>Mentorship Programme — Software Intern (Singapore)</strong> <br />
            <span className="text-gray-500 italic">Feb 2024 – April 2024</span><br />
            3-month industry mentorship during final semester at JCUS under Ms. Xinhang Xu, Android Developer at SPH Media.  
            Gained firsthand exposure to agile workflows, team communication, and the expectations of a real-world dev environment.
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}
