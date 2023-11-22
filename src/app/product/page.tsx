import { type Metadata } from "next";
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

async function getAllProducts(limit: number, skip: number) {
  const response = await ProductService.getAllProducts(limit, skip);
  return response;
}

export async function generateMetadata({
  searchParams,
}: ISearchParamsProps): Promise<Metadata> {
  const limit = searchParams.limit ?? 12;
  const skip = searchParams.skip ?? 0;
  const { products }: IProductDataProps = await getAllProducts(limit, skip);
  return {
    title: products[0].title,
    description: products[0].description,
    openGraph: {
      images: products[0]?.thumbnail,
    },
  };
}

export default async function Product({ searchParams }: ISearchParamsProps) {
  const limit = searchParams.limit ?? 12;
  const skip = searchParams.skip ?? 0;
  const { products, total }: IProductDataProps = await getAllProducts(
    limit,
    skip
  );
  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((items) => (
            <ProductCard key={items?.id} items={items} />
          ))}
        </div>
        <ProductPagination total={total} />
      </div>
    </>
  );
}
