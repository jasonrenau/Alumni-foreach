import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { Link, redirect, useLoaderData } from "react-router-dom";
import {
  backJob,
  location,
  jobLogo,
  Time,
  building,
  usericon,
} from "../assets/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request, params: { id } }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const token = localStorage.getItem("token");
    if (token) {
      const {
        data: { job },
      } = await customFetch.get(`/jobs/job/${id}`, { params });

      return { job, params };
    } else {
      toast.error("Merci de vous connecter ");
      return redirect("/");
    }
  } catch (error) {
    console.log(error?.response?.data?.msg);
  }
  return { job: null };
};

const SingleJob = () => {
  const { job } = useLoaderData();
  // formatage de la date
  const formattedDate = new Date(job.date).toLocaleDateString();
  const formattedCreated = new Date(job.created_at).toLocaleDateString();

  // formatage type_job
  const jobType =
    job.type_job === "internship"
      ? "Stage"
      : job.type_job === "job"
      ? "Emploi"
      : job.type_job === "alternation"
      ? "Apprentissage"
      : "Autre";
  console.log(job);
  return (
    <>
      <section className="  min-h-screen bg-gray-100 ">
        <article className="mx-auto w-[90%] max-w-6xl  ">
          <div>
            <Link to={"/emplois-stages"}>
              <img
                className="top-22 absolute right-4 top-24 h-8"
                src={backJob}
                alt="logo"
              />
            </Link>
          </div>
          <div>
            <h3 className="text-center capitalize">{job.title}</h3>
            <div className=" mb-5 flex justify-center">
              <img
                src={job.avatar ? job.avatar : usericon}
                alt="random image"
                className=" h-20 w-20 rounded-full  object-cover shadow-md"
              />
            </div>
            <div className="mb-8 ">
              <div className="flex ">
                <div className="flex capitalize">
                  <img className="h-5" src={building} alt="logo" />
                  {job.compagny_name} .
                </div>
                <img className="h-5" src={location} alt="logo" />
                <p>Situé à: {job.city}</p>
              </div>
              <div className="flex">
                <img className="h-5" src={jobLogo} alt="logo" />
                <p>Type de contrat: {jobType}</p>
              </div>
              <div className="flex">
                <img className="h-5" src={Time} alt="logo" />
                <p> A partir du :{formattedDate}</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="pb-3 pt-0 text-pblue-700">Information:</h3>
              <p>Expérience souhaitée: {job.experience} ans.</p>
              <p>Rémunération: {job.remuneration} Brut</p>
              <p>
                Contact:{" "}
                <a className="text-pmarine-800" href="mailto:{job.email}">
                  {job.email}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="pb-3 text-pblue-700">
              Decription de l'offre d'emploi:
            </h4>
            <p>{job.description}</p>
          </div>
          <div className="pb-10 text-center italic ">
            Création de l'offre le :{formattedCreated}
          </div>
        </article>
      </section>
    </>
  );
};
export default SingleJob;
