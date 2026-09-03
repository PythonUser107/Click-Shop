import { ArrowRight } from "lucide-react"
import { Button } from "@/shared/ui/button"

export const Main = () =>  {
  return (
    <div className="flex gap-[5px] relative">
      <div className="border-[1px] bg-white flex-1 rounded-md relative min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] shadow-sm overflow-y-auto overflow-x-hidden mt-[5px]">
        <div className="p-[7px] relative min-h-[calc(100vh-79px)] overflow-hidden max-w-[2000px] mx-auto flex justify-center items-center flex-col gap-3">
          <div className="flex relative z-[1] flex-col justify-center items-center gap-3">
            <h2 className="text-[30px] md:text-[40px] lg:text-[45px] font-bold leading-[36px] md:leading-[50px] lg:leading-[55px] text-center mx-[5%] text-indigo-700 drop-shadow-md max-w-[1000px]">
              Find life-easing technologies only at Click Shop!
            </h2>
            <p className="text-gray-600 font-medium text-center max-w-[700px] mx-[5%] text-[12px] md:text-[14px]">
              We have the latest smartphones, modern laptops, computers, and various accessories. Only with us you can buy quality technology at affordable prices!
            </p>
            <button className="pl-[20px] pr-[15px] text-[16px] py-[7px] flex justify-center items-center gap-1 hover:shadow-lg rounded-full duration-100 bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-indigo-600 active:scale-95 text-white font-medium">
              <span>Get started</span>
              <span className="text-[20px] flex justify-center items-center" ></span>
            </button>
          </div>  
        </div>  
      </div>
    </div>
  )
}


