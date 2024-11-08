"use client";

import { useSession } from "next-auth/react";
import React from "react";

interface AuthWrapperProps {
  AuthComponent: React.FC;
  UnauthComponent: React.FC;
  LoadingComponent?: React.FC;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  AuthComponent,
  UnauthComponent,
  LoadingComponent,
}) => {
  const { data: session, status } = useSession();

  if (status === "loading" && LoadingComponent) {
    return <LoadingComponent />;
  }

  if (session) {
    return <AuthComponent />;
  }

  return <UnauthComponent />;
};

export default AuthWrapper;
