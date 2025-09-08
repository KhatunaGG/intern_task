import { useState } from "react";
import { languages } from "../../../commons/data";
import { Select } from "../../__molecules";
import { Plus } from "../../__atoms";
import type { NavProps } from "../../../interfaces/interface";

const Nav = ({ onReset, text1, text2, diffText1, diffText2 }: NavProps) => {
  const activeLanIndex = languages.findIndex((l) => l === "ქართული");
  const [activeLanguage, setActiveLanguage] = useState<number | null>(
    activeLanIndex
  );

  const isResetActive =
    text1.trim() !== "" ||
    text2.trim() !== "" ||
    diffText1.length > 0 ||
    diffText2.length > 0;

  return (
    <nav className="w-full h-full flex items-center  border-b border-b-[#E0E0E0] flex-col md:flex-row   text-[#383A48] pb-4 gap-4 md:gap-0">
      <div className=" w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:w-[78.93%] lg:w-[86.79%]">
        <div className="w-fit whitespace-nowrap flex items-center justify-start gap-4 md:gap-0">
          <Select
            languages={languages.map((lang) => ({ title: lang }))}
            activeIndex={activeLanguage}
            setActiveIndex={setActiveLanguage}
          />
        </div>
        <div className="w-full flex items-center gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[20px] h-[20px] rounded-[4px] border border-[#E0E0E0]"
          />
          <label
            htmlFor=""
            className="font-normal text-sm leading-[22px] tracking-[1%]"
          >
            ფორმატის შენარჩუნება
          </label>
        </div>
      </div>

      <div className=" w-full flex  whitespace-nowrap md:w-[150px]">
        <button
          onClick={onReset}
          className={`w-full flex items-center justify-center text-white py-[7px] pl-3 pr-4 rounded-[6px] gap-1 transition-colors duration-300 ease-in-out ${
            isResetActive
              ? "bg-[#4571E4] hover:bg-[#2f59c6]"
              : "bg-[#383A4899] hover:bg-[#484b5c99]"
          }`}
        >
          <div className="w-6 h-6">
            <Plus />
          </div>
          <p className="font-normal text-sm leading-[28px]">ახალის გახსნა</p>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
