import { iconMap, menus } from "../../../commons/data";
import type { MenuPropsType } from "../../../interfaces/interface";

const Menu = ({ active, setActive }: MenuPropsType) => {
  return (
    <div className="w-full pt-[51px] pl-[12.8px] hidden lg:flex lg:flex-col">
      {menus.map((menu, i) => {
        const IconComponent = iconMap[menu.logo];
        const isActive = i === active;
        const isPrev = active !== null && i === active - 1;
        const isNext = active !== null && i === active + 1;
        const buttonBaseStyles = `
          w-full flex items-center gap-[9px] pl-[11.2px] py-6 transition-all duration-200  text-sm leading-[20px]
        `;
        const activeStyles = `
          bg-white text-[#132450] font-bold rounded-l-[30px]
        `;
        const inactiveStyles = `
          bg-[#132450] text-white font-normal
        `;
        const prevStyles = `
          rounded-br-[30px]
        `;
        const nextStyles = `
          rounded-tr-[30px]
        `;
        const iconColor = isActive ? "#132450" : "white";

        return (
          <div
            key={i}
            className={`flex items-center gap-[9px] bg-[linear-gradient(to_right,#132450_0%,#ffffff_100%)]`}
          >
            <button
              onClick={() => setActive(i)}
              className={`
                ${buttonBaseStyles}
                ${isActive ? activeStyles : inactiveStyles}
                ${isPrev ? prevStyles : ""}
                ${isNext ? nextStyles : ""}
              `}
            >
              {IconComponent && <IconComponent color={iconColor} />}

              {menu.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
