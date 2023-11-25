import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { Mail, Menu } from "lucide-react";
import { usericon } from "../../assets/index";
import NavbarModalUser from "./NavbarModalUser";
import NavbarModalMail from "./NavbarModalMail";

const Navbar = ({ user, notifications }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  const navbarRef = useRef();

  const openVolet = (volet) => {
    if (volet === "user") {
      setUserOpen(!userOpen);
      setMailOpen(false);
    } else if (volet === "mail") {
      setMailOpen(!mailOpen);
      setUserOpen(false);
    }
  };

  // close modal on click outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setUserOpen(false);
      setMailOpen(false);
      setIsOpen(false);
    }
  };

  // close modal on click outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuRotation = isOpen ? "rotate-90 transition-all duration-100" : "";

  return (
    <nav
      ref={navbarRef}
      className="flex items-center justify-between border-b-[1px] border-gray-200 px-5 py-2 shadow-md"
    >
      <div className="h-16 w-16">
        <a href="/">
          <img className="" src="/logoalumni.png" alt="logo-foreach" />
        </a>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-3  ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-gray-950 pb-1 transition-all duration-300 "
                  : "text-gray-950 "
              }
              to={"/"}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-gray-950 pb-1 transition-all duration-300 "
                  : "text-gray-950 "
              }
              to={"/a-propos"}
            >
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-gray-950 pb-1 transition-all duration-300 "
                  : "text-gray-950 "
              }
              to={"/formations"}
            >
              Formations
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-gray-950 pb-1 transition-all duration-300 "
                      : "text-gray-950 "
                  }
                  to={"/annuaire"}
                >
                  Annuaire
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-gray-950 pb-1 transition-all duration-300 "
                      : "text-gray-950 "
                  }
                  to={"/evenements"}
                >
                  Événements
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-gray-950 pb-1 transition-all duration-300 "
                      : "text-gray-950 "
                  }
                  to={"/emplois-stages"}
                >
                  Emplois/Stages
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex gap-3">
        {/* -------------- Modal mail ------------- */}
        <div className="relative " onClick={() => openVolet("mail")}>
          <div className="relative cursor-pointer">
            <Mail strokeWidth={1.25} className="h-8 w-8  " />
            <div
              className={`absolute -inset-x-3 -inset-y-3 grid h-4 w-4 animate-scale-slow place-content-center rounded-full bg-pblue-900 p-3 text-white ${
                notifications ? "" : "hidden"
              } `}
            >
              {notifications?.compteur}
            </div>
          </div>
          {mailOpen && <NavbarModalMail notifications={notifications} />}
        </div>
        {/* -------------- fin Modal mail ------------- */}
        {/* -------------- Modal user ------------- */}
        <div className="relative " onClick={() => openVolet("user")}>
          {user?.avatar ? (
            <img
              className="h-8 w-8 rounded-full border-gray-500  ring-2 ring-inset ring-gray-600"
              src={user.avatar}
              alt="avatar"
            />
          ) : (
            <img
              className="h-8 w-8 rounded-full border-gray-500  ring-2 ring-inset ring-gray-600"
              src={usericon}
              alt="avatar"
            />
          )}
          {userOpen && <NavbarModalUser user={user} />}
        </div>
        {/* -------------- fin Modal user ------------- */}
        <div>
          <Menu
            strokeWidth={1.25}
            className={`${menuRotation} ml-4 h-8 w-8 transform cursor-pointer md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={
            !isOpen
              ? "absolute left-0 top-0 z-10 w-full -translate-y-full bg-pmarine-950 p-2 pb-5 text-center duration-1000 md:hidden "
              : "absolute left-0 top-0 z-10 w-full bg-pmarine-950 p-2 pb-5 text-center duration-1000 md:hidden "
          }
        >
          <Menu
            strokeWidth={1.25}
            className={` ${menuRotation} ml-auto h-8 w-8 cursor-pointer text-gray-50 `}
            onClick={() => setIsOpen(!isOpen)}
          />
          <ul className="flex flex-col gap-5">
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-porange-600 transition-all duration-300"
                    : "text-gray-50 "
                }
                to={"/"}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-porange-600 transition-all duration-300"
                    : "text-gray-50 "
                }
                to={"/a-propos"}
              >
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-porange-600 transition-all duration-300"
                    : "text-gray-50 "
                }
                to={"/formations"}
              >
                Formations
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-porange-600 transition-all duration-300"
                        : "text-gray-50 "
                    }
                    to={"/annuaire"}
                  >
                    Annuaire
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-porange-600 transition-all duration-300"
                        : "text-gray-50 "
                    }
                    to={"/evenements"}
                  >
                    Événements
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-porange-600 transition-all duration-300"
                        : "text-gray-50 "
                    }
                    to={"/emplois-stages"}
                  >
                    Emplois/Stages
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
