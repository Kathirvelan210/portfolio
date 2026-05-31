import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaNetworkWired,
  FaBrain,
  FaDatabase,
  FaCogs
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiSocketdotio,
  SiCplusplus
} from "react-icons/si";

import { MdApi } from "react-icons/md";
import { BsCpuFill } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
function Skills() {

  const skills = [

    { name: "Java", icon: <FaJava size={50} /> },
    { name: "Python", icon: <FaPython size={50} /> },
    { name: "C++", icon: <SiCplusplus size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },

    { name: "React.js", icon: <FaReact size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "Express.js", icon: <SiExpress size={50} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={50} /> },

    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "MySQL", icon: <SiMysql size={50} /> },

    { name: "HTML5", icon: <FaHtml5 size={50} /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },

    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "GitHub", icon: <FaGithub size={50} /> },

    { name: "Socket.IO", icon: <SiSocketdotio size={50} /> },

    { name: "REST APIs", icon: <MdApi size={50} /> },

    { name: "DSA", icon: <FaBrain size={50} /> },

    { name: "OOP", icon: <FaCogs size={50} /> },

    { name: "DBMS", icon: <FaDatabase size={50} /> },

    { name: "Operating Systems", icon: <BsCpuFill size={50} /> },

    { name: "Computer Networks", icon: <FaNetworkWired size={50} /> },

    { name: "Machine Learning", icon: <FaBrain size={50} /> },

    {
      name: "MERN Stack",
      icon: (
        <div className="text-3xl font-bold text-[#1DB954]">
          MERN
        </div>
      )
    },
    { name: "Postman", icon: <SiPostman size={50} /> }

  ];

  return (

    <section
      id="skills"
      className="bg-black px-6 md:px-10 py-24"
    >

      <h1 className="text-5xl font-bold text-center mb-16">

        Skills

      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="
              bg-[#121212]
              border border-gray-800
              hover:border-[#1DB954]
              rounded-3xl
              p-6
              flex flex-col
              justify-center
              items-center
              gap-5
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(29,185,84,0.25)]
            "
          >

            <div className="text-[#1DB954]">

              {skill.icon}

            </div>

            <h2 className="text-xl font-semibold text-center">

              {skill.name}

            </h2>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;