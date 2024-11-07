"use client"
import React, { useEffect, useRef, forwardRef } from "react";
import {
  CountrySelector,
  usePhoneInput,
  ParsedCountry,
  CountryIso2,
} from "react-international-phone";
import HInput from "./HInput";
import "react-international-phone/style.css";
import { FieldError } from "react-hook-form";

interface HPhoneNumberInputProps {
  label: string;
  value: string;
  error?: FieldError | undefined;

  onChange: (phone: string) => void;
}

const HPhoneNumberInput = forwardRef<HTMLInputElement, HPhoneNumberInputProps>(
  ({ label, value, onChange, error }, ref) => {
    const phoneInput = usePhoneInput({
      defaultCountry: "us",
      value,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (phoneInput.inputRef && inputRef.current) {
        phoneInput.inputRef.current = inputRef.current;
      }
    }, [inputRef, phoneInput.inputRef]);
    return (
      <HInput
        label={label}
        error={error}
        value={phoneInput.phone}
        ref={ref}
        onChange={phoneInput.handlePhoneValueChange}
      >
        <HInput.Prepend>
          <div className="flex h-full items-center">
            <CountrySelector
              className="h-full"
              selectedCountry={phoneInput.country.iso2}
              onSelect={(country: ParsedCountry) => {
                phoneInput.setCountry(country.iso2 as CountryIso2);
              }}
              renderButtonWrapper={({ children, rootProps }) => (
                <button
                  {...rootProps}
                  className="*: flex h-full items-center rounded-sm border border-[#707070]/[0.42] border-gray-300 bg-white p-2"
                  style={{ zIndex: 1 }}
                >
                  {children}
                </button>
              )}
              dropdownStyleProps={{
                style: {
                  top: "35px",
                },
              }}
            />
          </div>
        </HInput.Prepend>
      </HInput>
    );
  },
);

HPhoneNumberInput.displayName = "HPhoneNumberInput";

export default HPhoneNumberInput;
