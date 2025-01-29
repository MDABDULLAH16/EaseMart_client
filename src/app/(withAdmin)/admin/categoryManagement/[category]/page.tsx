import UpdateCategoryForm from "@/components/UpdateCategoryForm";
import { useState } from "react";

interface TCatParams {
  params: {
    category: string;
  };
}

const SingleCategory = async ({ params }: TCatParams) => {
  console.log({ params });

  const res = await fetch(
    `${process.env.BACKEND_URL}/categories/${params.category}`
  );
  const categories = await res.json();
  const category = categories?.data;

  return (
    <div>
      <UpdateCategoryForm key={category._id} category={category} />
    </div>
  );
};

export default SingleCategory;
