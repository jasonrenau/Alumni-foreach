import { usericon } from "../../../assets";
import { CheckSquare, Trash2 } from "lucide-react";

const InactiveUsersTable = ({ allUsers, handleAccept, setShowModal }) => {
  return (
    <div className="pt-10">
      {/* Partie 1: Tableau pour les grands écrans */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full rounded-md text-gray-900">
          <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Nom
              </th>
              <th scope="col" className="px-3 py-5 font-medium sm:table-cell">
                Email
              </th>
              <th scope="col" className="px-3 py-5 font-medium sm:table-cell">
                Rôle
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Edition
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-4 divide-gray-200 text-gray-900">
            {allUsers.map((user) => (
              <tr key={user.user_id} className="group">
                <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={usericon}
                      className="rounded-full"
                      alt={`avatar`}
                      width={28}
                      height={28}
                    />
                    <p>{user.name}</p>
                  </div>
                </td>
                <td className="hidden whitespace-nowrap bg-white px-4 py-5 text-sm sm:table-cell">
                  {user.email}
                </td>
                <td className="hidden whitespace-nowrap bg-white px-4 py-5 text-sm sm:table-cell">
                  <select
                    name="role_name"
                    defaultValue={user.role_name}
                    id="role_name"
                    className="rounded-md border border-gray-300 bg-gray-100 px-2 leading-normal text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    onChange={(e) => (user.role_name = e.target.value)}
                  >
                    <option value={user.role_name}>{user.role_name}</option>
                    <option value="moderator">moderator</option>
                  </select>
                </td>
                <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                  <div className="flex gap-4 md:gap-10">
                    <Trash2
                      size={25}
                      onClick={() => setShowModal(user.user_id)}
                      className="cursor-pointer text-red-800 hover:scale-105"
                    />
                    <CheckSquare
                      size={25}
                      className="cursor-pointer text-lime-800 hover:scale-105"
                      onClick={() =>
                        handleAccept(
                          (user = { id: user.user_id, role: user.role_name }),
                        )
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Partie 2: Version mobile spécifique */}
      <div className="lg:hidden">
        {allUsers.map((user) => (
          <div
            key={user.user_id}
            className="mb-3 rounded-md bg-white p-4 shadow"
          >
            <div className="mb-2 flex items-center gap-3">
              <img
                src={usericon}
                className="rounded-full"
                alt={`avatar`}
                width={28}
                height={28}
              />
              <p className="text-sm text-black">{user.name}</p>
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-2">
              <strong>Rôle:</strong>
              <select
                name="role_name"
                defaultValue={user.role_name}
                id={`role_name_${user.user_id}`}
                className="ml-2 rounded-md border border-gray-300 bg-gray-100 px-2 leading-normal text-gray-700 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">{user.role_name}</option>
                <option value="admin">moderator</option>
              </select>
            </div>
            <div className="flex justify-center gap-10">
              <Trash2
                size={25}
                onClick={() => setShowModal(user.user_id)}
                className="cursor-pointer text-red-800 hover:scale-105"
              />
              <CheckSquare
                size={25}
                className="cursor-pointer text-lime-800 hover:scale-105"
                onClick={() =>
                  handleAccept((user = { id: user.user_id, role: "lol" }))
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InactiveUsersTable;
