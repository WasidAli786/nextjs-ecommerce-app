import Navbar from "@/components/modules/product/Navbar";
import { IChildProps } from "@/utils/types";

const ProductLayout = ({ children }: IChildProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)] mt-20 bg-[#f7f7f7]">
        {children}
      </div>
    </>
  );
};

export default ProductLayout;
