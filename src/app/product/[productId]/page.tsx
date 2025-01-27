import ProductDetailsCard from "@/components/ui/ProductDetailsCard";
interface TProductId {
  params: {
    productId: string;
  };
}

const ProductDetailsPage = async ({ params }: TProductId) => {
  console.log(params);

  const res = await fetch(
    `${process.env.BACKEND_URL}/products/${params.productId}`,
    {
      cache: "no-cache",
    }
  );
  const singleProductJson = await res.json();
  const product = singleProductJson?.data;
  console.log(product.name);

  return (
    <div>
      <ProductDetailsCard
        key={product._id}
        product={product}
      ></ProductDetailsCard>
    </div>
  );
};

export default ProductDetailsPage;
