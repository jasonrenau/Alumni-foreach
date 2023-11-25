import {
  Form,
  redirect,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { Folder, PartyPopper, XCircle } from "lucide-react";
import JoditEditor from "jodit-react";
import ReactDatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const { id } = params;
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

      const {
        data: { event },
      } = await customFetch.get(`/events/event/${id}`);
      return { event };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/");
    }
  }
  toast.error("Vous devez être connecté pour accéder à cette page");
  return redirect("/");
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request, params }) => {
  const { id } = params;
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "deleteFile") {
    //supression de l'image sur cloudinary et de la relation avec l'event
    try {
      await customFetch.put(`/events/edit/${id}`, formData);
      toast.success("Image supprimé avec succès");
      return redirect(`/dashboard/evenements/edition/${id}`);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }

  try {
    await customFetch.put(`/events/edit/${id}`, formData);
    toast.success("Evénement modifié avec succès");
    return redirect("/dashboard/evenements");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const DashboardEditEvent = () => {
  const { event } = useLoaderData();
  const submit = useSubmit();
  const [imagePreview, setImagePreview] = useState(event?.url);
  const [startDate, setStartDate] = useState(new Date(event?.event_date));

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
    // recuperer le publie id de l'image
    const publicId = event.public_id;
    const intent = "deleteFile";
    const formData = new FormData();
    formData.append("intent", intent);
    formData.append("public_id", publicId);
    submit(formData, { method: "post" });
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
              defaultValue={event?.name}
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
            <ReactDatePicker
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
            <JoditEditor
              name="description"
              required
              value={event?.description}
              config={config}
            />
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
            {isSubmitting ? "Envoi en cours..." : "Modifier l'événement"}
            <PartyPopper className="ml-2" size={20} />
          </button>
        </Form>
      </article>
    </section>
  );
};
export default DashboardEditEvent;
