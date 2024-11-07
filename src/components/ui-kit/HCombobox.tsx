import * as React from "react";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { Controller } from "react-hook-form";
import debounce from "lodash.debounce";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface OptionType {
  value: number;
  label: string;
}

interface HComboboxProps<T extends OptionType> {
  label: string;
  name: string;
  options: T[];
  placeholder?: string;
  control?: any;
  rules?: any;
  onSearch?: (query: string) => void;
  onChange?: (value: T) => void;
  loading?: boolean;
  disabled?: boolean;
  ui?: { label?: string };
}

export function HCombobox<T extends OptionType>({
  label,
  name,
  options,
  placeholder = "Select an option...",
  control,
  rules = {},
  onSearch,
  onChange,
  loading = false,
  disabled = false,
  ui,
}: HComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const debouncedSearch = React.useCallback(
    debounce((value: string) => {
      if (onSearch) {
        onSearch(value);
      }
    }, 300),
    [onSearch],
  );

  const handleInputChange = (value: string) => {
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <Popover open={open && !disabled} onOpenChange={setOpen}>
            <div>
              <label className={cn("mb-1.5 block text-[#515151]", ui?.label)}>
                {label}
              </label>
              <PopoverTrigger asChild disabled={disabled}>
                <div
                  className={cn(
                    "flex h-12 items-center justify-between rounded border border-[#7070706B] bg-white px-4.5",
                    error && "border-red-500",
                    disabled && "cursor-not-allowed bg-gray-200",
                  )}
                >
                  {field.value
                    ? options.find((option) => option.value === field.value)
                        ?.label
                    : placeholder}

                  <ChevronDownIcon
                    fontSize={16}
                    color="#464646"
                    className="justify-end"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                  <CommandInput
                    placeholder={`Search...`}
                    value={query}
                    onValueChange={handleInputChange}
                    className="h-9"
                    disabled={disabled}
                  />
                  <CommandList>
                    {loading ? (
                      <div className="p-2 text-center">Loading...</div>
                    ) : (
                      <>
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup>
                          {options.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.label}
                              onSelect={(currentValue) => {
                                if (!disabled) {
                                  const selectedValue = options.find(
                                    (option) => option.label === currentValue,
                                  );

                                  field.onChange(
                                    selectedValue.value === field.value
                                      ? ""
                                      : selectedValue.value,
                                  );

                                  setOpen(false);
                                  if (onChange) {
                                    onChange(selectedValue);
                                  }
                                }
                              }}
                            >
                              {option.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  field.value === option.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
              {error && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
              )}
            </div>
          </Popover>
        </>
      )}
    />
  );
}
