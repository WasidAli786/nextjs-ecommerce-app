import React from "react";

export interface IChildProps {
  children: React.ReactNode;
}

export interface IProductProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  price: number;
}

export interface ICategoryProps {
  categories: string[];
}
