import React from "react";

import { PropsWithChildren } from "react";
import QueryClientProvider from "./QueryClientProvider";

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

export default Providers;
