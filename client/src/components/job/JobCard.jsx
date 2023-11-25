import { useRef } from "react";
import { usericon, location, jobLogo, Time, timer } from "../../assets/index";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "300px", once: true });
  const cardAnimation = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  // formatage de la date
  const formattedDate = new Date(job.date).toLocaleDateString();

  // formatage type_job
  const jobType =
    job.type_job === "internship"
      ? "Stage"
      : job.type_job === "job"
      ? "Emploi"
      : job.type_job === "alternation"
      ? "Apprentissage"
      : "Autre";
  // formatage id

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      variants={cardAnimation}
      className="mx-auto mt-8 w-[90%]  "
    >
      <div className="relative  mb-20 h-80 w-80 rounded-lg  bg-white p-4  shadow-lg">
        <div className="mx-auto w-40">
          <h3 className="ml-auto w-full  cursor-pointer p-0 text-center  font-extrabold  capitalize  leading-none text-gray-500 ">
            <Link
              className="p-0 text-xl text-pblue-800 hover:text-pmarine-800"
              href="#"
              to={`/job/${job.job_id}`}
            >
              {job.title}
            </Link>
          </h3>
        </div>

        <div className="">
          <div className="mb-2 text-center text-lg  font-semibold">
            {job.compagny_name}
          </div>
          <div className=" absolute  left-0 top-0 -translate-x-1/3 -translate-y-1/3">
            <img
              src={job.avatar ? job.avatar : usericon}
              alt="random image"
              className=" h-20 w-20 rounded-full  object-cover shadow-md"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <div className="flex ">
                <img className="h-5" src={location} alt="logo" />
                <p> {job.city}</p>
              </div>
              <div className="flex">
                <img className="h-5" src={jobLogo} alt="logo" />
                <p> {jobType}</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex  ">
                <img className="h-5" src={Time} alt="logo" />
                <p>{formattedDate}</p>
              </div>
              <div className="flex">
                <img className="h-5" src={timer} alt="logo" />
                <p>2 ans </p>
              </div>
            </div>
          </div>
          <div>
            <p className=" line-clamp-4 text-justify text-lg ">
              {job.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default JobCard;
