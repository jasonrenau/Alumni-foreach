import customFetch from "../utils/customFetch";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import EventCard from "../components/events/EventCard";
import ButtonTop from "../components/navigation/ButtonTop";
import Eventform from "../components/events/Eventform";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { events: data, page },
      } = await customFetch.get("/events", { params });

      return { data, page, params };
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
  }
  if (!token) {
    toast.error("Vous devez être connecté pour accéder à cette page");
    return redirect("/");
  }
  return { data: null, params: null };
};

const Events = () => {
  const { data, page } = useLoaderData();
  const [events, setEvents] = useState(data);
  const [currentPage, setCurrentPage] = useState(page);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { marginBottom: 1000 });

  const fetchMoreData = async () => {
    const nextPage = currentPage + 1;
    const params = { page: nextPage };
    const {
      data: { events: newEvents },
    } = await customFetch.get("/events", {
      params,
    });
    setCurrentPage(nextPage);
    setEvents([...events, ...newEvents]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isInView) {
      fetchMoreData();
    }
  }, [isInView]);

  const textAnimation = {
    hidden: { opacity: 0, y: 1000, scale: 0.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 25,
      },
    },
  };

  return (
    <>
      <section className="min-h-screen overflow-hidden bg-gray-100">
        <article className="mx-auto w-[90%] max-w-6xl  pb-5 ">
          <h2 className="my-20 text-center">
            Les{" "}
            <span className="font-poppins text-3xl text-porange-700">
              Evénéments
            </span>
          </h2>
          <motion.p
            initial="hidden"
            animate={"visible"}
            variants={textAnimation}
            className="mb-28"
          >
            Bienvenue sur notre page des événements à venir à la Foreach Academy
            ! Ici, vous trouverez tous les détails sur nos prochains événements
            passionnants. Consultez régulièrement cette page pour rester informé
            des dernières mises à jour et assurez-vous de ne pas manquer nos
            opportunités d'apprentissage et de réseautage à venir.
            Rejoignez-nous pour rester connecté avec notre communauté
            technophile et enrichir vos connaissances !
          </motion.p>

          {events ? (
            <div className="mb-10 flex flex-col gap-40">
              {events.map((event, index) => (
                <EventCard key={event.event_id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <p>Pas d'événement disponible</p>
          )}
        </article>
        <span ref={ref} className="invisible"></span>

        <ButtonTop scrollToTop={scrollToTop} />
        <Eventform modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </section>
    </>
  );
};
export default Events;
