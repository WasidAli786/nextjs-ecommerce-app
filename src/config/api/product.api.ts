import {
  GET_ALL_CATEGORIES_ENDPOINT,
  GET_ALL_PRODUCTS_ENDPOINT,
  GET_CATEGORY_PRODUCT_ENDPOINT,
} from "../constant/endPoints";
import { get } from "../services/api.request";

const ProductService = {
  getAllProducts: (limit: number, skip: number) => {
    return get(`${GET_ALL_PRODUCTS_ENDPOINT}?limit=${limit}&skip=${skip}`);
  },
  getSingleProduct: (id: string) => {
    return get(`${GET_ALL_PRODUCTS_ENDPOINT}/${id}`);
  },
  getAllCategories: () => {
    return get(GET_ALL_CATEGORIES_ENDPOINT);
  },
  getCategoryProduct: (category: string) => {
    return get(`${GET_CATEGORY_PRODUCT_ENDPOINT}/${category}`);
  },
  getProductBySearch: (title: string) => {
    return get(`${GET_ALL_PRODUCTS_ENDPOINT}/search?q=${title}`);
  },
};
export default ProductService;
