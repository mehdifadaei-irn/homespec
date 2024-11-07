import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkedinIcon from "@/assets/icons/social/linkedin.svg";
import XIcon from "@/assets/icons/social/x.svg";
import FacebookIcon from "@/assets/icons/social/facebook.svg";

const TheFooter = () => {
  return (
    <footer className="container">
      <div className="mx-auto flex items-center justify-center gap-x-24 py-[70px]">
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <Link href="/shop" className="text-xl font-medium text-black/85">
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/find-contractor"
                className="text-xl font-medium text-black/85"
              >
                Find Contractor
              </Link>
            </li>
            <li>
              <Link href="/tips" className="text-xl font-medium text-black/85">
                Tips
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo image"
            height={132}
            width={132}
          />
        </Link>
        <div className="gap-x-4.5 flex items-center">
          <Link
            href="/contact-us"
            className="text-xl font-medium text-black/85"
          >
            Contact Us
          </Link>
          <ul className="flex items-center gap-x-3">
            <li>
              <Image src={LinkedinIcon} alt="linkedin" width={25} height={25} className="text-primary" />
            </li>
            <li>
              <Image src={XIcon} alt="XIcon" width={25} height={25} className="text-primary" />
            </li>
            <li>
              <Image src={FacebookIcon} alt="FacebookIcon" width={25} height={25} className="text-primary" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
