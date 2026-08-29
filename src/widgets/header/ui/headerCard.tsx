import { Search, Heart, ShoppingCart, ShoppingBag } from "lucide-react"
import { Button } from "@/shared/ui/button"

function HeaderCard() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b">
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="Logo" className="h-9 w-auto object-contain" />
      </div>

      <div className="flex items-center gap-2 border rounded-full px-4 py-2 w-72">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-transparent text-sm"
        />
        <Search size={18} className="text-muted-foreground" />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Heart size={22} />
          <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] rounded-full px-1.5">
            0
          </span>
        </div>
        <div className="relative flex items-center gap-2">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] rounded-full px-1.5">
            0
          </span>
          <span className="text-sm">$0.00</span>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700 rounded-full px-6">
          Login
        </Button>
      </div>
    </header>
  )
}

export default HeaderCard