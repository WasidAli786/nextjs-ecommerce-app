"use client";

import React, { useState } from "react";
import NextImage from "@/components/common/NextImage";
import { IProductProps } from "@/utils/types";

const ProductDetailGallery = ({
  productDetail,
}: {
  productDetail: IProductProps;
}) => {
  const [imageSrc, setImageSrc] = useState("");

  const handleImageChange = (imgSrc: string) => {
    setImageSrc(imgSrc);
  };

  return (
    <>
      <div className="flex gap-5">
        <div className="space-y-2">
          {productDetail.images?.slice(0, 4).map((items, index) => (
            <div
              className={`relative h-20 w-20 cursor-pointer border ${
                imageSrc === items ? "border-primary" : ""
              }`}
              key={index}
              onClick={() => handleImageChange(items)}
            >
              <NextImage
                src={items}
                alt={productDetail?.title}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="relative h-[345px] w-full border">
          <NextImage
            src={imageSrc ? imageSrc : productDetail?.thumbnail}
            alt={productDetail?.title}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailGallery;
