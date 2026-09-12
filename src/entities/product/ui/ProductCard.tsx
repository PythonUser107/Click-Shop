import { Heart, ShoppingCart, Star } from "lucide-react"
import type { Product } from "../model/ProductType"

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-[280px] bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group">
      <div className="relative w-full h-[220px] bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3">
        <span className="absolute top-2 left-2 bg-gray-800/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md font-medium z-10">
          Smartphones
        </span>
        <button 
          aria-label="Add to favorites"
          className="absolute top-2 right-2 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-all shadow-sm cursor-pointer z-10"
        >
          <Heart size={18} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-900 font-semibold text-[16px] line-clamp-2 leading-snug min-h-[44px]">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-700 mr-1">{product.rate}</span>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={14}
              className={`${
                index < Math.floor(product.rate)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="flex items-end justify-between mt-2 pt-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-gray-400 line-through">${(product.price * 1.1).toFixed(0)}</span>
              <span className="bg-indigo-100 text-indigo-600 font-bold text-[10px] px-1.5 py-0.5 rounded">
                -10%
              </span>
            </div>
            <span className="text-2xl font-bold text-indigo-600 leading-tight">
              ${product.price}
            </span>
          </div>
          <button 
            aria-label="Add to cart"
            className="w-11 h-11 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center shadow-md shadow-indigo-200 active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

    </div>
  )
}