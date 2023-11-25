import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
import SharedLayout from "./layout/SharedLayout";
import DashboardLayout from "./layout/DashboardLayout";

// pages
import {
  Home,
  About,
  Directory,
  Trainings,
  Events,
  Jobs,
  Login,
  Register,
  DashboardUsers,
  DashboardJobs,
  DashboardEvents,
  DashboardCreateEvent,
  DashboardEditEvent,
  DashboardCompagnies,
  DashboardProfil,
  DashboardCompagnyJobs,
  ErrorPage,
  SingleJob,
  SingleUser,
} from "./pages/index";

// loader
import { loader as sharedLoader } from "./layout/SharedLayout";
import { loader as dashboardLoader } from "./layout/DashboardLayout";
import { loader as registerLoader } from "./pages/Register";
import { loader as profilLoader } from "./pages/DashboardProfil";
import { loader as eventsLoader } from "./pages/Events";
import { loader as directoryLoader } from "./pages/Directory";
import { loader as jobsLoader } from "./pages/Jobs";
import { loader as jobLoader } from "./pages/SingleJob";
import { loader as userLoader } from "./pages/SingleUser";
import { loader as homeLoader } from "./pages/Home";
import { loader as dashboardUsersLoader } from "./pages/admin/DashboardUsers";
import { loader as dashboardEventsLoader } from "./pages/admin/DashboardEvents";
import { loader as dashboardCreateEventsLoader } from "./pages/admin/DashboardCreateEvent";
import { loader as dashboardEditEventLoader } from "./pages/admin/DashboardEditEvent";
// action
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as profilAction } from "./pages/DashboardProfil";
import { action as dashboardUsersAction } from "./pages/admin/DashboardUsers";
import { action as dashboardEventsAction } from "./pages/admin/DashboardEvents";
import { action as dashboardCreateEventsAction } from "./pages/admin/DashboardCreateEvent";
import { action as dashboardEditEventAction } from "./pages/admin/DashboardEditEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    loader: sharedLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "a-propos",
        element: <About />,
      },
      {
        path: "annuaire",
        element: <Directory />,
        loader: directoryLoader,
      },
      {
        path: "formations",
        element: <Trainings />,
      },
      {
        path: "evenements",
        element: <Events />,
        loader: eventsLoader,
      },
      {
        path: "emplois-stages",
        element: <Jobs />,
        loader: jobsLoader,
      },
      {
        path: "job/:id",
        element: <SingleJob />,
        loader: jobLoader,
      },
      {
        path: "user/:id",
        element: <SingleUser />,
        loader: userLoader,
      },
    ],
  },
  {
    path: "connexion",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "enregistrement",
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    loader: dashboardLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "utilisateurs",
        element: <DashboardUsers />,
        loader: dashboardUsersLoader,
        action: dashboardUsersAction,
      },
      {
        path: "emplois",
        element: <DashboardJobs />,
      },
      {
        path: "evenements",
        element: <DashboardEvents />,
        loader: dashboardEventsLoader,
        action: dashboardEventsAction,
      },
      {
        path: "evenements/creation",
        element: <DashboardCreateEvent />,
        loader: dashboardCreateEventsLoader,
        action: dashboardCreateEventsAction,
      },
      {
        path: "evenements/edition/:id",
        element: <DashboardEditEvent />,
        loader: dashboardEditEventLoader,
        action: dashboardEditEventAction,
      },
      {
        path: "entreprises",
        element: <DashboardCompagnies />,
      },
      {
        path: "profil",
        element: <DashboardProfil />,
        action: profilAction,
        loader: profilLoader,
      },
      {
        path: "mes-emplois",
        element: <DashboardCompagnyJobs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
