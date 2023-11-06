import { PropTypes } from "prop-types";
const Search = ({ handleSearch }) => {
  return (
    <div className="bg-primary py-20">
      <div className="m-container text-center lg:w-4/5 flex">
        <input
          name="search"
          type="text"
          id="search-field"
          placeholder="Search By Services Name"
          className="p-4 w-full"
        />
        <button
          onClick={handleSearch}
          className="btn bg-black rounded-none lg:px-20 text-white border-4 border-black"
        >
          Search
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
};

export default Search;
