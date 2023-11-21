"use client";

import React from "react";
import ButtonUI from "../common/ButtonUI";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
} from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { ICategoryProps } from "@/utils/types";
import ProductService from "@/config/api/product.api";
import InputUI from "../common/InputUI";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/store/store";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import cookieUtils from "@/utils/cookieUtils";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { user } = useStore();
  const { removeStorageItem } = useLocalStorage();

  // const { data, isLoading, isFetching } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: (): Promise<ICategoryProps> => ProductService.getAllCategories(),
  // });

  //* handle logout functionality
  const handleLogout = () => {
    cookieUtils.removeCookie("token");
    removeStorageItem("user");
    router.push("/login");
  };
  return (
    <>
      <nav className="w-full fixed top-0 shadow bg-white z-50">
        <div className="container h-[70px] flex items-center justify-between">
          <h1 className="text-4xl font-black">
            Pick<span className="text-primary">Bazaar</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-80">
              <InputUI
                name="product"
                placeholder="Search product"
                size="sm"
                startContent={<Search />}
                register={register}
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            {user?.id ? (
              <>
                <Badge content={5} color="danger" shape="circle">
                  <ShoppingCart />
                </Badge>
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      src={user?.image}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">{user?.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      onClick={handleLogout}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <Link href="/login">
                <ButtonUI>Sign in</ButtonUI>
              </Link>
            )}
          </div>
          {/* <div className="hidden md:block">
            <ul className="list_items flex items-center space-x-6">
              {navData.map((items, index) => (
                <li key={index} className="text-lg">
                  {items?.title}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
