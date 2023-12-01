import BannerSection from "@/components/modules/home/BannerSection";
import ProductListing from "@/components/modules/home/ProductListing";
import ProductCard from "@/components/modules/product/ProductCard";
import ProductPagination from "@/components/modules/product/ProductPagination";
import ProductService from "@/config/api/product.api";
import { IProductProps } from "@/utils/types";

interface IProductDataProps {
  products: IProductProps[];
  total: number;
}

interface ISearchParamsProps {
  searchParams: {
    limit: number;
    skip: number;
  };
}

export default async function Home({ searchParams }: ISearchParamsProps) {
  const limit = searchParams.limit ?? 9;
  const skip = searchParams.skip ?? 0;
  const { products, total }: IProductDataProps =
    await ProductService.getAllProducts(limit, skip);
  return (
    <>
      <BannerSection />
      {/* <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((items) => (
            <ProductCard key={items?.id} items={items} />
          ))}
        </div>
        <div className="flex justify-end">
          <ProductPagination total={total} />
        </div>
      </div> */}
      <ProductListing />
    </>
  );
}
