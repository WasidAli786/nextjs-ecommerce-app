import Column from "@/components/modules/zustand/Column";
import React from "react";

const Zustand = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-5 py-10">
        <Column status="PLANNED" />
        <Column status="ONGOING" />
        <Column status="DONE" />
      </div>
    </>
  );
};

export default Zustand;
