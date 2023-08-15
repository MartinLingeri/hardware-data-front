import Products from "@/components/Products"
import { Suspense } from "react"
import Search from "@/components/Search"
import Categories from "@/components/Categories"
import LoadingProducts from "@/components/LoadingProducts"

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Search />
        <Categories />
        <Suspense fallback={<LoadingProducts />}>
          <Products search={searchParams.search} store="mexx" />
        </Suspense>
        {/* <Products products={productsLogg} store="logg" /> */}
      </div>
    </main>
  )
}
