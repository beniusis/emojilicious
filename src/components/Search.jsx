export default function Search({ value, setValue }) {
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
        onFocus={(e) => (e.target.value = '')}
        className="w-full rounded-md border border-gray-200 p-2.5 pe-10 shadow-sm sm:text-sm focus:border-yellow-400 outline-none placeholder:text-gray-400 text-gray-400 ease-out duration-300"
      />

      <span
        className="absolute inset-y-0 grid w-10 text-gray-600 pointer-events-none end-0 place-content-center"
        aria-hidden
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
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
}
