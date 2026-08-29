import { ArrowRight } from "lucide-react"
import { Button } from "@/shared/ui/button"

export const Main = () =>  {
  return (
    <section className="text-center py-32 px-4 bg-gradient-to-b from-violet-50 to-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-violet-700 max-w-3xl mx-auto mb-6">
        Find life-easing technologies only at Click Shop!
      </h1>
      <p className="max-w-xl mx-auto text-muted-foreground mb-8">
        We have the latest smartphones, modern laptops, computers, and various
        accessories. Only with us you can buy quality technology at affordable
        prices!
      </p>
      <Button className="bg-violet-600 hover:bg-violet-700 rounded-full px-6 py-6 text-base">
        Get started <ArrowRight size={18} className="ml-1" />
      </Button>
    </section>
  )
}


