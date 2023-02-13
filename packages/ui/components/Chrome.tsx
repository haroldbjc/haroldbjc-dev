import React from "react";
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
    </>
  );
}
