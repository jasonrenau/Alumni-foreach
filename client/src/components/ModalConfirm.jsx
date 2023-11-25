import { motion } from "framer-motion";

const ModalConfirm = ({ handleConfirmDelete, handleCancelDelete, user_id }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 mx-auto flex max-w-[90%] overflow-auto "
      initial={{ translateY: -1000 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: -1000 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative m-auto flex w-full max-w-md flex-col rounded-lg border-[1px] border-slate-300 bg-slate-50 p-8 shadow-lg">
        <h5>Confirmation de suppression</h5>
        <p>Êtes-vous sûr de vouloir supprimer ?</p>
        <div className="mt-2 flex flex-row justify-center gap-2">
          <button className="btn-red" onClick={handleCancelDelete}>
            Annuler
          </button>
          <button
            className="btn-green"
            onClick={() => handleConfirmDelete(user_id)}
          >
            Confirmer
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalConfirm;
