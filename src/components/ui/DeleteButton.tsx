"use client";
import React from "react";
import { toast } from "react-toastify";
import CategoryDelete from "@/utils/actions/CategoryDelete";
import { useRouter } from "next/navigation";

const DeleteButton = ({ categoryId }: { categoryId: string }) => {
  const router = useRouter();
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    try {
      await CategoryDelete(categoryId);
      toast.success("Category deleted successfully!");
      // Redirect or update UI after deletion
      router.push("/api/categoryManagement");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete category.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
