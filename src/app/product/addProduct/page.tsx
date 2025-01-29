import ProductForm from "@/components/ProductForm";


const AddProductPage = async() => {
    const url = process.env.BACKEND_URL;
    const res = await fetch(`${url}/categories`, {
        cache:'no-cache'
    })
    const categories = await res.json()
    console.log(categories);
    
  return (
    <div>
          <ProductForm categories={ categories} />
    </div>
  );
};

export default AddProductPage;
