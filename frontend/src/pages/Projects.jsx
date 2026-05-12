import { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

import API from "../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    API.get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

    <section
      id="projects"
      className="bg-black px-10 py-24"
    >

      <h1 className="text-5xl font-bold text-center mb-16">

        My Projects

      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-[#121212] border border-gray-800 rounded-3xl p-8 hover:border-[#1DB954] hover:shadow-[0_0_30px_rgba(29,185,84,0.2)] transition duration-500 hover:-translate-y-2"
          >

            <h2 className="text-2xl font-bold text-[#1DB954] mb-4">

              {project.title}

            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">

              {project.description}

            </p>

            <div className="flex gap-4">

              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#1DB954] hover:bg-green-400 text-black px-5 py-3 rounded-full font-semibold transition"
              >

                <FaGithub />

                GitHub

              </a>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-[#1DB954] hover:bg-[#1DB954] hover:text-black px-5 py-3 rounded-full transition"
              >

                <FiExternalLink />

                Demo

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;