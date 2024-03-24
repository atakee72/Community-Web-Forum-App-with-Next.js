"use client";

// Import necessary types from Next.js and React
import Link from "next/link";
import React, { ReactNode, useState } from "react";

// Define the type for the children of the Tabs component
type TabChild = {
  props: {
    label: string;
    children: ReactNode;
  };
};

// Define the TabsProps type to annotate the Tabs component
type TabsProps = {
  children: ReactNode[]; // An array of ReactNode
};

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>((children[0] as TabChild).props.label);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className="tabs flex justify-start h-16 items-end bg-[#4995A5] mx-16 mt-7 mb-20">
        {children.map((child: ReactNode) => {
          const tabChild = child as TabChild;
          return (
            <Link
              key={tabChild.props.label}
              href={`/dashboard#${tabChild.props.label}`}
              scroll={false}
              className={`${
                activeTab === tabChild.props.label
                  ? "border-b-3 border-[#eccc6e] h-9"
                  : ""
              } tab tab-sm tab-lifted hover:bg-[#b4b0a6] bg-[#C9C4B9] p-2 mt-3 text-[#814256] pb-5 border-[#814256] m-1`}
              onClick={(e) => handleClick(e, tabChild.props.label)}
            >
              {tabChild.props.label}
            </Link>
          );
        })}
      </div>

      <div className="py-4 transition-all duration-500 ease-in-out">
        {children.map((child: ReactNode) => {
          const tabChild = child as TabChild;
          if (tabChild.props.label === activeTab) {
            return (
              <div key={tabChild.props.label}>{tabChild.props.children}</div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

type TabProps = {
  label: string;
  children: ReactNode;
};

const Tab = ({ label, children }: TabProps) => {
  return (
    <div className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };
