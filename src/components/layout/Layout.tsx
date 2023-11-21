import Navbar from "./Navbar";
import { IChildProps } from "@/utils/types";

const Layout = ({ children }: IChildProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-70px)] mt-[70px]">{children}</div>
    </>
  );
};

export default Layout;
