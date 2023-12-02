import React from "react";

export interface IChildProps {
  children: React.ReactNode;
}

export interface IProductProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[];
  category: string;
  price: number;
  discountPercentage: number;
  rating?: string;
}

export interface ICategoryProps {
  data: string[];
}
