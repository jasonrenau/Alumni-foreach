import {
  redirect,
  useOutletContext,
  Form,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import EditInfos from "../components/dashboard/profil/EditInfos";
import EditStacks from "../components/dashboard/profil/EditStacks";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { usericon } from "../assets/index";
import { Check, FileEdit } from "lucide-react";
import { useState } from "react";
import ModalConfirm from "../components/ModalConfirm";

//récuperer toutes les stacks disponible sur le back-end
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const {
      data: { stacks },
    } = await customFetch.get("/stacks");
    return { stacks };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return { stacks: null };
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const intent = formData.get("intent");

  if (intent === "stacks") {
    try {
      delete data.intent;
      await customFetch.put("stacks/user", data);
      toast.success("Mise a jour reussie");
      return redirect("/dashboard/profil");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }

  if (intent === "mentor") {
    try {
      await customFetch.put("/users/mentoring");
      toast.success("Demande effectuée");
      return redirect("/dashboard/profil");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }

  if (intent === "delete") {
    try {
      await customFetch.delete(`/users/edit/${data.user_id}`);
      toast.success("Votre compte a bien été supprimé");
      localStorage.removeItem("token");
      return redirect("/");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }

  try {
    delete data.intent;
    await customFetch.put(`/users/edit/${data.user_id}`, data);
    toast.success("Mise a jour reussie");
    return redirect("/dashboard/profil");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const DashboardProfil = () => {
  const { user } = useOutletContext();
  const { stacks } = useLoaderData();
  const submit = useSubmit();
  const [userStacks, setUserStacks] = useState(user.stacks ? user.stacks : []);

  const [editInfos, setEditInfos] = useState(false);
  const [editStacks, setEditStacks] = useState(false);
  const [editDesc, setEditDesc] = useState(false);
  const [editExp, setEditExp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    const intent = "delete";
    const formData = new FormData();
    formData.append("intent", intent);
    formData.append("user_id", id);
    submit(formData, { method: "post" });
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const config = {
    readonly: false,
    height: 300,
  };

  return (
    <section className="relative min-h-screen bg-gray-100  md:mt-0 md:flex-1">
      <article className="mx-auto flex w-[90%] max-w-6xl flex-col gap-10 pb-5 ">
        <h2 className="text-center">Mon profil</h2>

        {/* ----------- user card-------- */}
        <div className="mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-14">
            <div>
              <img
                className="mx-auto rounded-full object-cover shadow-md md:h-52 md:w-52"
                src={user.avatar ? user.avatar : usericon}
                alt="avatar-icon"
              />
            </div>
            <div className="">
              <div className="flex items-end gap-2">
                <p className="text-1xl font-bold uppercase">{user.name}</p>
                <p className=" ">{user.age} ans</p>
              </div>
              <p className=" ">{user.email}</p>
              <p className="font-bold first-letter:uppercase">
                {user.training_name}
              </p>
              <p className="mb-2 first-letter:uppercase ">{user.role}</p>

              <button
                onClick={() => setEditInfos(true)}
                className={editInfos ? "hidden" : "btn-green"}
              >
                Editer mes infos
              </button>
            </div>
          </div>
          {editInfos && <EditInfos user={user} setEditInfos={setEditInfos} />}
        </div>
        {/* ----------- user card-------- */}
        {/* ----------- user stacks-------- */}
        <div className="mx-auto text-center">
          {!editStacks && (
            <>
              <div className="flex flex-wrap gap-1 ">
                {user?.stacks?.map((stack) => (
                  <p
                    className="mr-2  rounded-md bg-blue-200 px-2 py-1 text-sm text-blue-800"
                    key={stack.stack_id}
                  >
                    {stack.stack_name}
                  </p>
                ))}
              </div>
              <button
                onClick={() => setEditStacks(true)}
                className={editStacks ? "hidden" : "btn-green mt-4"}
              >
                Editer mes stacks
              </button>
            </>
          )}

          {editStacks && (
            <EditStacks
              stacks={stacks}
              setEditStacks={setEditStacks}
              userStacks={userStacks}
              setUserStacks={setUserStacks}
            />
          )}
        </div>
        {/* ----------- user stacks-------- */}
        {/* ----------- edit infos------- */}
        <div className="rounded-md bg-gray-50 p-4 shadow-md md:mx-auto md:w-4/5">
          <div className="flex items-start">
            <button onClick={() => setEditDesc(true)} className="flex-shrink-0">
              <FileEdit />
            </button>
            <h4 className="flex-grow pb-5 pt-0 text-center">Ma description</h4>
          </div>
          {!editDesc && (
            <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
          )}
          {editDesc && (
            <Form method="put" onSubmit={() => setEditDesc(false)}>
              <label htmlFor="description"></label>
              <JoditEditor
                name="description"
                required
                config={config}
                value={user.description}
              />
              <button type="submit" className="btn-green mx-auto flex">
                <Check />
                Valider
              </button>
            </Form>
          )}
        </div>

        <div className="rounded-md bg-gray-50 p-4 shadow-md md:mx-auto md:w-4/5">
          <div className="flex items-start">
            <button onClick={() => setEditExp(true)} className="flex-shrink-0">
              <FileEdit />
            </button>
            <h4 className="flex-grow pb-5 pt-0 text-center">Mon expérience</h4>
          </div>

          {!editExp && (
            <p
              dangerouslySetInnerHTML={{ __html: user.professional_experience }}
            ></p>
          )}
          {editExp && (
            <Form method="post" onSubmit={() => setEditExp(false)}>
              <label htmlFor="professional_experience"></label>
              <JoditEditor
                name="professional_experience"
                required
                config={config}
                value={user.professional_experience}
              />
              <button type="submit" className="btn-green mx-auto flex">
                <Check />
                Valider
              </button>
            </Form>
          )}
        </div>

        {user?.role === "alumni" && (
          <div className="mx-auto text-center">
            <p>Devenir mentor ?</p>
            <Form method="post">
              <button
                type="submit"
                name="intent"
                value="mentor"
                className="btn-green my-2"
              >
                Devenir mentor
              </button>
            </Form>
          </div>
        )}
        {/* ----------- edit infos------- */}
        {/* ----------- delete account-------- */}
        <div className="mx-auto text-center">
          <p>Je souhaite supprimer mon compte :</p>

          <button
            onClick={() => handleDeleteAccount(user.user_id)}
            className="btn-red my-2"
          >
            Supprimer mon compte
          </button>
          {isModalOpen && (
            <>
              <ModalConfirm
                user_id={user.user_id}
                handleConfirmDelete={handleConfirmDelete}
                handleCancelDelete={handleCancelDelete}
              />
            </>
          )}
        </div>
        {/* ----------- delete account-------- */}
      </article>
    </section>
  );
};
export default DashboardProfil;
