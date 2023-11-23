import ProductCard from "@/components/modules/product/ProductCard";
import ProductCategories from "@/components/modules/product/ProductCategories";
import ProductService from "@/config/api/product.api";

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const categorySlug = params.slug[0] ?? "smartphones";
  // Initiate both requests in parallel
  const categoriesData = await ProductService.getAllCategories();
  const categoriesProductData = await ProductService.getCategoryProduct(
    categorySlug
  );

  // Wait for the promises to resolve
  const [categories, { products }] = await Promise.all([
    categoriesData,
    categoriesProductData,
  ]);

  return (
    <>
      <div className="container flex">
        <div className="fixed w-72 bg-white p-5">
          <h1 className="text-lg font-bold mb-3">Choose Categories</h1>
          <ProductCategories
            categories={categories}
            categorySlug={categorySlug}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-[calc(100vw-288px)] ml-72 p-10 pr-0">
          {products?.map((items) => (
            <ProductCard key={items?.id} items={items} />
          ))}
        </div>
      </div>
    </>
  );
}
