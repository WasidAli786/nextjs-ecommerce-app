import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";
import ProductService from "@/config/api/product.api";
import { Chip } from "@nextui-org/react";
import { Star } from "lucide-react";

async function getSingleProduct(id: string) {
  const response = await ProductService.getSingleProduct(id);
  return response;
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const productID = params.slug[1];
  const productDetail = await getSingleProduct(productID);

  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative h-[50vh] md:h-[70vh]">
            <NextImage
              src={productDetail?.thumbnail}
              alt={productDetail?.title}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-black">{productDetail?.title}</h1>
            <div className="flex items-center justify-between">
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
            </div>
            <p className="text-gray-500">{productDetail?.description}</p>
            <div>
              <span className="text-3xl font-semibold">Price:</span>
              &nbsp;
              <span className="text-4xl font-semibold text-gray-500">
                ${productDetail?.price}
              </span>
            </div>
            <ButtonUI size="lg">Add to cart</ButtonUI>
          </div>
        </div>
      </div>
    </>
  );
}
