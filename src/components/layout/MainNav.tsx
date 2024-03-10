import BrandIcon from "./BrandIcon";

import { cn } from "@/lib/utils";
const Links = [
  { href: "/blogs", label: "blogs" },
  { href: "/showcase", label: "showcase" },
  { href: "/contact", label: "contact" },
];
const MainNav = () => {
  const currentPath = window.location.pathname;
  const isActive = (href: string) => currentPath.includes(href);
  return (
    <nav className="flex items-center space-x-3 lg:space-x-6">
      <BrandIcon />
      {Links.map(({ href, label }) => (
        <a
          href={href}
          key={href}
          className={cn(
            "text-sm transition-colors hover:text-primary",
            isActive(href)
              ? "font-bold text-foreground underline"
              : "font-medium text-muted-foreground no-underline",
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default MainNav;
