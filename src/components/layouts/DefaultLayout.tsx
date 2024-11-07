import TheFooter from "@/components/templates/TheFooter";
import TheHeader from "@/components/templates/TheHeader";
import React, { ReactNode } from "react";

interface LayoutConfig {
  noHeader?: boolean;
  noFooter?: boolean;
  noNav?: boolean;
  noAuthBtns?: boolean;
}

interface LayoutProps {
  children: ReactNode;
  config?: LayoutConfig;
}

const DefaultLayout = ({ children, config }: LayoutProps) => {
  return (
    <>
      {!config?.noHeader && <TheHeader />}
      <main>{children}</main>
      {!config?.noFooter && <TheFooter />}
    </>
  );
};

export default DefaultLayout;
