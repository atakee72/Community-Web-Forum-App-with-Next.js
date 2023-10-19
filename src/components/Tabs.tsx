"use client";

import Link from "next/link";
import React, { useState } from "react";
import { collectionTabs } from "@/lib/foraTabsData";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className="tabs flex justify-start  items-center bg-[#4995A5] mx-16 mt-7 mb-20 ">
        {children.map((child) => (
          <Link
            key={child.props.label}
            href={`/dashboard#${child.props.label}`}
            scroll={false}
            className={`${
              activeTab === child.props.label
                ? "border-b-4 border-[#eccc6e]"
                : ""
            } tab tab-sm tab-lifted hover:bg-[#b4b0a6] bg-[#C9C4B9] p-2 mt-3 text-[#814256] pb-5 border-[#814256] m-1 transition-all duration-500 ease-in-out`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </Link>
        ))}
      </div>

      <div className="py-4 transition-all duration-500 ease-in-out">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </>
  );
};
const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
