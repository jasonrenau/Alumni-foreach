import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import {
  redirect,
  useLoaderData,
  useLocation,
  useSubmit,
} from "react-router-dom";
import InactiveUsersTable from "../../components/dashboard/users/InactiveUsersTable";
import AllUsersTable from "../../components/dashboard/users/AllUsersTable";
import Pagination from "../../components/Pagination";
import SearchForm from "../../components/SearchForm";
import DeleteModal from "../../components/dashboard/DeleteModal";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { user },
      } = await customFetch.get("/users/currentUser");
      if (user?.role !== "admin" && user?.role !== "moderator") {
        toast.error("Vous n'avez pas les droits pour accéder à cette page");
        return redirect("/");
      }
      const { data: dataInactiveUsers } =
        await customFetch.get("/users/activation");
      const { data: dataUsers } = await customFetch.get("/users/");

      return { dataInactiveUsers, dataUsers };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/");
    }
  }
  toast.error("Vous devez être connecté pour accéder à cette page");
  return redirect("/");
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const intent = formData.get("intent");

  if (intent === "accept") {
    try {
      delete data.intent;
      await customFetch.put("/users/activation", data);
      toast.success("Utilisateur accepté");
      return redirect("/dashboard/utilisateurs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
  if (intent === "delete") {
    try {
      delete data.intent;
      await customFetch.delete(`/users/edit/${data.id}`);
      toast.success("Utilisateur supprimé");
      return redirect("/dashboard/utilisateurs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
};

const DashboardUsers = () => {
  const { dataInactiveUsers, dataUsers } = useLoaderData();
  const [searchForm, setSearchForm] = useState("");
  const { search } = useLocation();
  const submit = useSubmit();

  // modal confirmation suppression qui prends id en params
  const [modalId, setModalId] = useState(null);

  // pour les utilisateurs a valider
  const [invactiveUsers, setInactiveUsers] = useState(dataInactiveUsers.users);
  const [currentInvactivePage, setCurrentInactivePage] = useState(
    dataInactiveUsers.page,
  );
  const [numberOfInactivePages, setNumberOfInactivePages] = useState(
    dataInactiveUsers.numberOfPages,
  );

  // Pour tout les utilisateurs
  const [allUsers, setAllUsers] = useState(dataUsers.users);
  const [currentUsersPage, setCurrentUsersPage] = useState(dataUsers.page);
  const [numberOfUsersPages, setNumberOfUsersPages] = useState(
    dataUsers.numberOfPages,
  );

  const handleAccept = (user) => {
    const intent = "accept";
    const formData = new FormData();
    formData.append("intent", intent);
    formData.append("id", user?.id);
    formData.append("role", user?.role);
    submit(formData, { method: "post" });
  };

  const handleDelete = (id) => {
    const intent = "delete";
    const formData = new FormData();
    formData.append("intent", intent);
    formData.append("id", id);
    submit(formData, { method: "post" });
    setModalId(null);
  };

  const handleChange = useDebouncedCallback(async (e) => {
    e.preventDefault();
    setCurrentUsersPage(1);
    const params = new URLSearchParams(search);
    params.set("title", searchForm);
    const {
      data: { users, title },
    } = await customFetch.get("/users", { params });
    if (dataUsers.users.length === 0) {
      setAllUsers([]);
    }
    setAllUsers(users);
    setSearchForm(title);
  }, 300);

  return (
    <section className="min-h-screen w-full bg-gray-100 ">
      <article className="mx-auto w-[90%] max-w-6xl pb-10 pt-20 md:pt-10 ">
        <div className="flex items-center justify-center">
          <h5 className="mr-2 py-2">Demande d&apos;ajout :</h5>
          <p>{dataInactiveUsers.count.inactive_count} demandes</p>
        </div>
        {invactiveUsers.length > 0 ? (
          <>
            <InactiveUsersTable
              allUsers={invactiveUsers}
              handleAccept={handleAccept}
              setShowModal={setModalId}
            />
            <Pagination
              setCurrentData={setInactiveUsers}
              currentPage={currentInvactivePage}
              setCurrentPage={setCurrentInactivePage}
              numberOfPages={numberOfInactivePages}
              setNumberOfPages={setNumberOfInactivePages}
              fetchUrl={"/users/activation"}
              dataName={"users"}
            />
          </>
        ) : (
          <p className="text-center">Pas de demande d&apos;ajout</p>
        )}
      </article>
      <article className="mx-auto w-[90%] max-w-6xl py-10 ">
        <h5 className="py-2 text-center">Rechercher un utilisateur :</h5>
        <div className="flex justify-center">
          <SearchForm
            setSearchForm={setSearchForm}
            handleChange={handleChange}
            searchForm={searchForm}
            name={"user_name"}
          />
        </div>
        {allUsers && allUsers.length === 0 ? (
          <p>Pas d&apos;utilisateur</p>
        ) : (
          <>
            <AllUsersTable users={allUsers} setModalId={setModalId} />
            <Pagination
              setCurrentData={setAllUsers}
              currentPage={currentUsersPage}
              setCurrentPage={setCurrentUsersPage}
              numberOfPages={numberOfUsersPages}
              setNumberOfPages={setNumberOfUsersPages}
              fetchUrl={"/users"}
              dataName={"users"}
            />
          </>
        )}
      </article>
      {modalId && (
        <DeleteModal
          modalId={modalId}
          setModalId={setModalId}
          handleDelete={handleDelete}
        />
      )}
    </section>
  );
};
export default DashboardUsers;
