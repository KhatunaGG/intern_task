import {
  Check,
  Export,
  Microphone,
  TextCheck,
  Voice,
} from "../components/__atoms";
import type { IconComponentType, MenuItem } from "../interfaces/interface";

export const menus: MenuItem[] = [
  { title: "მართლმწერი", logo: "check" },
  { title: "ტექსტის შედარება", logo: "textCheck" },
  { title: "ხმა -> ტექსტი", logo: "microphone" },
  { title: "ტექსტი -> ხმა", logo: "voice" },
  { title: "PDF კონვერტაცია", logo: "export" },
];

export const iconMap: Record<string, IconComponentType> = {
  check: Check,
  textCheck: TextCheck,
  microphone: Microphone,
  voice: Voice,
  export: Export,
};

export const languages: string[] = ["ქართული", "ინგლისური"]
