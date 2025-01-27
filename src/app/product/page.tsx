import Products from "@/components/Products";

const ProductsPage = async () => {
  try {
    // Fetch products
    const productsRes = await fetch(`${process.env.BACKEND_URL}/products`, {
      cache: "no-store",
    });
    const productsData = await productsRes.json();
    const products = productsData?.data || [];

    // Fetch categories
    const categoriesRes = await fetch(`${process.env.BACKEND_URL}/categories`, {
      cache: "no-store",
    });
    const categoriesData = await categoriesRes.json();
    const categories = categoriesData?.data || [];

    return (
      <div>
        <h1 className="text-3xl font-bold text-center my-6">
          Stay busy with Ease Product
        </h1>
        <Products products={products} categories={categories} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Failed to load products
        </h1>
      </div>
    );
  }
};

export default ProductsPage;
