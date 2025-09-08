import type { FC } from "react";

export type MenuItem = {
  title: string;
  logo: IconKey;
};

export type IconKey = "check" | "textCheck" | "microphone" | "voice" | "export";

export type IconComponentType = FC<IconProps>;

export interface IconProps {
  color: string;
}

export type ChevronDownPropsType = {
  open: boolean;
};

export type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type OptionType = {
  title: string;
  logo?: string;
};

export type CommonProps = {
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export type SelectPropsType =
  | ({ languages: OptionType[]; menus?: never } & CommonProps)
  | ({ menus: OptionType[]; languages?: never } & CommonProps);

export interface IDiffResult {
  type: "equal" | "delete" | "insert";
  value: string;
  format: "green" | "red" | "";
}

export type TextareaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  diffResults?: IDiffResult[];
  showDiff?: boolean;
};

export interface FormProps {
  text1: string;
  setText1: (value: string) => void;
  text2: string;
  setText2: (value: string) => void;
  diffText1: IDiffResult[];
  diffText2: IDiffResult[];
  showDiff: boolean;
  isSubmitting: boolean;
  handleSubmit: () => void;
  errors: { text1?: string; text2?: string };
  showOverlay: boolean;
  progress: number;
}

export type MenuPropsType = {
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};

export interface NavProps {
  onReset: () => void;
  text1: string;
  text2: string;
  diffText1: IDiffResult[];
  diffText2: IDiffResult[];
}

export interface OverlayProps {
  progress: number;
  showOverlay: boolean;
}

export interface ProgressProps {
  value: number;
}
