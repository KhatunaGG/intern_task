import type { FormProps } from "../../../interfaces/interface";
import { Arrow, Spin } from "../../__atoms";
import { Textarea } from "../../__molecules";
import DiffTextarea from "../diffTextarea/DiffTextarea";
import Overlay from "../overlay/Overlay";

const Form = ({
  text1,
  setText1,
  text2,
  setText2,
  diffText1,
  diffText2,
  showDiff,
  isSubmitting,
  handleSubmit,
  errors,
  showOverlay,
  progress,
  setShowDiff,
}: FormProps) => {
  const isActiveSubmit = diffText1.length > 0 && diffText2.length > 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="w-full flex flex-col gap-8           "
    >
      <div className="w-full flex flex-col md:flex-row items-center pt-6 gap-4 md:gap-[10px] relative">
        <div className="w-full bg-[#F0F7FF] min-h-[190px] md:min-h-[432px] relative">
          {showDiff ? (
            <DiffTextarea
              value={text1}
              onChange={(e) => {
                setText1(e.target.value);
                setShowDiff(false);
              }}
              diffResults={diffText1}
              showDiff={showDiff}
              setShowDiff={setShowDiff}
            />
          ) : (
            <>
              <Textarea
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
              {errors.text1 && (
                <span className="absolute -bottom-4 left-0 text-xs font-normal text-red-600">
                  {errors.text1}
                </span>
              )}
            </>
          )}
        </div>
        <div className="w-full md:w-8 md:h-8 flex items-center justify-center">
          <Arrow />
        </div>
        <div className="w-full bg-[#F0F7FF] min-h-[190px] md:min-h-[432px] relative">
          {showDiff ? (
            <DiffTextarea
              value={text2}
              onChange={(e) => {
                setText2(e.target.value);
                setShowDiff(false);
              }}
              diffResults={diffText2}
              showDiff={showDiff}
              setShowDiff={setShowDiff}
            />
          ) : (
            <>
              <Textarea
                value={text2}
                onChange={(e) => setText2(e.target.value)}
              />
              {errors.text2 && (
                <span className="absolute -bottom-4 left-0 text-xs font-normal text-red-600">
                  {errors.text2}
                </span>
              )}
            </>
          )}
        </div>
        <Overlay showOverlay={showOverlay} progress={progress} />
      </div>
      <div className="w-full flex items-center justify-center lg:pb-[58px]">
        <button
          type="submit"
          className={`py-[10px] px-[37px] text-white rounded-[6px] font-normal text-sm leading-[28px] 
            ${
              isSubmitting || isActiveSubmit ? "bg-[#4571E4]" : "bg-[#383A4899]"
            } 
            hover:bg-[#484b5c99] transition-colors duration-300 ease-in-out flex items-center justify-center gap-1`}
        >
          <div
            className={`transform ${
              isSubmitting || isActiveSubmit ? "rotate-360" : ""
            } transition-transform duration-300`}
          >
            {isActiveSubmit && <Spin />}
          </div>
          <span className="text-sm font-normal leading-[28px]">შედარება</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
