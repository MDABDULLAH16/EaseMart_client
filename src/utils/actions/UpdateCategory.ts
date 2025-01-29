"use server";
import { TCategory } from "@/types/TCategory";

const UpdateCategory = async (id: string, data: TCategory) => {
  try {
    const BACKEND_URL = process.env.BACKEND_URL;
    // if (!BACKEND_URL) {
    //   toast.warn("url not fount");
    //   return;
    // }
    const res = await fetch(`${BACKEND_URL}/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });

    if (!res.ok) {
      // If the response is not OK, throw an error with status text
      const errorText = await res.text(); // Read response as text
      throw new Error(`HTTP Error ${res.status}: ${errorText}`);
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    console.error("Error updating category:", error.message);
    throw new Error(error.message);
  }
};

export default UpdateCategory;
