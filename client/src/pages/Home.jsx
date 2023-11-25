import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { Link, useLoaderData } from "react-router-dom";
// présentation
import { batiment } from "../assets/index";
// présentation
// Annuaire des alumni
import AlumniSlider from "../components/home/AlumniSlider";
// Annuaire des alumni
// trainings
import TrainingsTimeline from "../components/home/TrainingsTimeline";
// trainings
// événements
import EventCard from "../components/events/EventCard";
// événements

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const token = localStorage.getItem("token");
  try {
    const {
      data: { users },
    } = await customFetch.get("/users");
    const {
      data: { events },
    } = await customFetch.get("/events");

    return { token, users, events };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }

  return { users: null, events: null, token: null };
};

const Home = () => {
  const { token, users, events } = useLoaderData();

  return (
    <section className="min-h-screen overflow-hidden bg-gray-100">
      {/* présentation */}
      <article className="mx-auto w-[90%] max-w-6xl py-10 ">
        <h2 className="py-10 text-center">
          For<span className="text-3xl text-porange-500">Each</span> Academy
        </h2>
        <div className="flex flex-col gap-4 lg:flex-row">
          <img
            className="rounded-lg object-cover lg:order-2 lg:w-2/3 "
            src={batiment}
            alt="batiment-foreach"
          />
          <div className=" lg:flex lg:flex-col lg:justify-around">
            <p>
              Notre campus est l'endroit où tout le monde est le bienvenu, peu
              importe d'où vous venez. Ici, nous croyons que chaque personne a
              la chance de réaliser son rêve de devenir un développeur web
              épanoui. Venez comme vous êtes et rejoignez notre communauté
              chaleureuse et inclusive !
            </p>
            <Link to={"/a-propos"}>
              <button className="btn-blue mt-4 w-full">Nous découvrir</button>
            </Link>
          </div>
        </div>
      </article>
      {/* annuaire */}
      <article className="mx-auto w-[90%] max-w-6xl py-10 text-center">
        <h2 className="py-10">
          L'annuaire des
          <span className="text-3xl text-porange-500"> Alumni</span>
        </h2>
        {users ? (
          <AlumniSlider users={users} token={token} />
        ) : (
          <p>Pas d'alumni disponible</p>
        )}
        {token ? (
          <Link to={"/annuaire"} className="">
            <button className="btn-blue mt-4 ">Voir l'annuaire</button>
          </Link>
        ) : (
          <Link to={"/connexion"} className="">
            <button className="btn-blue mt-4 ">Voir l'annuaire</button>
          </Link>
        )}
      </article>
      {/* Les formations */}
      <article className="mx-auto w-[90%] max-w-6xl py-10 text-center">
        <h2 className="py-10">
          Les <span className="text-3xl text-porange-500">formations</span>
        </h2>
        <TrainingsTimeline />
        <Link to={"/formations"}>
          <button className="btn-blue mt-4 ">Voir les formations</button>
        </Link>
      </article>
      {/* Les événements */}
      <article className="mx-auto w-[90%] max-w-6xl py-10 text-center">
        <h2 className="py-10">
          Les <span className="text-3xl text-porange-500">événements</span>
        </h2>
        {events ? (
          <div className="my-10 flex flex-col gap-32">
            {events.map((event, index) => (
              <EventCard key={event.event_id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <p>Pas d'événement disponible</p>
        )}
        {token ? (
          <Link to={"/evenements"} className="">
            <button className="btn-blue mt-4 ">Voir tout les événements</button>
          </Link>
        ) : (
          <Link to={"/connexion"} className="">
            <button className="btn-blue mt-4 ">Voir tout les événements</button>
          </Link>
        )}
      </article>
    </section>
  );
};

export default Home;
