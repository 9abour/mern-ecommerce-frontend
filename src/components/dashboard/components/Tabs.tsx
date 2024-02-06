"use client";

import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Tabs = () => {
  const currentPathname = usePathname();
  const isCategory = currentPathname.includes("category");

  const { push } = useRouter();

  return (
    <div
      className={`w-full max-w-[600px] mx-auto flex items-center justify-center gap-4 ${isCategory ? "[&>*:first-child]:bg-primary" : "[&>*:last-child]:bg-primary"} `}
    >
      <button
        className="dashboard-taps-button"
        onClick={() => push("/dashboard/category")}
      >
        <BiSolidCategoryAlt size={20} />
        Category
      </button>

      <button
        className="dashboard-taps-button"
        onClick={() => push("/dashboard/product")}
      >
        <FaBoxOpen size={20} />
        Product
      </button>
    </div>
  );
};

export default Tabs;
