"use client"
import { cn } from "@/lib/utils";
import React, { ReactElement, ReactNode } from "react";

interface TabProps {
  label: string;
  value: string;
  children: ReactNode;
}

interface HTabProps {
  children: ReactElement<TabProps>[];
  defaultValue?: string;
  ui?: {
    content?: string;
  };
}

const HTab: React.FC<HTabProps> = ({ children, defaultValue, ui }) => {
  const [selectedTab, setSelectedTab] = React.useState<string>(
    defaultValue ?? children[0]?.props.value,
  );

  const handleClick = (value: string) => setSelectedTab(value);

  return (
    <div>
      <div className="flex -space-x-1">
        {React.Children.map(children, (child, i) => (
          <button
            key={child.props.value}
            onClick={() => handleClick(child.props.value)}
            className={`rounded-tr-md py-3.5 pl-4 pr-3.5 drop-shadow-[4px_0px_8px_#7070706B] ${selectedTab === child.props.value
                ? "bg-white text-tundora"
                : "bg-primary text-white"
              }`}
            style={{
              zIndex: children.length - i,
            }}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className={cn("relative z-10 bg-white p-12", ui?.content)}>
        {children
          .filter((child) => child.props.value === selectedTab)
          .map((child) => child.props.children)}
      </div>
    </div>
  );
};

const HTabItem: React.FC<TabProps> = ({ children }) => <>{children}</>;

export { HTab, HTabItem };
