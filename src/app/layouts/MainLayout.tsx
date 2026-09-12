import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import Header from "@/widgets/header/Header"
import Loader from "@/shared/animations/Loader"

function MainLayout() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="p-[5px] font-mont bg-gray-100">
      <Header />
      <div className="flex gap-[5px] relative">
        <main className="border-[1px] bg-white flex-1 rounded-md relative min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] shadow-sm overflow-y-auto overflow-x-hidden mt-[5px]">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[calc(100vh-87px)] w-full h-full">
              <Loader size={500} />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  )
}

export default MainLayout