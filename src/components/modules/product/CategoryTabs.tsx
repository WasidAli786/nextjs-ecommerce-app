"use client";

import { ICategoryProps } from "@/utils/types";
import { Tabs, Tab } from "@nextui-org/react";

const CategoryTabs = ({ categories }: ICategoryProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Tabs aria-label="Tabs sizes">
          {categories.map((items) => (
            <Tab key={items} title={items} />
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default CategoryTabs;
