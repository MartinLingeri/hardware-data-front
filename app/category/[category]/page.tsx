import Products from "@/components/Products"
import { Suspense } from "react"
import Search from "@/components/Search"
import Categories from "@/components/Categories"
import LoadingProducts from "@/components/LoadingProducts"

export default function Category({
  params,
}: {
  params: { category?: string; search?: string }
}) {
  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Search />
        <Categories />
        <Suspense fallback={<LoadingProducts />}>
          <Products
            search={params.search}
            store="mexx"
            url={`http://localhost:3000/api/mexx/${params.category}`}
          />
        </Suspense>
        {/* <Products search={params.search}
            store="logg"
            url={`http://localhost:3000/api/logg/${params.category}`} /> */}
      </div>
    </main>
  )
}
