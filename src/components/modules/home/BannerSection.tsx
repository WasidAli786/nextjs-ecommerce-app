import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";

const BannerSection = () => {
  return (
    <>
      <div className="container min-h-[calc(100vh-70px)] w-full grid grid-cols-2 gap-5 items-center bg-[#7ac8e7]">
        <div className="space-y-4">
          <h1 className="text-6xl font-black text-white">Summer Sale!</h1>
          <h2 className="text-2xl text-white">
            Enjoy discounts on selected items
          </h2>
          <div>
            <Link href="/product">
              <ButtonUI size="lg" variant="shadow">
                Shop Now
              </ButtonUI>
            </Link>
          </div>
        </div>
        <div className="relative h-[500px]">
          <NextImage
            src="/images/bannerImage.png"
            alt="product-banner"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default BannerSection;
