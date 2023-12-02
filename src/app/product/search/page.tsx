import { type Metadata } from "next";
import ProductCard from "@/components/modules/product/ProductCard";
import ProductService from "@/config/api/product.api";
import { IProductProps } from "@/utils/types";
import EmptyData from "@/components/common/EmptyData";

interface IProductDataProps {
  products: IProductProps[];
}

interface ISearchParamsProps {
  searchParams: {
    title: string;
  };
}

async function getProductsBySearch(title: string) {
  const response = await ProductService.getProductBySearch(title);
  return response;
}

export async function generateMetadata({
  searchParams,
}: ISearchParamsProps): Promise<Metadata> {
  const title = searchParams.title ?? "";
  const { products }: IProductDataProps = await getProductsBySearch(title);
  return {
    title: products[0]?.title,
    description: products[0]?.description,
    openGraph: {
      title: products[0]?.title,
      description: products[0]?.description,
      images: products[0]?.thumbnail,
      type: "website",
    },
    twitter: {
      title: products[0]?.title,
      description: products[0]?.description,
      images: products[0]?.thumbnail,
    },
  };
}

export default async function ProductSearch({
  searchParams,
}: ISearchParamsProps) {
  const title = searchParams.title ?? "";
  const { products }: IProductDataProps = await getProductsBySearch(title);
  return (
    <>
      <div className="container py-10">
        {products.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products?.map((items) => (
              <ProductCard key={items?.id} items={items} />
            ))}
          </div>
        ) : (
          <EmptyData className="py-10" />
        )}
      </div>
    </>
  );
}
