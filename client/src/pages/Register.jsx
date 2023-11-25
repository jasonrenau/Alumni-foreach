import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const {
      data: { trainings },
    } = await customFetch.get("/trainings");
    const {
      data: { compagnies },
    } = await customFetch.get("/compagnies");
    return { trainings, compagnies };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (data?.password !== data?.comfirmpassword) {
    toast.error("Les mots de passe ne correspondent pas.");
    return null;
  }
  try {
    delete data?.comfirmpassword;

    await customFetch.post("/authUser/registerUser", data);
    toast.success(
      "Votre inscription est effectuée, en attente de validation de compte.",
    );
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const inputStyle =
  "block my-2 w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6";

const Register = () => {
  const { compagnies, trainings } = useLoaderData();
  const [selectedRole, setSelectedRole] = useState("user");

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5 bg-pblue-200 py-2 ">
      <svg
        className="z-1 hoverflow-hidden absolute right-0 top-0 h-auto w-1/4"
        viewBox="0 0 380 473"
        fill=""
      >
        <path
          d="M669 21.5C669 157.638 666.834 394.5 507.5 394.5C153 628 0 275.638 0 139.5C0 3.36182 221.166 -225 380.5 -225C539.834 -225 669 -114.638 669 21.5Z"
          fill="#eaebec"
        />
      </svg>
      <div className="z-10 text-center">
        <div className="mx-auto w-40">
          <img
            className="h-full w-full"
            src="/logoalumni.png"
            alt="logo-foreach"
          />
        </div>
        <h1>
          Foreach <span className=" text-4xl text-porange-500">Academy</span>
        </h1>
        <span className="text-sm">Enregistrez votre compte</span>
      </div>
      <Form
        method="POST"
        className="z-10 flex w-[95%] max-w-md flex-col gap-5 rounded-md border-gray-400 bg-white p-5 shadow-lg"
      >
        <div className="grid gap-5 truncate md:grid md:grid-cols-2 md:gap-5">
          <div>
            <label
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              className={inputStyle}
              placeholder="John"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div>
            <label
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={inputStyle}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div>
            <label
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className={inputStyle}
              placeholder="Mot de passe"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div>
            <label
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
              htmlFor="comfirmPassword"
            >
              Retapez le mot de passe
            </label>
            <input
              className={inputStyle}
              placeholder="Confirmer votre mot de passe"
              type="password"
              name="comfirmpassword"
              id="comfirmpassword"
              required
            />
          </div>
        </div>
        <div>
          {/* check si c'est une entreprise ou un particulier */}
          <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
            Vous êtes ?
          </label>
          <select
            onChange={(e) => setSelectedRole(e.target.value)}
            required
            className={`${inputStyle} text-center`}
          >
            <option value="user">Utilisateur</option>
            <option value="compagny">Entreprise</option>
          </select>
        </div>

        {selectedRole === "compagny" && (
          <>
            <div>
              <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
                Votre entreprise
              </label>
              <select
                name="compagny_id"
                required
                className={`${inputStyle} text-center`}
              >
                {compagnies.map((compagny) => (
                  <option
                    key={compagny.compagny_id}
                    value={compagny.compagny_id}
                  >
                    {compagny.compagny_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
                Description
              </label>
              <textarea
                name="description"
                required
                className={`${inputStyle} text-center`}
              />
            </div>
          </>
        )}

        {/* si c'est un particulier je liste les formations pour pouvoir la lié a mon compte par training_id */}
        {selectedRole === "user" && (
          <div>
            <label className="after:ml-0.5 after:text-red-500 after:content-['*']">
              Votre formation
            </label>
            <select
              name="training_id"
              required
              className={`${inputStyle} text-center`}
            >
              {trainings.map((training) => (
                <option key={training.training_id} value={training.training_id}>
                  {training.training_name}
                </option>
              ))}
            </select>
          </div>
        )}

        <span className="text-sm before:mr-0.5 before:text-red-500 before:content-['*'] ">
          champs requis
        </span>
        <div className="mt-1 flex items-center justify-center">
          <button
            type="submit"
            className="w-full rounded-sm bg-pblue-200 px-3 py-1.5 text-sm  shadow-sm hover:bg-pblue-400"
          >
            S'inscrire
          </button>
        </div>
        <p className="my-2 text-center  text-sm ">
          Déjà inscrit ?{" "}
          <Link
            className="font-medium text-pmarine-950 hover:text-pblue-400"
            to="/connexion"
          >
            Connectez-vous
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
