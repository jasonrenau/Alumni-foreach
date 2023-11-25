import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import { Folder, PartyPopper, XCircle } from "lucide-react";
import JoditEditor from "jodit-react";
import { useState } from "react";
import customFetch from "../../utils/customFetch";
import { Form, redirect, useNavigate } from "react-router-dom";

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

      return { user };
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

  try {
    await customFetch.post(`/events/post`, formData);
    toast.success("Evénement créer avec succès");
    return redirect("/dashboard/evenements");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const DashboardCreateEvent = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";

  const handleFileChange = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileDelete = () => {
    setImagePreview("");
  };

  const config = {
    readonly: false,
    placeholder: "Commencez à écrire ici...",

    height: 400,
  };

  return (
    <section className="min-h-screen w-full bg-gray-100 ">
      <article className="mx-auto w-[90%] max-w-6xl pb-10 pt-20 md:pt-10 ">
        <Form
          method="post"
          className="mx-auto max-w-4xl"
          encType="multipart/form-data"
        >
          <div className="mx-auto flex flex-col">
            <label
              htmlFor="name"
              className="text-left after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              Nom de l&apos;événement
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom de l'événement"
              required
              className="input"
            />
          </div>
          <div className="z-10 mx-auto flex flex-col ">
            <label
              htmlFor="event_date"
              className="text-left after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              Date prévue
            </label>
            <DatePicker
              name="event_date"
              id="event_date"
              locale={fr}
              dateFormat={"dd/MM/yyyy "}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input"
            />
          </div>
          <div className="z-0 mx-auto flex flex-col">
            <label
              htmlFor="description"
              className="text-left after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              Description de l&apos;événement
            </label>
            <label htmlFor="description"></label>
            <JoditEditor name="description" required config={config} />
          </div>

          <div className="py-6 ">
            {imagePreview && (
              <div className="py-10">
                <div className="relative mx-auto w-fit">
                  <img
                    src={imagePreview}
                    alt="image à envoyer"
                    className="h-60 w-60"
                  />
                  <div className="absolute right-0 top-0 animate-scale-slow cursor-pointer text-red-600">
                    <XCircle
                      style={{ marginRight: "-15px", marginTop: "-15px" }}
                      size={30}
                      onClick={handleFileDelete}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={`${imagePreview ? "hidden " : ""}`}>
              <label
                htmlFor="image"
                className="flex items-center justify-center gap-2"
              >
                <Folder size={64} strokeWidth={1} className="cursor-pointer" />
                <span>Choisir une image</span>
              </label>
              <input
                onChange={handleFileChange}
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                name="image"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn-basic mx-auto flex w-full justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Créer l'événement"}
            <PartyPopper className="ml-2" size={20} />
          </button>
        </Form>
      </article>
    </section>
  );
};
export default DashboardCreateEvent;
