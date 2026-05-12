import { FaEnvelope, FaUser } from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="bg-black px-10 py-24"
    >

      <h1 className="text-5xl font-bold text-center mb-16">

        Contact

      </h1>

      <div className="max-w-3xl mx-auto bg-[#121212] border border-gray-800 rounded-3xl p-10 hover:border-[#1DB954] transition duration-300">

        <div className="flex items-center gap-5 mb-8">

          <div className="bg-[#1DB954] p-4 rounded-full text-black">

            <FaUser size={24} />

          </div>

          <div>

            <p className="text-gray-400 text-sm">

              Name

            </p>

            <h2 className="text-2xl font-semibold">

              Kathirvelan K

            </h2>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="bg-[#1DB954] p-4 rounded-full text-black">

            <FaEnvelope size={24} />

          </div>

          <div>

            <p className="text-gray-400 text-sm">

              Email

            </p>

            <h2 className="text-2xl font-semibold">

              Kathirvelan210@gmail.com

            </h2>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;