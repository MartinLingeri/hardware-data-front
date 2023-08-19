import Products from "@/components/Products"
import { Suspense } from "react"
import { categories } from "@/components/Category"
import LoadingProducts from "@/components/LoadingProducts"
import Layout from "@/components/Layout"

export default function Category({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams: { search?: string }
}) {
  const mexxCategory = categories.find(
    (category) => category.value == decodeURIComponent(params.category)
  )
  const loggCategory = categories.find(
    (category) => category.value == decodeURIComponent(params.category)
  )

  return (
    <Layout>
      <Suspense fallback={<LoadingProducts store="mexx" />}>
        <Products
          search={searchParams.search}
          store="mexx"
          url={`http://localhost:3000/api/mexx/${mexxCategory!.mexx}`}
        />
      </Suspense>
      {/* <Products
        search={searchParams.search}
        store="logg"
        url={`http://localhost:3000/api/logg/${loggCategory!.logg}`}
      /> */}
    </Layout>
  )
}
