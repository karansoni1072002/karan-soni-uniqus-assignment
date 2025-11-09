import { ImgHTMLAttributes } from "react";
import BrandLogo from "./brand-logo.png";
import Image, { ImageProps } from "next/image";
import AccountSettings from "./AccountSettings.jpg";
import MacbookPro from "./Macbook.jpg";
import {
  X,
  Briefcase,
  Coins,
  Calendar,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Calendar1,
  Gauge,
  BookCheck,
  Layers2,
  UserLock,
  MessagesSquare,
  Box,
  NotebookText,
  Files,
  CircleCheck,
  Folder,
  CircleQuestionMark,
  Menu,
} from "lucide-react";

export const Assets: Record<any, any> = {
  BrandLogo: (props: Omit<ImageProps, "src" | "alt"> & { alt?: string }) => (
    <Image src={BrandLogo} alt="Brand Logo" {...props} />
  ),
  CrossIcon: X,
  Briefcase,
  Coins,
  Calendar,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Calendar1,
  Gauge,
  BookCheck,
  Layers2,
  UserLock,
  MessagesSquare,
  Box,
  NotebookText,
  Files,
  CircleCheck,
  Folder,
  CircleQuestionMark,
  AccountSettings: (
    props: Omit<ImageProps, "src" | "alt"> & { alt?: string }
  ) => <Image src={AccountSettings} alt="Account Settings" {...props} />,
  MacbookPro: (props: Omit<ImageProps, "src" | "alt"> & { alt?: string }) => (
    <Image src={MacbookPro} alt="Macbook Pro" {...props} />
  ),
  Menu,
};
