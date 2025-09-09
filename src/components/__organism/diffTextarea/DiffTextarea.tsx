import type { DiffTextareaProps } from "../../../interfaces/interface";

const DiffTextarea = ({
  value,
  onChange,
  diffResults,
  showDiff,
  setShowDiff,
}: DiffTextareaProps) => {
  const renderDiffContent = () => {
    if (!diffResults || !showDiff) return null;

    return diffResults
      .map((result, index) => {
        let style: React.CSSProperties = {};
        let displayValue = result.value;

        if (result.value === "") {
          return null;
        }

        if (result.format === "green") {
          style = { backgroundColor: "#A7F3D0", color: "#006400" };
        } else if (result.format === "red") {
          style = { backgroundColor: "#FECACA", color: "#B91C1C" };
        }

        return (
          <span key={`diff-${index}`} style={style}>
            {displayValue}
          </span>
        );
      })
      .filter(Boolean);
  };

  const handleInputChange = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const updatedValue = target.innerText;
    onChange({
      target: {
        value: updatedValue,
      },
    } as React.ChangeEvent<HTMLTextAreaElement>);
    setShowDiff(false);
  };

  return showDiff && diffResults ? (
    <div
      className="overflow-y-auto absolute top-0 left-0 right-0 z-10 w-full min-h-[190px] max-h-[190px] md:min-h-[432px] md:max-h-[432px] bg-[#F0F7FF] p-3 resize-none font-normal text-sm md:text-[18px] leading-[26px] whitespace-pre-wrap       "
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={handleInputChange}
    >
      {renderDiffContent()}
    </div>
  ) : (
    <div className="w-full min-h-[190px] md:min-h-[432px] bg-[#F0F7FF] p-3 resize-none font-normal text-sm md:text-[18px] leading-[26px] whitespace-pre-wrap">
      {value}
    </div>
  );
};

export default DiffTextarea;
