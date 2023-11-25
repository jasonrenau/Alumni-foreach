import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavbarModal = ({ notifications }) => {
  const modalVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
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
        {notifications?.msg && (
          <Link
            to="/Dashboard/profil"
            className="block pb-2 text-gray-950 hover:underline"
          >
            {notifications.msg}
          </Link>
        )}
        {notifications?.inactiveCompagnies > 0 && (
          <Link
            to="/Dashboard/profil"
            className="block pb-2 text-gray-950 hover:underline"
          >
            Entreprise en attente : {notifications.inactiveCompagnies}
          </Link>
        )}
        {notifications?.inactiveEvents > 0 && (
          <Link
            to="/Dashboard/profil"
            className="block pb-2 text-gray-950 hover:underline"
          >
            Événement en attente : {notifications.inactiveEvents}
          </Link>
        )}
        {notifications?.inactiveJobs > 0 && (
          <Link
            to="/Dashboard/profil"
            className="block pb-2 text-gray-950 hover:underline"
          >
            Offre d&apos;emploi en attente : {notifications.inactiveJobs}
          </Link>
        )}
        {notifications?.inactiveUsers > 0 && (
          <Link
            to="/Dashboard/profil"
            className="block pb-2 text-gray-950 hover:underline"
          >
            Utilisateur en attente : {notifications.inactiveUsers}
          </Link>
        )}

        {!notifications && <p>aucun message</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default NavbarModal;
