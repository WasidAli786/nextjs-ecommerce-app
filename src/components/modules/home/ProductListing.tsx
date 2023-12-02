"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IProductProps } from "@/utils/types";
import ProductService from "@/config/api/product.api";
import ProductCard from "../product/ProductCard";
import ButtonUI from "@/components/common/ButtonUI";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@nextui-org/react";

interface IProductDataProps {
  products: IProductProps[];
  total: number;
}

const ProductListing = () => {
  const { ref, inView } = useInView();
  const limit = 9;
  const skip = 10;

  async function getAllProducts({ pageParam }: { pageParam: number }) {
    const response = await ProductService.getAllProducts(limit, pageParam);
    return response;
  }

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: getAllProducts,
      initialPageParam: 10,
      getNextPageParam: (lastPage, allPages) => {
        console.log("lastPage, allPages", { lastPage, allPages });
        // this function is responsible for updating the initialPageParam value
        const nextPage =
          lastPage.skip !== allPages[0]?.total
            ? lastPage.skip + skip
            : undefined; // check if the quantity of the products is available if available then add the (10 plus to send in the api payload) if not then return undefined for button disabled etc.
        return nextPage;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.pages.map((item) =>
            item?.products?.map((items: any) => (
              <ProductCard key={items?.id} items={items} />
            ))
          )}
        </div>
        <div ref={ref} className="flex justify-center mt-5">
          <Spinner />
        </div>
        {/* <ButtonUI
          disabled={!hasNextPage}
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {hasNextPage ? "Load More" : "End Limit"}
        </ButtonUI> */}
      </div>
    </>
  );
};

export default ProductListing;
