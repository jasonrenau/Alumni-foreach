import customFetch from "../utils/customFetch";
import SearchForm from "../components/SearchForm";
import JobCard from "../components/job/JobCard";
import { useLoaderData, useLocation, redirect, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { form } from "../assets/index";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const {
        data: { jobs: data },
      } = await customFetch.get("/jobs", { params });
      return { data, params };
    } else {
      toast.error("Merci de vous connecter ");
      return redirect("/connexion");
    }
  } catch (error) {
    console.log(error?.response?.data?.msg);
  }
  return { data: null };
};

const Jobs = () => {
  const { search } = useLocation();
  const { data, params } = useLoaderData();
  const [jobs, setJobs] = useState(data);

  const [searchForm, setSearchForm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams(search);
    params.set("title", searchForm);
    const {
      data: { jobs: data },
    } = await customFetch.get("/jobs", { params });
    setJobs(data);
  };
  const handleReturn = () => {
    setSearchForm("");
    setJobs(data);
  };

  return (
    <section className="  min-h-screen bg-gray-100">
      <article className="mx-auto w-[90%] max-w-6xl ">
        <div className="h-10">
          <SearchForm
            handleReturn={handleReturn}
            params={params}
            searchForm={searchForm}
            setSearchForm={setSearchForm}
            handleSubmit={handleSubmit}
          />
        </div>

        <Link
          className=" p-0 text-pblue-800 hover:text-pmarine-800"
          to={"/dashboard"}
        >
          <div className=" bottom-50 fixed right-2 z-10 flex h-16 w-16 animate-scale-slow items-center justify-center rounded-full bg-pblue-500">
            <img className=" h-10 " src={form} alt="logo" />
          </div>
        </Link>

        <div className="grid-col grid  gap-20 md:grid-flow-row md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Jobs;
