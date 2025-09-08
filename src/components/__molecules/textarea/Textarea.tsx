import type { TextareaProps } from "../../../interfaces/interface";

const Textarea = ({ value, onChange }: TextareaProps) => {
  return (
    <textarea
      className="w-full bg-[#F0F7FF] min-h-[190px] md:min-h-[432px] outline-none p-3 resize-none  font-normal text-sm md:text-[18px] leading-[26px]"
      placeholder="დაიწყე წერა..."
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
