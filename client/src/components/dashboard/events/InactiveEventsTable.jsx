import { CheckSquare, Trash2 } from "lucide-react";
import { dateFormat } from "../../../utils/functions";

const InactiveEventsTable = ({ allEvents, handleAccept, setShowModal }) => {
  return (
    <div className="pt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-md text-gray-900">
          <thead className="bg-gray-50 text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Nom
              </th>
              <th
                scope="col"
                className="hidden px-3 py-5 font-medium lg:table-cell"
              >
                Date
              </th>
              <th
                scope="col"
                className="hidden px-3 py-5 font-medium lg:table-cell"
              >
                Description
              </th>
              <th scope="col" className="px-3 py-5 text-center font-medium">
                Validation
              </th>
            </tr>
          </thead>

          <tbody className="divide-y-4 divide-gray-200 text-gray-900">
            {allEvents.map((event) => (
              <tr key={event.event_id} className="group md:table-row">
                <td className="bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6 lg:table-cell">
                  <div className="flex items-center gap-3">
                    <p>{event.name}</p>
                  </div>
                  <div className="lg:hidden">
                    <p className="py-2">{dateFormat(event.event_date)}</p>
                    <p
                      className="py-2"
                      dangerouslySetInnerHTML={{
                        __html: event.description.slice(0, 300),
                      }}
                    ></p>
                  </div>
                </td>
                <td className="whitespace-wrap hidden bg-white px-4 py-5 text-sm lg:table-cell">
                  {dateFormat(event.event_date)}
                </td>
                <td
                  className="whitespace-wrap hidden bg-white px-4 py-5 text-sm lg:table-cell"
                  dangerouslySetInnerHTML={{
                    __html: event.description.slice(0, 300),
                  }}
                ></td>
                <td className="bg-white px-4 py-5 text-sm lg:table-cell">
                  <div className="lg:flex lg:justify-center lg:gap-8">
                    <div className="max-lg:mb-8">
                      <Trash2
                        size={25}
                        onClick={() => setShowModal(event.event_id)}
                        className="mx-auto cursor-pointer text-red-800 hover:scale-105"
                      />
                    </div>

                    <div>
                      <CheckSquare
                        size={25}
                        className="mx-auto cursor-pointer text-lime-800 hover:scale-105"
                        onClick={() => handleAccept(event.event_id)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InactiveEventsTable;
