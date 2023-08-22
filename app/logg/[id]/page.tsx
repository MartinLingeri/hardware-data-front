import { Suspense } from "react"
import GoBackButton from "@/components/GoBackButton"
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
        <GoBackButton />
        <Suspense fallback={<LoadingProduct />}>
          <ProductInfo id={params.id} store="logg" />
        </Suspense>
      </div>
    </main>
  )
}
