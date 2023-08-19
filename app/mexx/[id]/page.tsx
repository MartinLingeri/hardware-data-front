import { Suspense } from "react"
import Link from "next/link"
import LoadingProduct from "@/components/LoadingProduct"
import ProductInfo from "@/components/ProductInfo"

export default async function ProductPage({
  params,
}: {
  params: { id?: string }
}) {

  return (
    <main className="bg-gray-100 py-4 md:py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-block rounded-full w-8 h-8 hover:opacity-70"
        >
          <div className="flex items-center justify-center bg-red-400 w-8 h-8 rounded-full mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
        </Link>
        <Suspense fallback={<LoadingProduct />}>
          <ProductInfo id={params.id} />
        </Suspense>
      </div>
    </main>
  )
}
