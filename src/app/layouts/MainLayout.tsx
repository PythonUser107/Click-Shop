import Header from "@/widgets/header/Header"
import { Outlet } from "react-router"

function MainLayout() {
  return (
    <div className="p-[5px] font-mont bg-gray-100">
      <Header />
      <div className="flex gap-[5px] relative">
        <main className="border-[1px] bg-white flex-1 rounded-md relative min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] shadow-sm overflow-y-auto overflow-x-hidden mt-[5px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout