import {
  Outlet,
  useLoaderData,
  useNavigation,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/navigation/Navbar";
import customFetch from "../utils/customFetch";
import Loader from "../components/Loader";
import Footer from "../components/navigation/Footer";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const {
        data: { user },
      } = await customFetch.get("/users/currentUser");

      const {
        data: { notifications },
      } = await customFetch.get(`/notification/${user.user_id}`);

      return { user, notifications };
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  }
  return { user: null, notifications: null };
};

const SharedLayout = () => {
  const { user, notifications } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Navbar user={user} notifications={notifications} />
      {isLoading ? <Loader /> : <Outlet context={{ user }} />}
      <Footer />
    </main>
  );
};
export default SharedLayout;
