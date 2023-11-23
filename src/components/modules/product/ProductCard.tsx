import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";
import { slugify } from "@/utils/slugify";
import { IProductProps } from "@/utils/types";
import { Card, CardFooter, CardBody, Chip } from "@nextui-org/react";
import Link from "next/link";

const ProductCard = ({ items }: { items: IProductProps }) => {
  return (
    <>
      <Card>
        <CardBody className="relative h-80 w-full">
          <NextImage
            src={items?.thumbnail}
            alt={items?.title}
            className="object-cover rounded-tr-xl rounded-tl-xl"
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start space-y-3">
          <div className="flex items-center justify-between w-full">
            <Chip color="primary">{items?.category}</Chip>
            <h3>Price: ${items?.price}</h3>
          </div>
          <Link href={`/product/${items?.title}/${items?.id}`}>
            <h4 className="font-bold text-large">{items?.title}</h4>
          </Link>
          <ButtonUI fullWidth>Add to cart</ButtonUI>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
