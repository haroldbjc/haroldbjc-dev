import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Links = [
  { href: "/", label: "blog" },
  { href: "/contact", label: "contact" },
];

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Links.map(({ href, label }) => (
          <NavigationMenuItem
            key={`${href}${label}`}
            className={navigationMenuTriggerStyle()}
          >
            <NavigationMenuLink href={href}>{label}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator />
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
