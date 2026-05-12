function Navbar() {

  return (

    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 px-10 py-5 flex justify-between items-center sticky top-0 z-50">

      <h1 className="text-3xl font-bold text-[#1DB954]">

        Kathir.dev

      </h1>

      <ul className="flex gap-8 text-lg font-medium">

        <li>

          <a
            href="#home"
            className="hover:text-[#1DB954] transition duration-300"
          >
            Home
          </a>

        </li>

        <li>

          <a
            href="#skills"
            className="hover:text-[#1DB954] transition duration-300"
          >
            Skills
          </a>

        </li>

        <li>

          <a
            href="#projects"
            className="hover:text-[#1DB954] transition duration-300"
          >
            Projects
          </a>

        </li>

        <li>

          <a
            href="#about"
            className="hover:text-[#1DB954] transition duration-300"
          >
            About
          </a>

        </li>

        <li>

          <a
            href="#contact"
            className="hover:text-[#1DB954] transition duration-300"
          >
            Contact
          </a>

        </li>

      </ul>

    </nav>

  );
}

export default Navbar;