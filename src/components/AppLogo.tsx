import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center gap-1.5`}>
      <Link href="/">
        <Image src="/images/logo.png" alt="logo image" height={88} width={88} />
      </Link>
      <Link href="/" className="text-xl font-bold text-primary">
        MyHomeSpec
      </Link>
    </div>
  );
};

export default AppLogo;
