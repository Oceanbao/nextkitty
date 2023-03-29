import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wine App | Page not found",
  description: "Demo wine app.",
}

const PageNotFound = () => {
  return (
    <section className="container mx-auto flex max-w-7xl flex-col items-center gap-6 pt-32 text-center">
      <h1>Site not found...</h1>
      <p>The site you&apos;re searching for does not exist.</p>
      <Link href="/">Back to home</Link>
    </section>
  )
}

export default PageNotFound
