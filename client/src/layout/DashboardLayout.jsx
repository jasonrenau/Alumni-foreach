import {
  Outlet,
  redirect,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Sidebar from "../components/navigation/sidebar/Sidebar";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useEffect } from "react";
import { Loader } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { user },
      } = await customFetch("/users/currentUser");
      return { user };
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
    return { user: null };
  }
  toast.error("Vous devez être connecté pour accéder à cette page");
  return redirect("/");
};

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="md:flex">
      <Sidebar user={user} />
      {isLoading ? <Loader /> : <Outlet context={{ user }} />}
    </main>
  );
};
export default DashboardLayout;
