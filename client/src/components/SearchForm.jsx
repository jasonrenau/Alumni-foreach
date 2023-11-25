import { Search } from "lucide-react";

const SearchForm = ({ searchForm, setSearchForm, handleChange, name }) => {
  const getPlaceholder = () => {
    if (name === "user_name") {
      return "par nom";
    } else if (name === "event_name") {
      return "par titre";
    } else {
      return "";
    }
  };
  const placeholder = getPlaceholder();

  return (
    <div onChange={handleChange} className="relative  flex w-56">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={`Rechercher ${placeholder} ...`}
        type="text"
        name={name}
        value={searchForm}
        onChange={(e) => setSearchForm(e.target.value)}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <Search color="gray" />
      </div>
    </div>
  );
};
export default SearchForm;
