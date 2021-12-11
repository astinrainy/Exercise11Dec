import * as React from "react";

export const NumberControl = ({ max }) => {
  const [value, setValue] = React.useState(0);
  // const [error, setError] = React.useState("");

  const error =
    value <= 0
      ? "Must be at least one"
      : value > max
      ? `There is maximum ${max} items only`
      : "";

  console.log({ value });

  return (
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <div className="relative w-32">
        <button
          type="button"
          className="absolute left-0 inset-y-0 px-1.5 text-gray-400"
          onClick={() => {
            if (value > 0) {
              setValue(value - 1);
            }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        </button>
        <input
          type="text"
          name="headcount"
          required
          className="block w-full px-9 text-center shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
          value={value}
          onChange={(ev) => {
            const newValue = ev.target.value;
            const numValue = Number(newValue);

            if (!isNaN(numValue)) {
              setValue(numValue);
            }
          }}
        />
        <button
          type="button"
          className="absolute right-0 inset-y-0 px-1.5 text-gray-400"
          onClick={() => {
            setValue(value + 1);
          }}
          disabled={value > max}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      {error ? error : null}
    </div>
  );
};
