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
import { useParams, useRouter } from "next/navigation";
import SelectUI from "../common/SelectUI";

const Navbar = () => {
  const { register } = useForm();
  const router = useRouter();
  const params = useParams();
  const { user } = useStore();
  const { removeStorageItem } = useLocalStorage();

  const selectedCategory = params?.slug && params.slug[0];

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: (): Promise<ICategoryProps> => ProductService.getAllCategories(),
    select: (data) =>
      data?.map((items) => {
        return {
          label: items,
          value: items,
        };
      }),
  });

  //* handle logout functionality
  const handleLogout = () => {
    cookieUtils.removeCookie("token");
    removeStorageItem("user");
    router.push("/login");
  };

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/product/category/${e.target.value}`);
  };
  return (
    <>
      <nav className="w-full fixed top-0 shadow bg-white z-50">
        <div className="container h-[70px] flex items-center justify-between">
          <Link href="/">
            <h1 className="text-4xl font-black">
              Pick<span className="text-primary">Bazaar</span>
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-44">
              <SelectUI
                options={data}
                selectedKey={selectedCategory}
                onChange={handleCategory}
              />
            </div>
            <div className="w-[400px]">
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
                      size="sm"
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
                <ButtonUI size="lg">Sign in</ButtonUI>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
