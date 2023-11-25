import { Link } from "react-router-dom";
import { UserCircle, Cog, Menu } from "lucide-react";
import { usericon } from "../../../assets";
import { setting } from "../../../assets";
import MenuAdmin from "./MenuAdmin";
import MenuUser from "./MenuUser";
import MenuCompagny from "./MenuCompagny";
import { useState } from "react";

const Sidebar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRotation = isOpen ? "rotate-90 transition-all duration-100" : "";

  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen w-full bg-pmarine-950 px-5 py-5 
        md:sticky md:w-auto md:flex-none
        ${
          !isOpen
            ? "-translate-x-full transition-transform duration-1000 md:translate-x-0"
            : "translate-x-0 transition-transform  duration-1000 md:translate-x-0"
        }
        `}
    >
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex w-full  items-center justify-around gap-1">
          <div className="flex items-center gap-1">
            <img className="h-12 w-12" src={setting} alt="logo parametres" />
            <h5 className="text-gray-50">Foreach academy</h5>
          </div>

          <div
            className={`${
              isOpen ? "relative" : " absolute right-0  top-2 translate-x-14 "
            }`}
          >
            <Menu
              strokeWidth={1.25}
              color={`${isOpen ? "white" : "white"}`}
              className={`${menuRotation} ${
                isOpen
                  ? "h-8 w-8"
                  : "h-12 w-12 animate-scale-slow rounded-full bg-pmarine-950 p-1 shadow-md shadow-pmarine-500"
              }    transform cursor-pointer duration-1000 md:hidden`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {/* à gérer suivant l'utilisateur connecté */}
        <div className="md:w-full">
          <ul className="flex flex-col items-center  gap-5 md:items-stretch  ">
            {/* boucle suivant user.role jaffiche un menu different */}
            {(user?.role === "alumni" || user?.role === "mentor") && (
              <MenuUser setIsOpen={setIsOpen} />
            )}

            {user?.role === "compagny" && (
              <MenuCompagny setIsOpen={setIsOpen} />
            )}
            {user?.role === "admin" && <MenuAdmin setIsOpen={setIsOpen} />}
            {user?.role === "moderator" && <MenuAdmin setIsOpen={setIsOpen} />}
          </ul>
        </div>
        {/* à gérer suivant l'utilisateur connecté */}

        <div>
          <Link
            className="text-sm text-gray-50 duration-500 hover:text-porange-600 hover:transition-colors"
            to={"/"}
          >
            Retourner au site
          </Link>
        </div>
        {/*----------------- user---------------*/}
        <div className="flex w-full items-center justify-between ">
          <div className="flex items-center gap-1">
            {user?.avatar ? (
              <img
                className="w- h-[50px] rounded-full border-gray-500  ring-2 ring-inset ring-gray-600"
                src={user?.avatar}
                alt="avatar"
              />
            ) : (
              <img
                className="h-8 w-8 rounded-full border-gray-500  ring-2 ring-inset ring-gray-600"
                src={usericon}
                alt="avatar"
              />
            )}

            <p className="text-gray-50 first-letter:uppercase">{user?.name}</p>
          </div>
          <Link className="hover:animate-spin" to={"/dashboard/profil"}>
            <Cog color="lightgray" size={25} strokeWidth={1.25} />
          </Link>
        </div>
        {/*--------------------- user------------- */}
      </div>
    </aside>
  );
};
export default Sidebar;
