"use client";
import React, { useState } from "react";
import { TProduct } from "@/types/TProducts";
import ProductCard from "./ui/ProductCard";
import { TCategory } from "@/types/TCategory";

const Products = ({
  products,
  categories,
}: {
  products: TProduct[];
  categories: TCategory[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default"); // Sorting state

  const itemsPerPage = 6; // Number of products per page

  // Map category IDs to names for filtering
  const categoryMap = new Map(categories.map((cat) => [cat.id, cat.name]));

  // Get unique category names for dropdown
  const uniqueCategories = ["All", ...categories.map((cat) => cat.name)];

  // Filter products based on search and category
  let filteredProducts = products.filter((product) => {
    const categoryName = categoryMap.get(product.category); // Get category name from category ID
    const matchesCategory =
      selectedCategory === "All" || categoryName === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on the selected option
  if (sortBy === "priceHighToLow") {
    filteredProducts.sort((a, b) => b.price - a.price); // High to Low
  } else if (sortBy === "priceLowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price); // Low to High
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("default");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Categories Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort By Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="default"> Default Price</option>
          <option value="priceHighToLow">Price High to Low</option>
          <option value="priceLowToHigh">Price Low to High</option>
        </select>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-400 transition duration-200"
        >
          Clear Filters
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                } hover:bg-blue-400 hover:text-white transition duration-200`}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
