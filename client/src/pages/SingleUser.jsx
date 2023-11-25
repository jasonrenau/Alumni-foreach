import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { Link, redirect, useLoaderData } from "react-router-dom";
import UserProfil from "../components/directory/UserProfil";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const id = params.id;

  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { user },
      } = await customFetch.get(`/users/user/${id}`);
      return { user };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/annuaire");
    }
  }
  if (!token) {
    toast.error("Vous devez être connecté pour accéder à cette page");
    return redirect("/");
  }
  return { user: null };
};

const SingleUser = () => {
  const { user } = useLoaderData();
  return (
    <section className="min-h-screen overflow-hidden bg-gray-100">
      <article className=" mx-auto w-[90%] max-w-6xl  pb-5 ">
        <UserProfil user={user} />
        <Link to={"/annuaire"}>
          <button className="btn-blue">Retour à l'annuaire</button>
        </Link>
      </article>
    </section>
  );
};
export default SingleUser;
