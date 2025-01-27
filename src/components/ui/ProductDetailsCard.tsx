"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/TProducts";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const ProductDetailsCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the action to add product to cart
    toast.success("Product added to cart!");
  };
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg max-h-96 w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            $ {product.price}
          </p>

          <p className="text-sm text-gray-600 mb-2">
            Available Stock:{" "}
            <span className="font-medium">{product.stockQuantity}</span>
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Category: <span className="font-medium">{product.category}</span>
          </p>

          <p className="text-gray-700 text-md mt-4">{product.description}</p>

          <ul className="mt-4 list-disc list-inside text-gray-600">{}</ul>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
