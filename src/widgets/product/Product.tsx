import { useState } from "react"
import { ProductCard } from "@/entities/product/ui/ProductCard"
import { CategoryList } from "@/entities/category/ui/CategoryList"
import { useGetCategoriesQuery, useGetProductsQuery } from "@/api/api"

function Product() {
  const { data: products } = useGetProductsQuery()
  const { data: categories } = useGetCategoriesQuery()
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const filteredProducts = selectedCategoryId
    ? products?.filter((product) => product.categoryId === selectedCategoryId)
    : products

  return (
    <div>
      <CategoryList onSelect={(id) => setSelectedCategoryId(id)} />
      <div className="flex flex-wrap gap-4 p-5 justify-center">
        {filteredProducts?.map((item) => (
          <ProductCard key={item.id} product={item} categoryTitle={categories?.find(category => category.id === item.categoryId)?.name}/>
        ))}
      </div>
    </div>
  )
}

export default Product