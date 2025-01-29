import { TCategory } from "@/types/TCategory";
import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./ui/DeleteButton";

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
      <div className="relative h-48 w-full">
        <Image
          src={category.image || "/placeholder-image.jpg"}
          alt={category.name || "Category Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {category.name || "Unnamed Category"}
        </h3>
        <p className="text-gray-600 text-base line-clamp-3">
          {category.description || "No description available."}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <DeleteButton
          key={category._id}
          categoryId={category._id}
        ></DeleteButton>
        <Link
          href={`/admin/categoryManagement/${category._id}`}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
