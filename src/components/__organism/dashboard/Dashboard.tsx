import { useState } from "react";
import Nav from "../nav/Nav";
import Form from "../form/Form";
import type { IDiffResult } from "../../../interfaces/interface";

const Dashboard = () => {
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [diffText1, setDiffText1] = useState<IDiffResult[]>([]);
  const [diffText2, setDiffText2] = useState<IDiffResult[]>([]);
  const [showDiff, setShowDiff] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ text1?: string; text2?: string }>({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [progress, setProgress] = useState(0);

  const compareTexts = (text1: string, text2: string) => {
    const result1: IDiffResult[] = [];
    const result2: IDiffResult[] = [];

    const splitText = (text: string) => {
      return text
        .split(/(\s+|[.,!?;:()[\]{}""''—–-])/)
        .filter((txt) => txt.length > 0);
    };

    const splitResult1 = splitText(text1);
    const splitResult2 = splitText(text2);
    const length1 = splitResult1.length;
    const length2 = splitResult2.length;

    const dp: number[][] = Array(length1 + 1)
      .fill(null)
      .map(() => Array(length2 + 1).fill(0));

    for (let i = 1; i <= length1; i++) {
      for (let j = 1; j <= length2; j++) {
        if (splitResult1[i - 1] === splitResult2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    let i = length1,
      j = length2;

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && splitResult1[i - 1] === splitResult2[j - 1]) {
        const word = splitResult1[i - 1];
        result1.unshift({ type: "equal", value: word, format: "" });
        result2.unshift({ type: "equal", value: word, format: "" });
        i--;
        j--;
      } else if (i > 0 && (j === 0 || dp[i - 1][j] >= dp[i][j - 1])) {
        const word = splitResult1[i - 1];
        result1.unshift({ type: "delete", value: word, format: "red" });
        i--;
      } else {
        const word = splitResult2[j - 1];
        result2.unshift({ type: "insert", value: word, format: "green" });
        j--;
      }
    }

    const maxLength = Math.max(result1.length, result2.length);
    while (result1.length < maxLength) {
      result1.push({ type: "equal", value: "", format: "" });
    }
    while (result2.length < maxLength) {
      result2.push({ type: "equal", value: "", format: "" });
    }
    setDiffText1(result1);
    setDiffText2(result2);
    setShowDiff(true);
  };

  const handleSubmit = async () => {
    const newErrors: { text1?: string; text2?: string } = {};
    if (!text1.trim()) {
      newErrors.text1 = "გთხოვთ შეიყვანოთ პირველი ტექსტი";
    }
    if (!text2.trim()) {
      newErrors.text2 = "გთხოვთ შეიყვანოთ მეორე ტექსტი";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setShowOverlay(true);
    setProgress(0);

    let fakeProgress = 0;
    const interval = setInterval(() => {
      fakeProgress += Math.random() * 10;
      setProgress(Math.min(fakeProgress, 95));
    }, 200);

    await new Promise((resolve) => setTimeout(resolve, 700));
    compareTexts(text1, text2);
    clearInterval(interval);
    setProgress(100);

    setTimeout(() => {
      setShowOverlay(false);
      setProgress(0);
      setIsSubmitting(false);
    }, 500);
  };

  const reset = () => {
    setText1("");
    setText2("");
    setDiffText1([]);
    setDiffText2([]);
    setShowDiff(false);
    setIsSubmitting(false);
  };
  return (
    <section className="lg:flex-1 h-full min-h-screen">
      <div className="px-4 pt-6 pb-0 md:px-[28px] md:pt-6 md:pb-[22px] lg:pt-6 lg:pr-6 lg:pl-10 flex flex-col">
        <Nav
          onReset={reset}
          text1={text1}
          text2={text2}
          diffText1={diffText1}
          diffText2={diffText2}
        />
        <Form
          text1={text1}
          setText1={setText1}
          text2={text2}
          setText2={setText2}
          diffText1={diffText1}
          diffText2={diffText2}
          showDiff={showDiff}
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          errors={errors}
          showOverlay={showOverlay}
          progress={progress}
        />
      </div>
    </section>
  );
};

export default Dashboard;
