import { motion } from "framer-motion";

function Hero() {

  return (

    <section id="home" className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6 relative overflow-hidden" >

      {/* Glow Effect */}

      <div className="absolute w-[500px] h-[500px] bg-[#1DB954]/20 rounded-full blur-3xl">

      </div>

      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#1DB954] text-xl mb-6 z-10"
      >

        FULL STACK DEVELOPER

      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold leading-tight mb-6 z-10"
      >

        Hi, I am

        <span className="text-[#1DB954]">

          {" "}Kathir

        </span>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-gray-400 text-xl max-w-3xl leading-relaxed z-10"
      >

        Full Stack Developer and Computer Science Engineering Student passionate about building scalable web applications using React, Spring Boot, and MySQL.

      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex gap-6 mt-12 z-10"
      >

        <a href="#projects"
  className="bg-[#1DB954] hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg shadow-green-500/30"
>

  View Projects

</a>

    <a
  href="#contact"
  className="border border-[#1DB954] hover:bg-[#1DB954] hover:text-black px-8 py-4 rounded-full transition duration-300"
>

  Contact Me

</a>

      </motion.div>

    </section>

  );
}

export default Hero;