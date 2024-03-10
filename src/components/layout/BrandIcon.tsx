import { ShellIcon } from "lucide-react";

export default function BrandIcon() {
  return (
    <a
      href="/"
      className="font-italic mr-2 flex h-full flex-row items-center text-sm font-bold"
    >
      <ShellIcon />
      <span className="ml-1 hidden lg:block">harold</span>
    </a>
  );
}
