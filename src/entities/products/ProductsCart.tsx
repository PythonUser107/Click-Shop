import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useGetProductApiByNameQuery } from '@/api/api'

export default function ProductsCart() {
  const { isLoading, isError, data } = useGetProductApiByNameQuery()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full">
        <DotLottieReact
          src="/Loading.json"
          loop
          autoplay
          style={{ width: '200px', height: '200px' }}
        />
      </div>
    )
  }

  if (isError) return <div>Error!</div>

  return (
    <div className="grid grid-cols-4 gap-2">
      {data?.map((item: any) => (
        <div key={item.id} className="p-2 border rounded-sm">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}