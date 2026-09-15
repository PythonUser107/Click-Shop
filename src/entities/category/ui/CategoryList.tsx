import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { CategoryCard } from "./CategoryCard"
import { LayoutGrid, ChevronRight } from "lucide-react"
import { useGetCategoriesQuery } from "@/api/api"

import "swiper/css"
import "swiper/css/navigation"

interface CategoryListProps {
  onSelect: (id: number | null) => void
}

export const CategoryList = ({ onSelect }: CategoryListProps) => {
  const { data: categories } = useGetCategoriesQuery()
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleSelect = (id: number | null) => {
    setActiveId(id)
    onSelect(id)
  }

  return (
    <div className="sticky right-[10px] z-[1] left-[10px] top-[-2px] bg-white p-[7px] border-b-[1px] shadow-sm">
      <div className="flex justify-start items-center gap-1 max-w-[1400px] mx-auto">
        <CategoryCard
          name="All Products"
          icon={<LayoutGrid size={13} />}
          isActive={activeId === null}
          onClick={() => handleSelect(null)}
        />
        <div className="flex-1 overflow-hidden relative">
          <Swiper
            slidesPerView="auto"
            spaceBetween={5}
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next-custom" }}
            className="w-full"
          >
            {categories?.map((cat) => (
              <SwiperSlide key={cat.id} className="!w-auto">
                <CategoryCard
                  category={cat}
                  isActive={activeId === cat.id}
                  onClick={() => handleSelect(cat.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="swiper-button-next-custom cursor-pointer hover:text-indigo-600 hover:scale-110 active:scale-95 p-1">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}