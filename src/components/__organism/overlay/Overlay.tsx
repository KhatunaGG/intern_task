import type { OverlayProps } from "../../../interfaces/interface";
import { Dot } from "../../__atoms";
import Progress from "../progress/Progress";

const Overlay = ({ progress, showOverlay }: OverlayProps) => {
  if (!showOverlay) return null;

  return (
    <div className="absolute w-full inset-0 z-20 flex items-center justify-center bg-white">
      <div className="w-full md:w-[39.32%] lg:w-[24.64%] border border-[#E1E1E1] rounded-lg p-4 flex items-center justify-center gap-2 ">
        <Dot />
        <div className="flex flex-col gap-[5px]">
          <h2 className="font-normal text-[10px] leading-[16px] text-[#383A4899]">
            Converting... Thank you for your patience
          </h2>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold leading-[24px] text-[#383A48]">
              {Math.round(progress)}%
            </h2>
            <Progress value={progress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
