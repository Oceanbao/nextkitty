import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("bg-base-300 antialiased")}>
      <body className="min-h-screen antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
