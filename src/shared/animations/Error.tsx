import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface ErrorProps {
  size?: number
  className?: string
}

export default function Error({ size = 200, className = "" }: ErrorProps) {
  return (
    <div className={`flex justify-center items-center w-full h-full ${className}`}>
      <DotLottieReact
        src="/animations/Error.json"
        autoplay
        loop
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  )
}