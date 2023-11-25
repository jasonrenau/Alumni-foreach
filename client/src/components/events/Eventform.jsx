import { idee } from "../../assets/index";
import { motion } from "framer-motion";

const Eventform = ({ modalIsOpen, setModalIsOpen }) => {
  const animation = {
    hidden: { opacity: 0, y: 500, scale: 0.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 50,
      },
    },
  };

  if (!modalIsOpen) {
    return (
      <div
        onClick={() => setModalIsOpen(true)}
        className="fixed bottom-[25%] right-0 z-10 mr-2 w-10 animate-scale-slow cursor-pointer md:bottom-[17%]"
      >
        <img src={idee} alt="icon-idée" />
      </div>
    );
  } else {
    return (
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={animation}
        className="fixed z-10 flex w-full items-center justify-center bg-gray-50 max-md:top-0 max-md:h-screen md:inset-y-2/4"
      >
        <div className=" bg-gray-50 p-4 text-center">
          <h3 className="mb-4 text-2xl font-bold">Formulaire de contact</h3>
          <form className="">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left text-sm font-semibold text-gray-300"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 p-2"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left text-sm font-semibold text-gray-300"
              >
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 p-2"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="eventTitle"
                className="block text-left text-sm font-semibold text-gray-300"
              >
                Titre de l'événement
              </label>
              <input
                type="text"
                id="eventTitle"
                name="eventTitle"
                className="w-full rounded border border-gray-300 p-2"
                placeholder="Titre de l'événement"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left text-sm font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full rounded border border-gray-300 p-2"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type=""
              onClick={() => setModalIsOpen(false)}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none"
            >
              Envoyer
            </button>
          </form>
        </div>
      </motion.div>
    );
  }
};
export default Eventform;
