"use client"
import { cn } from "@/lib/utils";
import React, { forwardRef, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface HInputProps {
  label: string;
  size?: "small" | "medium" | "large";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  error?: FieldError | undefined;
  children?: React.ReactNode;
  ui?: { label?: string };
}

interface HInputSubComponentProps {
  children: ReactNode;
}

type HInputComponent = React.ForwardRefExoticComponent<
  HInputProps & React.RefAttributes<HTMLInputElement>
> & {
  Prepend: React.FC<HInputSubComponentProps>;
  Append: React.FC<HInputSubComponentProps>;
};

const HInput = forwardRef<HTMLInputElement, HInputProps>(
  (
    {
      label,
      size = "medium",
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      type = "text",
      className = "",
      error,
      children,
      ui,
    },
    ref,
  ) => {
    let inputClass = "";

    switch (size) {
      case "small":
        inputClass = "p-2 text-sm";
        break;
      case "large":
        inputClass = "p-4 text-lg";
        break;
      default:
        inputClass = "p-3 text-base";
    }

    const prependChildren = React.Children.toArray(children).filter(
      (child: any) => child.type === (HInput as HInputComponent).Prepend,
    );
    const appendChildren = React.Children.toArray(children).filter(
      (child: any) => child.type === (HInput as HInputComponent).Append,
    );

    return (
      <div className={className}>
        <label className={cn("mb-1.5 block text-[#515151]", ui?.label)}>
          {label}
        </label>
        <div
          className={cn(
            "flex items-center overflow-hidden rounded border border-[#707070]/[0.42] bg-white",

            error && "border-red-500",
          )}
        >
          {prependChildren.length > 0 && (
            <div className="h-12">{prependChildren}</div>
          )}
          <input
            type={type}
            ref={ref}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${inputClass} w-full rounded-none focus:outline-none`}
          />
          {appendChildren.length > 0 && (
            <div className="ml-2">{appendChildren}</div>
          )}
        </div>
        {error && <span className="text-sm text-red-500">{error.message}</span>}{" "}
        {/* Display error message, ensuring it accesses the message property */}
      </div>
    );
  },
) as HInputComponent;

const Prepend: React.FC<HInputSubComponentProps> = ({ children }) => {
  return <>{children}</>;
};

const Append: React.FC<HInputSubComponentProps> = ({ children }) => {
  return <>{children}</>;
};

// Assign the Prepend and Append sub-components
HInput.Prepend = Prepend;
HInput.Append = Append;

HInput.displayName = "HInput";
Prepend.displayName = "HInput.Prepend";
Append.displayName = "HInput.Append";

export default HInput;
