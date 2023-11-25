import { User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const MenuUser = ({ setIsOpen }) => {
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
          to={"/dashboard/profil"}
        >
          <User2 size={25} strokeWidth={1.25} />
          Mon profil
        </NavLink>
      </li>
    </>
  );
};
export default MenuUser;
