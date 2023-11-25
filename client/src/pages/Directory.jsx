import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { redirect, useLoaderData, useLocation } from "react-router-dom";
import UserCard from "../components/directory/UserCard";
import EventHeader from "../components/events/EventHeader";
import SearchForm from "../components/SearchForm";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import TrainingFilter from "../components/directory/TrainingFilter";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { users: data, page },
      } = await customFetch.get("/users");
      const {
        data: { trainings: categories },
      } = await customFetch.get("/trainings");
      return { data, page, categories };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      redirect("/");
    }
  }
  if (!token) {
    toast.error("Vous devez être connecté pour accéder à cette page");
    return redirect("/");
  }
  return { data: null };
};

const Directory = () => {
  const { search } = useLocation();
  const { data, page, categories } = useLoaderData();
  const [users, setUsers] = useState(data);
  const [currentPage, setCurrentPage] = useState(page);
  const [trainings, setTrainings] = useState(categories);
  const [searchForm, setSearchForm] = useState("");
  const [training, setTraining] = useState("");
  const ref = useRef();
  const isInView = useInView(ref);

  const handleChange = useDebouncedCallback(async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    const params = new URLSearchParams(search);
    params.set("title", searchForm);
    params.set("training", training);
    const {
      data: { users: data },
    } = await customFetch.get("/users", { params });
    if (data.length === 0) {
      setUsers([]);
    }
    setUsers(data);
  }, 300);

  const fetchMoreData = async () => {
    const nextPage = currentPage + 1;
    const params = { page: nextPage, title: searchForm, training: training };
    try {
      const {
        data: { users: newsUsers },
      } = await customFetch.get("/users", { params });
      setCurrentPage(nextPage);
      setUsers([...users, ...newsUsers]);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  useEffect(() => {
    if (isInView) {
      fetchMoreData();
    }
  }, [isInView]);

  return (
    <section className=" min-h-screen overflow-hidden bg-gray-100">
      <motion.article
        className=" mx-auto my-5 w-[90%] max-w-6xl rounded-md bg-custom-gradient p-5"
        initial={{ y: -250, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <EventHeader />
      </motion.article>

      <motion.div
        className="mx-auto my-5 flex w-[90%] max-w-6xl flex-col items-center justify-center gap-2 md:flex-row md:gap-10"
        initial={{ y: -250, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <SearchForm
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          handleChange={handleChange}
          name={"title"}
        />
        <TrainingFilter
          handleChange={handleChange}
          trainings={trainings}
          setTraining={setTraining}
        />
      </motion.div>
      <article className=" mx-auto w-[90%] max-w-6xl py-5">
        {users.length > 0 ? (
          <div className="flex flex-wrap gap-10">
            {users.map((user, index) => (
              <UserCard key={index} user={user} index={index} />
            ))}
          </div>
        ) : (
          <p>Pas d'utilisateurs</p>
        )}
      </article>
      <div ref={ref}></div>
    </section>
  );
};
export default Directory;
