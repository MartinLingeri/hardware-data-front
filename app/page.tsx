import Products from "@/components/Products"
import { Suspense } from "react"
import LoadingProducts from "@/components/LoadingProducts"
import Layout from "@/components/Layout"
import ScrollButtons from "@/components/ScrollButtons"

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  return (
    <Layout>
      <Suspense fallback={<LoadingProducts store="mexx" />}>
        <Products
          search={searchParams.search}
          store="mexx"
          url="http://localhost:3000/api/mexx"
          reduced
        />
      </Suspense>
      <Suspense fallback={<LoadingProducts store="logg" />}>
        <Products
          search={searchParams.search}
          store="logg"
          url="http://localhost:3000/api/logg"
          reduced
        />
      </Suspense>
      <ScrollButtons />
    </Layout>
  )
}
