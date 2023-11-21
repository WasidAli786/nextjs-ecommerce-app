import ButtonUI from "@/components/common/ButtonUI";
import NextImage from "@/components/common/NextImage";

const BannerSection = () => {
  return (
    <>
      <div className="container min-h-[calc(100vh-70px)] w-full grid grid-cols-2 items-center bg-[#7ac8e7]">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary">50% Off</h3>
          <h1 className="text-6xl font-black text-white">Summer Sale!</h1>
          <h2 className="text-2xl text-white">
            Enjoy discounts on selected items
          </h2>
          <ButtonUI size="lg" variant="shadow">
            Shop Now
          </ButtonUI>
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
