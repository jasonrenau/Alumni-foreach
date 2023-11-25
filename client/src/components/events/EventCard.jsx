import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EventCard = ({ event, index }) => {
  const windowWidth = window.innerWidth;
  const margin = windowWidth >= 768 ? "-200px" : "-100px";
  const ref = useRef();
  const isInView = useInView(ref, { margin: margin });
  const date = new Date(event.event_date).toLocaleDateString();
  const direction = index % 2 === 0 ? 1 : -1;

  const cardAnimation = {
    hidden: { opacity: 0, x: direction * 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imgAnimation = {
    hidden: { opacity: 0, x: -direction * 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  if (direction === -1) {
    return (
      <div className="relative grid rounded-lg md:h-[400px] md:grid-cols-2  md:bg-transparent ">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardAnimation}
          ref={ref}
          className="order-2 flex flex-col
          justify-around p-3 md:order-1 md:rounded-l-lg md:bg-white
          md:p-8
          "
        >
          <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
          <p
            className="mb-4 text-gray-600"
            dangerouslySetInnerHTML={{ __html: event.description }}
          ></p>
          <p className="font-bold text-gray-500">
            Date de l&apos;événement : {date}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imgAnimation}
          ref={ref}
          className="order-1 md:relative md:order-2 md:h-full md:w-full "
        >
          <img
            src={event.url ? event.url : "https://placehold.co/600x400"}
            alt={event.name}
            className="w-full rounded-lg object-cover  md:absolute md:h-full md:-translate-x-5 md:-translate-y-10 md:shadow-lg"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative grid md:h-[400px] md:grid-cols-2 md:bg-transparent">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardAnimation}
        ref={ref}
        className="md:relative md:h-full md:w-full "
      >
        <img
          src={event.url ? event.url : "https://placehold.co/600x400"}
          alt={event.name}
          className="w-full rounded-lg object-cover md:absolute md:h-full md:-translate-y-10 md:translate-x-5 md:shadow-lg"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imgAnimation}
        ref={ref}
        className="flex flex-col justify-around p-3 md:rounded-r-lg md:bg-white md:p-8
          md:shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>

        <p
          className="mb-4 text-gray-600"
          dangerouslySetInnerHTML={{ __html: event.description }}
        ></p>
        <p className="font-bold text-gray-500">
          Date de l&apos;événement : {date}
        </p>
      </motion.div>
    </div>
  );
};

export default EventCard;
