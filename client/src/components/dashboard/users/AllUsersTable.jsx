import { Trash2 } from "lucide-react";
import { usericon } from "../../../assets";

const AllUsersTable = ({ users, setModalId }) => {
  return (
    <div className="pt-10">
      <table className=" table min-w-full rounded-md text-gray-900">
        <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Nom
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Email
            </th>
            <th scope="col" className="px-3 py-5  font-medium">
              Edition
            </th>
          </tr>
        </thead>

        <tbody className="divide-y-4 divide-gray-200 text-gray-900">
          {users.map((user) => (
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
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                {user.email}
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                <div className="flex gap-4 md:gap-10">
                  <Trash2
                    size={25}
                    onClick={() => setModalId(user.user_id)}
                    className="cursor-pointer text-red-800 hover:scale-105"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllUsersTable;
