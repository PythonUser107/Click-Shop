import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface LoaderProps {
  size?: number
  className?: string
}

export default function Loader({ size = 200, className = "" }: LoaderProps) {
  return (
    <div className={`flex justify-center items-center w-full h-full ${className}`}>
      <DotLottieReact
        src="/animations/Loading.json"
        autoplay
        loop
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  )
}