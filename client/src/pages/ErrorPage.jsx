import { Link, useRouteError } from "react-router-dom";
import ErrorSvg from "../assets/svg/error.svg";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-200 p-2">
      <img src={ErrorSvg} alt="image-erreur" />

      <motion.div
        className="text-center"
        initial={{ y: -1000 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        <h1 className="mb-2 font-semibold italic text-slate-950">
          Erreur
          <span className="relative mx-3 inline-block px-4 py-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-porange-300">
            <span className="relative text-lg text-porange-950">
              {error?.status}
            </span>
          </span>
        </h1>
        <h2>
          {error?.status === 404 && (
            <p className="text-lg font-semibold text-slate-950">
              Page introuvable
            </p>
          )}
          {error?.status === 500 && (
            <p className="text-lg font-semibold text-slate-950">
              Erreur interne
            </p>
          )}
          {error?.status === 401 && (
            <p className="text-lg font-semibold text-slate-950">
              Accès non autorisé
            </p>
          )}
          {error?.status === 403 && (
            <p className="text-lg font-semibold text-slate-950">
              Erreur interdite
            </p>
          )}
          {error?.status === 400 && (
            <p className="text-lg font-semibold text-slate-950">
              Erreur de requête
            </p>
          )}
          {!error?.status && (
            <p className="text-lg font-semibold text-slate-950">
              Une erreur est survenue
            </p>
          )}
        </h2>
        <Link to={"/"}>
          <button className="mt-8 rounded bg-porange-300 px-4 py-2  font-bold text-porange-950 hover:bg-porange-600">
            Retour à l'accueil
          </button>
        </Link>
      </motion.div>
    </main>
  );
};
export default ErrorPage;
