import React from "react";
import { Footer } from "./Footer";
import { HeaderMenu, HeaderSearchProps } from "./HeaderMenu";

type Props = {
  children: React.ReactNode;
  links: HeaderSearchProps["links"];
};

export function Chrome({ children, links }: Props) {
  return (
    <>
      <HeaderMenu links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
