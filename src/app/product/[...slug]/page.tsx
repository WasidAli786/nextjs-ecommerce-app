import { type Metadata } from "next";
import ButtonUI from "@/components/common/ButtonUI";
import ProductDetailGallery from "@/components/modules/product/ProductDetailGallery";
import ProductService from "@/config/api/product.api";
import { IProductProps } from "@/utils/types";
import { Chip } from "@nextui-org/react";
import { Star } from "lucide-react";

interface IParamsProps {
  params: {
    slug: string;
  };
}

async function getSingleProduct(id: string) {
  const response = await ProductService.getSingleProduct(id);
  return response;
}

export async function generateMetadata({
  params,
}: IParamsProps): Promise<Metadata> {
  const productID = params.slug[1];
  const productDetail: IProductProps = await getSingleProduct(productID);
  return {
    title: productDetail.title,
    description: productDetail.description,
    openGraph: {
      title: productDetail.title,
      description: productDetail.description,
      images: productDetail.thumbnail,
      type: "website",
    },
    twitter: {
      title: productDetail.title,
      description: productDetail.description,
      images: productDetail.thumbnail,
    },
  };
}

export default async function ProductDetail({ params }: IParamsProps) {
  const productID = params.slug[1];
  const productDetail: IProductProps = await getSingleProduct(productID);

  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProductDetailGallery productDetail={productDetail} />
          <div className="space-y-4">
            <h2 className="text-3xl font-black">{productDetail?.title}</h2>
            <div className="flex items-center gap-5">
              <h3 className="text-2xl text-primary font-bold">
                ${productDetail?.price}
              </h3>
              <h3 className="text-xl line-through">
                {productDetail?.discountPercentage}%
              </h3>
            </div>
            <Chip
              color="primary"
              variant="bordered"
              endContent={<Star size={18} />}
            >
              {productDetail?.rating}
            </Chip>
            {/* <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">Brand:</span>
                <Chip color="primary">{productDetail?.brand}</Chip>
              </div>
              <Chip
                color="primary"
                variant="bordered"
                endContent={<Star size={18} />}
              >
                {productDetail?.rating}
              </Chip>
            </div> */}
            <p className="text-gray-500">{productDetail?.description}</p>
            <ButtonUI size="lg">Add to cart</ButtonUI>
          </div>
        </div>
      </div>
    </>
  );
}
