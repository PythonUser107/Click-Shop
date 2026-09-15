import type { Category } from "../model/CategoryType"

interface CategoryCardProps {
  category?: Category
  name?: string
  icon?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export const CategoryCard = ({
  category,
  name,
  icon,
  isActive,
  onClick,
}: CategoryCardProps) => {
  const cardName = category ? category.name : name
  const cardIcon = category ? (
    category.image && (
      <img
        src={category.image}
        alt={category.name}
        className="w-[18px] h-[18px] object-contain"
      />
    )
  ) : (
    icon
  )

  return (
    <div
      onClick={onClick}
      className="border-[1px] bg-white relative overflow-hidden min-w-max hover:bg-gray-50 active:scale-95 duration-75 cursor-pointer px-[15px] py-[5px] rounded-md shadow-sm flex justify-center items-center gap-1"
    >
      {cardIcon && (
        <div className="min-h-[20px] sm:min-h-[25px] flex justify-center items-center">
          {cardIcon}
        </div>
      )}
      <div className="font-semibold text-[12px] sm:text-[14px]">{cardName}</div>
      {isActive && (
        <div className="absolute h-[3px] left-0 right-0 duration-75 bottom-0 bg-indigo-600" />
      )}
    </div>
  )
}