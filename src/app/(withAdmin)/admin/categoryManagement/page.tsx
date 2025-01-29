import CategoryCard from "@/components/CategoryCard";
import CategoryForm from "@/components/CategoryForm";
import { TCategory } from "@/types/TCategory";

const CategoryManagement = async () => {
  try {
    // Fetch categories from backend
    const allCategories = await fetch(`${process.env.BACKEND_URL}/categories`, {
      cache: "no-cache",
      next: {
        revalidate: 30,
      },
    });

    // Parse response
    const response = await allCategories.json();

    // Check if response contains the categories array
    const categories = Array.isArray(response) ? response : response.data || [];

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Category Management</h1>
        <CategoryForm />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((category: TCategory) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return <p className="text-red-600">Failed to load categories.</p>;
  }
};

export default CategoryManagement;
