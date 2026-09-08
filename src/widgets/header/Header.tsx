import { Search, Heart, ShoppingCart, CircleUserRound } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Link } from "react-router"

function Header() {
  return (
    <header className="border-[1px] bg-white rounded-lg max-h-[60px] min-h-[60px] flex justify-between items-center gap-1 p-[15px] shadow-sm">

      <Link to={"/"}>
        <img src="/logo.jpg" alt="Logo"
          className="h-[30px] sm:h-[35px] object-contain active:scale-95 duration-100"
        />
      </Link>

      <div className="flex justify-end items-center gap-[15px]">

        <div className="hidden sm:block">
          <div className="relative border-[2px] rounded-full overflow-hidden border-indigo-600">
            <input
              type="search" placeholder="Search"
              className="px-[18px] py-[5px] pr-[40px] font-medium outline-none text-[14px]"
            />
            <div className="absolute top-[2px] right-[2px] bottom-[2px] rounded-full hover:bg-indigo-50 active:scale-95 cursor-pointer w-[30px] flex justify-center items-center">
              <Search size={16} />
            </div>
          </div>
        </div>

        <Link to={"/favourite"} className="flex cursor-pointer group text-[22px] relative justify-center items-center gap-[5px]">
          <Heart size={22} />
          <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">0</span>
        </Link>

        <Link to={"/basket"} className="flex cursor-pointer group justify-center items-center gap-[7px]">
          <div className="flex text-[22px] relative justify-center items-center gap-[5px]">
            <ShoppingCart size={22} />
            <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">0</span>
          </div>
          <span className="text-[14px] font-semibold group-hover:text-indigo-600">$0.00</span>
        </Link>

        <div>
          <div className="flex justify-center items-center gap-1">
            <button
              className="w-[90px] h-[34px] cursor-pointer flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 
              to-indigo-500 text-white font-medium py-1.5 px-3 rounded-full hover:from-indigo-500 hover:to-blue-700 transition-all duration-300 shadow-md">
              <span className="text-[16px] font-medium">Login</span>
            </button>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header