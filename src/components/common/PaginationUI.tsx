import { Pagination } from "@nextui-org/pagination";
import { type PaginationProps } from "@nextui-org/react";

const PaginationUI = ({ total, onChange, className }: PaginationProps) => {
  return (
    <>
      <Pagination
        total={total}
        initialPage={1}
        showControls
        className={className}
        onChange={onChange}
      />
    </>
  );
};

export default PaginationUI;
