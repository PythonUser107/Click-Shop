import { RxAvatar } from "react-icons/rx"; 
import { Search, Heart, ShoppingCart, ShoppingBag } from "lucide-react"
import { Button } from "@/shared/ui/button"

function HeaderCard() {
  return (
    <header className="border-[1px] bg-white rounded-lg max-h-[60px] min-h-[60px] flex justify-between items-center gap-1 p-[15px] shadow-sm">
      <a href="/<RxAvatar />">
        <img src="/logo.jpg" alt="Logo" className="h-[30px] sm:h-[35px] object-contain active:scale-95 duration-100" />
      </a>
      <div className="flex justify-end items-center gap-[15px]">
        <div className="hidden sm:block">
          <div className="relative border-[2px] rounded-full overflow-hidden border-indigo-600">
            <input type="search" placeholder="Search" className="px-[18px] py-[5px] pr-[40px] font-medium outline-none text-[14px]" />
            <div className="absolute top-[2px] right-[2px] bottom-[2px] rounded-full hover:bg-indigo-50 active:scale-95 cursor-pointer w-[30px] flex justify-center items-center">

            </div>
          </div>
        </div>
        <a href="/favourite" className="flex cursor-pointer group text-[22px] relative justify-center items-center gap-[5px]">
          <Heart size={22} />
          <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">5</span>
        </a>
        <a href="/basket" className="flex cursor-pointer group justify-center items-center gap-[7px]">
          <div className="flex text-[22px] relative justify-center items-center gap-[5px]">
            <ShoppingCart size={22} />
            <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">0</span>
          </div>
          <span className="text-[14px] font-semibold group-hover:text-indigo-600">$0.00</span>
        </a>
        <div>
          <div className="relative menu">
            <button className="flex justify-center items-center gap-1">
              <span className="text-[16px]"></span>
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderCard