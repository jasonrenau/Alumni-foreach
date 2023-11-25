import { motion } from "framer-motion";

const DeleteModal = ({ modalId, setModalId, handleDelete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 mx-auto flex max-w-[90%] overflow-auto "
      initial={{ translateY: -1000 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: -1000 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative m-auto flex w-full max-w-md flex-col rounded-lg border-[1px] border-slate-300 bg-slate-50 p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Confirmation de suppression</h3>
        </div>
        <div className="mt-4">
          <p>
            Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action
            est irréversible.
          </p>
        </div>
        <div className="mt-2 flex flex-row justify-center gap-2">
          <button
            onClick={() => setModalId(false)}
            className="btn-red"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Annuler
          </button>
          <button
            onClick={() => handleDelete(modalId)}
            className="btn-green"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeleteModal;
