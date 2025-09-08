import { useEffect, useState } from "react";
import { ChevronLeft, MenuIcon } from "../../__atoms";
import Menu from "../menu/Menu";
import { Select } from "../../__molecules";
import { menus } from "../../../commons/data";

const Sidebar = () => {
  const defaultActiveIndex = menus.findIndex(
    (item) => item.title === "ტექსტის შედარება"
  );
  const [active, setActive] = useState<number | null>(defaultActiveIndex);
  const [user, setUser] = useState("");
  const [firstChar, setFirstChar] = useState("");

  useEffect(() => {
    const name = "სახელი გვარი";
    setUser(name);
    setFirstChar(name.charAt(0));
  }, []);

  return (
    <aside className="lg:w-[16.66%] bg-[#132450] h-full lg:min-h-screen flex flex-col items-end justify-between text-white">
      <div className="w-full flex items-center justify-between  lg:flex-col lg:items-start px-[20px] lg:px-0 md:px-[30px]  py-3 lg:py-0">
        <div className="w-full pt-3 pr-[27px] lg:flex items-center justify-end  hidden ">
          <ChevronLeft />
        </div>

        <div className="w-fill flex items-center gap-[11.06px]  lg:pl-6 lg:pt-[13px]">
          <img src="/assets/logo.png" alt="" className="w-[42.65px] h-[44px]" />
          <h1 className="uppercase">enagram</h1>
        </div>

        <Menu active={active} setActive={setActive} />
        <div className="flex lg:hidden">
          <MenuIcon />
        </div>
      </div>

      <div className="w-full py-6 px-[20px] md:px-[30px]  bg-white flex items-start lg:hidden">
        <Select menus={menus} activeIndex={active} setActiveIndex={setActive} />
      </div>

      <div className="w-full border-t border-t-[#9EB9FF33] pl-[14px] pr-3 py-[20px] items-center justify-between hidden lg:flex">
        <div className="flex items-center gap-[5px]">
          <div className="w-[20px] h-[20px] rounded-full border border-white bg-blue-200 text-[#132450] font-bold text-[10px] leading-[24px] tracking-[0.1px] flex items-center justify-center">
            {firstChar}
          </div>
          <h2 className="font-normal text-sm leading-[20px] ">{user}</h2>
        </div>
        <div className="font-bold">...</div>
      </div>
    </aside>
  );
};

export default Sidebar;
