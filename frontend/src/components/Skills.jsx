import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript
} from "react-icons/si";

function Skills() {

  const skills = [

    {
      name: "Java",
      icon: <FaJava size={50} />
    },

    {
      name: "Spring Boot",
      icon: <SiSpringboot size={50} />
    },

    {
      name: "React",
      icon: <FaReact size={50} />
    },

    {
      name: "MySQL",
      icon: <SiMysql size={50} />
    },

    {
      name: "JavaScript",
      icon: <SiJavascript size={50} />
    },

    {
      name: "HTML",
      icon: <FaHtml5 size={50} />
    },

    {
      name: "CSS",
      icon: <FaCss3Alt size={50} />
    },

    {
      name: "Git",
      icon: <FaGitAlt size={50} />
    }

  ];

  return (

    <section
      id="skills"
      className="bg-black px-10 py-24"
    >

      <h1 className="text-5xl font-bold text-center mb-16">

        Skills

      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-[#121212] border border-gray-800 hover:border-[#1DB954] rounded-3xl p-8 flex flex-col justify-center items-center gap-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(29,185,84,0.2)]"
          >

            <div className="text-[#1DB954]">

              {skill.icon}

            </div>

            <h2 className="text-2xl font-semibold">

              {skill.name}

            </h2>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;