"use client";

import { Spinner } from "@nextui-org/spinner";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LoadMoreProduct = () => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      console.log("in view");
    }
  }, [inView]);
  return (
    <>
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
};

export default LoadMoreProduct;
