import { cn } from "@/lib/utils";
import BrandIcon from "./BrandIcon";
const Links = [
  { href: "/blogs", label: "blogs" },
  { href: "/contact", label: "contact" },
];
const MainNav = () => {
  const currentPath = window.location.pathname;
  const isActive = (href: string) => currentPath === href;
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <BrandIcon />
      {Links.map(({ href, label }) => (
        <a
          href={href}
          key={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive(href) ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default MainNav;
