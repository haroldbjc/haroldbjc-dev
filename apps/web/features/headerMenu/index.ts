import { HeaderSearchProps } from "ui";

export const links: HeaderSearchProps["links"] = [
  { link: "/", label: "Home" },
  { link: "/blog", label: "Blog" },
  {
    link: "/about",
    label: "About",
    links: [
      { link: "/about/faq", label: "FAQ" },
      { link: "/about/privacy", label: "Privacy" },
      { link: "/about/terms", label: "Terms" },
    ],
  },
  { link: "/contact", label: "Contact" },
];
