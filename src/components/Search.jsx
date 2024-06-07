import PropTypes from 'prop-types';

export const Search = ({ value, setValue }) => {
  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input
        type="text"
        id="search"
        placeholder="Search for emoji..."
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-md border border-gray-200 p-2.5 pe-10 text-gray-400 shadow-sm outline-none duration-300 ease-out placeholder:text-gray-400 focus:border-yellow-400 sm:text-sm"
      />

      <span
        className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-600"
        aria-hidden
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};
