"use client";

import Image from "next/image";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { TProduct } from "@/types/TProducts";
// import { toast } from "react-toastify";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
  // const [isLoading, setIsLoading] = useState(false);
  //   const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {};

  return (
    <div className="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
          10% OFF
        </div>

        {/* <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
          aria-label="Add to wishlist"
        >
          <FaHeart
            className={`text-xl text-red-400 ${
              isWishlisted ? "text-destructive" : "text-gray-400"
            }`}
          />
        </button> */}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-heading font-bold text-foreground truncate">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-body line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-accent">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3 px-4 bg-accent text-white text-primary-foreground rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-primary/60 transition-colors duration-200 disabled:opacity-70"
          aria-label="Add to cart"
        >
          <Link href={`/product/${product._id}`}>
            {" "}
            <span>See Details</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
