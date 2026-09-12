import { useState, useEffect } from "react"
import { ProductCard } from "@/entities/product/ui/ProductCard" 
import { useGetProductsQuery } from "@/api/api" 
import Loader from "@/shared/animations/Loader"

function ProductPage() {
  const { data: products, isLoading: isApiLoading } = useGetProductsQuery()
  const [isFakeLoading, setIsFakeLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFakeLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  
  if (isApiLoading || isFakeLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-77px)]">
        <Loader size={500} />
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-4 p-5 justify-center">
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} /> 
      ))}
    </div>
  )
}

export default ProductPage