import type { InputProps } from "../../../interfaces/interface";

const Input = (props: InputProps) => {
  return (
    <textarea
      className="w-full md:w-1/2 bg-[#F0F7FF] min-h-[190px] md:min-h-[432px] outline-none p-3 resize-none font-normal text-sm md:text-[18px] leading-[26px]"
      placeholder="დაიწყე წერა..."
      {...props}
    />
  );
};

export default Input;
