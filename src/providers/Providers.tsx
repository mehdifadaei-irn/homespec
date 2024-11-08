import React from "react";

import { PropsWithChildren } from "react";
import QueryClientProvider from "./QueryClientProvider";
import NextAuthProvider from "./NextAuthProvider";

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <NextAuthProvider>
      <QueryClientProvider>{children}</QueryClientProvider>;
    </NextAuthProvider>
  );
};

export default Providers;
