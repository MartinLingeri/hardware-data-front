import Products from "@/components/Products"
import { Suspense } from "react"
import { categories } from "@/components/Category"
import LoadingProducts from "@/components/LoadingProducts"
import Layout from "@/components/Layout"
import ScrollButtons from "@/components/ScrollButtons"

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
          url={`${process.env.API_MEXX}/${mexxCategory!.mexx}`}
        />
      </Suspense>
      <Suspense fallback={<LoadingProducts store="logg" />}>
        <Products
          search={searchParams.search}
          store="logg"
          url={`${process.env.API_LOGG}/${loggCategory!.logg}`}
        />
      </Suspense>
      <ScrollButtons />
    </Layout>
  )
}
