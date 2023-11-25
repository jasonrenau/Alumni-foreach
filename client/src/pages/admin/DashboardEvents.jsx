import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { PartyPopper } from "lucide-react";
import {
  Link,
  redirect,
  useLoaderData,
  useLocation,
  useSubmit,
} from "react-router-dom";
import InactiveEventsTable from "../../components/dashboard/events/InactiveEventsTable";
import AllEventsTable from "../../components/dashboard/events/AllEventsTable";
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
      const { data: dataInactiveEvents } =
        await customFetch.get("/events/activation");

      const { data: dataEvents } = await customFetch.get("/events");

      return { dataInactiveEvents, dataEvents };
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
      await customFetch.put("/events/activation", data);
      toast.success("Evénement accepté");
      return redirect("/dashboard/evenements");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
  if (intent === "delete") {
    try {
      delete data.intent;
      await customFetch.delete(`/events/edit/${data.id}`);
      toast.success("Evénement supprimé");
      return redirect("/dashboard/evenements");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
};

const DashboardEvents = () => {
  const { dataInactiveEvents, dataEvents } = useLoaderData();
  const [searchForm, setSearchForm] = useState("");
  const { search } = useLocation();
  const submit = useSubmit();

  // modal confirmation suppression qui prends id en params
  const [modalId, setModalId] = useState(null);

  // events inactifs
  const [inactiveEvents, setInactiveEvents] = useState(
    dataInactiveEvents.events,
  );
  const [currentInactivePage, setCurrentInactivePage] = useState(
    dataInactiveEvents.page,
  );
  const [numberOfInactivePages, setNumberOfInactivePages] = useState(
    dataInactiveEvents.numberOfPages,
  );

  // Pour tout les events actifs
  const [allEvents, setAllEvents] = useState(dataEvents.events);
  const [currentEventsPage, setCurrentEventsPage] = useState(dataEvents.page);
  const [numberOfEventsPages, setNumberOfEventsPages] = useState(
    dataEvents.numberOfPages,
  );

  const handleAccept = (id) => {
    const intent = "accept";
    const formData = new FormData();
    formData.append("intent", intent);
    formData.append("id", id);
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
    setCurrentEventsPage(1);
    const params = new URLSearchParams(search);
    params.set("title", searchForm);

    const {
      data: { events, title },
    } = await customFetch.get("/events", { params });
    if (dataEvents.events.length === 0) {
      setAllEvents([]);
    }
    setAllEvents(events);
    setSearchForm(title);
  }, 300);

  return (
    <section className="min-h-screen w-full bg-gray-100 ">
      <div className="mx-auto w-[90%] max-w-6xl border-b-[1px] border-gray-300 py-10 text-center">
        <h5 className="py-2">Vous souhaitez poster un nouvel événement ?</h5>
        <Link to={"creation"} className="btn-basic mx-auto flex w-fit">
          Créer un événement !
          <PartyPopper className="ml-2" size={20} />
        </Link>
      </div>
      <article className="mx-auto w-[90%] max-w-6xl border-b-[1px] border-gray-300 pb-10 pt-20 md:pt-10 ">
        <div className="flex items-center justify-center">
          <h5 className="mr-2 py-2">Demande d&apos;ajout :</h5>
          <p>{dataInactiveEvents.count.inactive_count} demandes</p>
        </div>
        {inactiveEvents.length > 0 ? (
          <>
            <InactiveEventsTable
              allEvents={inactiveEvents}
              handleAccept={handleAccept}
              setShowModal={setModalId}
            />
            <Pagination
              setCurrentData={setInactiveEvents}
              currentPage={currentInactivePage}
              setCurrentPage={setCurrentInactivePage}
              numberOfPages={numberOfInactivePages}
              setNumberOfPages={setNumberOfInactivePages}
              fetchUrl={"/events/activation"}
              dataName={"events"}
            />
          </>
        ) : (
          <p className="text-center">Aucune demande pour le moment</p>
        )}
      </article>

      <article className="mx-auto w-[90%] max-w-6xl py-10 ">
        <h5 className="py-2 text-center">Rechercher un événement :</h5>
        <div className="flex justify-center">
          <SearchForm
            searchForm={searchForm}
            setSearchForm={setSearchForm}
            handleChange={handleChange}
            name={"event_name"}
          />
        </div>
        {allEvents && allEvents.length === 0 ? (
          <p className="text-center">Aucun événement</p>
        ) : (
          <>
            <AllEventsTable allEvents={allEvents} setModalId={setModalId} />
            <Pagination
              setCurrentData={setAllEvents}
              currentPage={currentEventsPage}
              setCurrentPage={setCurrentEventsPage}
              numberOfPages={numberOfEventsPages}
              setNumberOfPages={setNumberOfEventsPages}
              fetchUrl={"/events"}
              dataName={"events"}
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
export default DashboardEvents;
