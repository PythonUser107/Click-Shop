import { Heart, Star, ShoppingCartPlus } from "lucide-react"
import type { Product } from "../model/ProductType"

interface ProductCardProps {
  product: Product,
  categoryTitle: string | undefined
}

export const ProductCard = ({ product, categoryTitle }: ProductCardProps) => {
  return (
    // <div className="border-[1px] cursor-pointer group hover:border-indigo-100 h-full duration-100 flex flex-col rounded-md overflow-hidden shadow-sm bg-white relative text-gray-700">
    //   <button className="w-[35px] h-[35px] flex justify-center items-center bg-black text-[18px] duration-150 text-white hover:scale-105 border-[1px] border-gray-200 bg-opacity-20 hover:bg-opacity-15 rounded-full absolute top-[7px] right-[7px] active:scale-100">
    //     <Heart size={18} />
    //   </button>
    //   <div className="absolute text-[12px] font-medium bg-black shadow-sm bg-opacity-40 backdrop-blur-[1px] text-white top-[10px] left-[10px] py-[2px] px-[5px] rounded-sm">
    //     {product.categoryId}
    //   </div>
    //   <div className="flex justify-center items-center p-[10px] border-b-[1px]">
    //     <img src={product.image} alt={product.name}
    //       className="max-h-[170px] min-h-[170px] sm:max-h-[200px] sm:min-h-[200px] object-contain"
    //     />
    //   </div>
    //   <div className="px-[10px] py-[7px] flex flex-col gap-2 justify-between flex-1 bg-slate-50 group-hover:bg-indigo-50 duration-100">
    //     <h3 className="text-[14px] md:text-[16px] font-semibold">{product.name}</h3>
    //     <div className="flex justify-start items-center text-[12px] font-medium gap-1">
    //       <div>{product.rate}</div>
    //       <div className="text-[14px] text-orange-500">
    //         <div className="flex space-x-1">
    //           <Star fill="orange"  size={14} />
    //           <Star fill="orange"  size={14} />
    //           <Star fill="orange"  size={14} />
    //           <Star fill="orange"  size={14} />
    //           <Star fill="orange"  size={14} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>



    <div className="w-[280px] bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group">
      <div className="relative w-full h-[220px] bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3">
        <span className="absolute top-2 left-2 bg-gray-800/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md font-medium z-10">
          {categoryTitle}
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
              className={`${index < Math.floor(product.rate)
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
            <ShoppingCartPlus size={20} />
          </button>
        </div>
      </div>

    </div>
  )
}