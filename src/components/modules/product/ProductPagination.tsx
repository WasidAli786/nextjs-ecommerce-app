"use client";

import React from "react";
import PaginationUI from "@/components/common/PaginationUI";
import { searchQuery } from "@/utils/searchQuery";
import { useRouter } from "next/navigation";

interface IPaginationProps {
  total: number;
}

const ProductPagination = ({ total }: IPaginationProps) => {
  const router = useRouter();
  const query = searchQuery();

  const handleProductPagination = (page: any) => {
    const skip = page * 10;
    const limit = 10;
    if (page === 1) {
      query.delete("skip");
      query.delete("limit");
    } else if (query.has("skip")) {
      query.set("skip", skip.toString());
      query.set("limit", limit.toString());
    } else {
      query.append("skip", skip.toString());
      query.append("limit", limit.toString());
    }
    const newPathname = `product?${query}`;
    router.push(newPathname);
  };
  return (
    <>
      <div className="mt-5">
        <PaginationUI total={total} onChange={handleProductPagination} />
      </div>
    </>
  );
};

export default ProductPagination;
