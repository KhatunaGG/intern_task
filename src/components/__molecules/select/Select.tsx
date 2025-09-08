import { useState } from "react";
import { iconMap } from "../../../commons/data";
import { ChevronDown } from "../../__atoms";
import type {
  OptionType,
  SelectPropsType,
} from "../../../interfaces/interface";

function Select(props: SelectPropsType) {
  const [open, setOpen] = useState(false);

  const options: OptionType[] = props.languages ?? props.menus ?? [];

  const selectedOption =
    props.activeIndex !== null ? options[props.activeIndex] : null;
  const SelectedIcon = selectedOption?.logo
    ? iconMap[selectedOption.logo]
    : null;

  return (
    <div
      className={`${
        props.languages
          ? "md:w-[20.05%] border border-[#E0E0E0] rounded-lg py-[9px] pr-[6px] pl-[14px]"
          : " md:w-[26.17%]"
      } relative min-w-1/2  md:min-w-fit text-sm text-[#132450]   `}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={` w-full flex  items-center gap-1 rounded-md`}
      >
        <div
          className={`${
            props.activeIndex !== null ? "font-bold" : "font-normal"
          } flex items-center gap-2 `}
        >
          {SelectedIcon && <SelectedIcon color="#132450" />}
          {selectedOption?.title
            ? selectedOption.title
            : props.languages
            ? "აირჩიეთ ენა"
            : "აირჩიეთ მენიუ"}
        </div>
        <div className="w-[14px] h-[14px] flex items-center justify-center pt-1">
          <ChevronDown open={open} />
        </div>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full min-w-fit bg-white rounded-md shadow-lg max-h-60 overflow-y-auto whitespace-nowrap ">
          {options.map((option, i) => {
            const Icon = option.logo ? iconMap[option.logo] : null;
            return (
              <li
                key={i}
                onClick={() => {
                  props.setActiveIndex(i);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer  "
              >
                {Icon && <Icon color="#132450" />}

                {option.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Select;
