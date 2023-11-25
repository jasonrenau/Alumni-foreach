import { Briefcase, PartyPopper, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const MenuAdmin = ({ setIsOpen }) => {
  return (
    <>
      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 rounded-md bg-porange-700 p-2 text-gray-50 transition-all duration-300"
              : "flex gap-2 p-2 text-gray-50 "
          }
          to={"/dashboard/utilisateurs"}
        >
          <User2 size={25} strokeWidth={1.25} />
          Utilisateurs
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 rounded-md bg-porange-700 p-2 text-gray-50 transition-all duration-300"
              : "flex gap-2 p-2 text-gray-50 "
          }
          to={"/dashboard/emplois"}
        >
          <Briefcase size={25} strokeWidth={1.25} />
          Les emplois
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 rounded-md bg-porange-700 p-2 text-gray-50 transition-all duration-300"
              : "flex gap-2 p-2 text-gray-50 "
          }
          to={"/dashboard/evenements"}
        >
          <PartyPopper />
          Les évènements
        </NavLink>
      </li>
    </>
  );
};
export default MenuAdmin;
