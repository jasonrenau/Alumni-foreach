import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const NavbarModal = ({ user }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const disconnect = () => {
    toast.success("Vous êtes déconnecté");
    localStorage.removeItem("token");
    setInterval(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="absolute right-2 top-10 truncate rounded border bg-white p-4 shadow-lg"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
      >
        {user?.name ? (
          <>
            <p className="text-md mb-2 border-b-[1px] text-center  tracking-wider first-letter:uppercase ">
              {user.name}
            </p>
            <Link
              to="/dashboard/profil"
              className="mb-2 block text-center text-blue-600 hover:underline"
            >
              Mon profil
            </Link>
            <Link
              onClick={disconnect}
              className="block text-center text-red-600 hover:underline"
            >
              Déconnexion
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/connexion"
              className="mb-2 block text-pblue-700 hover:underline"
            >
              Connexion
            </Link>
            <Link
              to="/enregistrement"
              className="block text-blue-600 hover:underline"
            >
              Inscription
            </Link>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default NavbarModal;
