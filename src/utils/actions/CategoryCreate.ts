"use server";
import { TCategory } from "@/types/TCategory";

const CategoryCreate = async (data: TCategory) => {
  const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const result = await res.json();
  return result;
};

export default CategoryCreate;
