import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await customFetch.post("/authUser/loginUser", data);
    localStorage.setItem("token", resp.data.token);
    toast.success("Connexion reussie");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const inputStyle =
    "block my-2 w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6";

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5 bg-pblue-200 py-2 ">
      <svg
        className="absolute right-0 top-0 z-0 h-auto w-2/4 md:w-60"
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
        <span className=" text-sm">Connexion à votre compte</span>
      </div>
      <Form
        method="POST"
        className="z-10 flex w-[95%] max-w-md flex-col gap-5 rounded-md border-gray-400 bg-white p-5 shadow-lg"
      >
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
        <span className="text-sm before:mr-0.5 before:text-red-500 before:content-['*'] ">
          champs requis
        </span>

        <div className="mt-1 flex items-center justify-center">
          <button
            type="submit"
            className="w-full rounded-sm bg-pblue-200 px-3 py-1.5 text-sm  shadow-sm hover:bg-pblue-400"
          >
            Se connecter
          </button>
        </div>
        <p className=" text-center  text-sm">
          Pas inscrit ?{" "}
          <Link
            className="font-medium text-pmarine-950 hover:text-pblue-400"
            to="/enregistrement"
          >
            Enregistrez-vous
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
