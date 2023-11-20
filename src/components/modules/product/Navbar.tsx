import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full border-b bg-white z-50 fixed top-0">
        <div className="container h-20 flex items-center justify-between transition-all">
          <Link href="/">
            <h1 className="text-3xl font-black">PickBazaar.</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
