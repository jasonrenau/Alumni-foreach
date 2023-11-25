import customFetch from "../utils/customFetch";

const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
  setNumberOfPages,
  setCurrentData,
  fetchUrl,
  dataName,
}) => {
  const handlePageChange = async (pageNumber) => {
    const params = new URLSearchParams(pageNumber);
    params.set("page", pageNumber);
    const { data } = await customFetch.get(fetchUrl, { params });
    setCurrentPage(data.page);
    setCurrentData(data[dataName]);
    setNumberOfPages(data.numberOfPages);
  };

  return (
    <div className="flex items-center justify-center gap-2 pt-10 ">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`rounded-md px-4 py-2 text-gray-700 shadow ${
          currentPage > 1
            ? "bg-gray-200 hover:bg-gray-300"
            : "hidden bg-gray-100"
        }`}
        disabled={currentPage <= 1}
      >
        Précédent
      </button>

      <ul className="list-reset flex gap-1">
        {Array.from({ length: numberOfPages }, (_, index) => (
          <li key={index}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-2 ${
                index + 1 === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-400"
              } rounded-md shadow disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400`}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`rounded-md px-4 py-2 text-gray-700 shadow ${
          currentPage < numberOfPages
            ? "bg-gray-200 hover:bg-gray-300"
            : "hidden bg-gray-100"
        }`}
        disabled={currentPage >= numberOfPages}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
