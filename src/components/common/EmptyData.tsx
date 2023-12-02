import NextImage from "./NextImage";

const EmptyData = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`w-full flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center">
          <div className="relative h-60 w-60">
            <NextImage src="/images/emptyData.svg" alt="empty-data" />
          </div>
          <h2 className="text-2xl text-gray-500 text-center mt-5">
            No Data Found!
          </h2>
        </div>
      </div>
    </>
  );
};

export default EmptyData;
