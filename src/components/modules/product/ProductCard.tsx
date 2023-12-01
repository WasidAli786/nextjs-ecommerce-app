import NextImage from "@/components/common/NextImage";
import { slugify } from "@/utils/slugify";
import { IProductProps } from "@/utils/types";
import { Card, CardFooter, CardBody, Chip } from "@nextui-org/react";
import Link from "next/link";

const ProductCard = ({ items }: { items: IProductProps }) => {
  return (
    <>
      <Card>
        <div>
          <div className="relative h-60 w-full">
            <NextImage
              src={items?.thumbnail}
              alt={items?.title}
              className="object-cover rounded-tr-xl rounded-tl-xl"
            />
          </div>
        </div>
        <CardFooter className="flex flex-col items-start space-y-1">
          <Link href={`/product/${items?.title}/${items?.id}`}>
            <h4 className="font-bold">{items?.title}</h4>
          </Link>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm text-gray-500">${items?.price}</h3>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
