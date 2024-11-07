import Link from "next/link";
import React from "react";
import HBtn from "@/components/ui-kit/HBtn";
import AppLogo from "../AppLogo";
import { signOut } from "next-auth/react";
import AuthWrapper from "@/features/auth/components/AuthWrapper";

const NavLinks = [
  {
    path: "/shop",
    name: "Shop",
  },
  {
    path: "/find-contractor",
    name: "Find Contractor",
  },
  {
    path: "/tips",
    name: "Tips",
  },
  {
    path: "/about-us",
    name: "About us",
  },
  {
    path: "/contact-us",
    name: "Contact us",
  },
];

const TheHeader = () => {
  return (
    <header>
      <nav className="container flex w-full items-center justify-between py-1.5">
        <AppLogo className="-ml-4" />
        <ul className="flex items-center gap-5">
          {NavLinks.map((nav) => (
            <Link href={nav.path} key={nav.path}>
              <li className="font-medium">{nav.name}</li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-x-2">
          <AuthWrapper
            AuthComponent={() => (
              <HBtn
                label="Logout"
                variant="secondary"
                styleType="text"
                size="medium"
                onClick={() => signOut({ callbackUrl: "/" })}
              />
            )}
            UnauthComponent={() => (
              <>
                <HBtn
                  label="Login"
                  variant="secondary"
                  styleType="text"
                  size="medium"
                  href="/login"
                />
                <HBtn
                  label="Sign Up"
                  variant="secondary"
                  styleType="fill"
                  size="medium"
                  href="/register"
                />
              </>
            )}
            LoadingComponent={() => <>loading...</>}
          ></AuthWrapper>
        </div>
      </nav>
    </header>
  );
};

export default TheHeader;
