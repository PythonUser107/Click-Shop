import {ProductCard} from "@/entities/product/ui/ProductCard" 
import { useGetProductsQuery } from "@/api/api" 

function ProductPage() {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) return <div>Yuklanmoqda...</div>

  return (
    <div className="flex flex-wrap gap-4 p-5 justify-center">
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} /> 
      ))}
    </div>
  )
}

export default ProductPage