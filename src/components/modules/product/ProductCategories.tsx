"use client";

import React from "react";
import { ICategoryProps } from "@/utils/types";
import { RadioGroup, Radio, ScrollShadow } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface ICategorySlugProps extends ICategoryProps {
  categorySlug: string;
}

const ProductCategories = ({
  categories,
  categorySlug,
}: ICategorySlugProps) => {
  const router = useRouter();
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryValue = e.target.value;
    router.push(categoryValue);
  };
  return (
    <>
      <ScrollShadow hideScrollBar className="h-[60vh]">
        <RadioGroup onChange={handleCategoryChange} defaultValue={categorySlug}>
          {categories.map((items) => (
            <Radio value={items} key={items}>
              {items}
            </Radio>
          ))}
        </RadioGroup>
      </ScrollShadow>
    </>
  );
};

export default ProductCategories;
