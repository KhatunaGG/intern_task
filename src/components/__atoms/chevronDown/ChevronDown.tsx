import type { ChevronDownPropsType } from "../../../interfaces/interface";

const ChevronDown = ({ open }: ChevronDownPropsType) => {
  return (
    <svg
      className={`w-4 h-4 transform transition-transform ${
        open ? "rotate-180 transform duration-300 ease-in-out" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default ChevronDown;
