"use client"
import Link, { LinkProps } from "next/link";
import React from "react";
import type { UrlObject } from "url";
type Url = string | UrlObject;

type HBtnProps = {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  styleType?: "fill" | "outline" | "text";
  className?: string;
  size?: "medium" | "large";
  href?: Url;
  linkProps?: LinkProps | any;
  loading?: boolean;
  type?: string;
};

const HBtn: React.FC<HBtnProps> = ({
  children,
  label,
  onClick,
  disabled = false,
  variant = "primary",
  styleType = "fill",
  className = "",
  size = "medium",
  href,
  linkProps,
  loading = false,
  type = "button",
}) => {
  const baseStyle = "font-medium transition duration-300";

  const sizeStyles = {
    medium: "px-5 py-1.5 text-sm rounded",
    large: "px-11 py-4 text-lg rounded-[0.625rem]",
  };

  const variants = {
    primary: {
      fill: "bg-primary text-white drop-shadow-[0px_4px_8px_#7070706B]",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
      text: "text-blue-600 hover:text-blue-700 focus:ring-blue-500",
    },
    secondary: {
      fill: "bg-secondary text-white drop-shadow-[0px_4px_8px_#7070706B]",
      outline:
        "border border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
      text: "text-secondary",
    },
  };
  const variantClass = variants[variant][styleType];
  const sizeClass = sizeStyles[size];

  const disabledStyle = "opacity-50 cursor-not-allowed";

  const MyCustomBtn = href ? Link : "button";

  return (
    <MyCustomBtn
      href={href}
      type={type}
      {...linkProps}
      className={`${baseStyle} ${sizeClass} ${variantClass} ${disabled || loading ? disabledStyle : ""} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span>Loading...</span> : label || children}
    </MyCustomBtn>
  );
};

export default HBtn;
