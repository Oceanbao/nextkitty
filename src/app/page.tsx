import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wine App",
  description: "Demo project of wine app.",
}

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden"></div>
  )
}
