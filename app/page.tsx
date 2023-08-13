import Products from "@/components/Products"
import Search from "@/components/Search"
import Categories from "@/components/Categories"
import { GroupedProduct, getProducts } from "@/components/Product"

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  let productsMexx: GroupedProduct[] = []

  //let productsLogg: GroupedProduct[] = []

  const search = searchParams.search ?? ""

  const initialProductsMexx = await getProducts(
    "http://localhost:3000/api/mexx"
  )

  interface GroupedProductMap {
    [key: string]: GroupedProduct[]
  }

  const initialProductsMexxReduced: GroupedProduct[] = (
    Object.values(
      (initialProductsMexx || []).reduce(
        (acc: GroupedProductMap, product: GroupedProduct) => {
          if (!acc[product.category] || acc[product.category].length < 10) {
            acc[product.category] = [...(acc[product.category] || []), product]
          }
          return acc
        },
        {}
      )
    ) as GroupedProduct[][]
  ).flat()
  //const initialProductsLogg = await getProducts("http://localhost:3000/api/logg")

  const filteredProductsMexx = initialProductsMexx!.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  // const filteredProductsLogg = initialProductsLogg!.filter((product) =>
  //   product.title.toLowerCase().includes(search.toLowerCase())
  // )

  if (search.length > 0) {
    if (filteredProductsMexx) {
      productsMexx = filteredProductsMexx
    }
    // if(filteredProductsLogg) {
    //   productsLogg = filteredProductsLogg
    // }
    else {
      productsMexx = []
      //productsLogg = []
    }
  } else {
    productsMexx = initialProductsMexxReduced ?? []
    //productsLogg = initialProductsLogg ?? []
  }

  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Search />
        <Categories />
        <Products products={productsMexx} store="mexx" />
        {/* <Products products={productsLogg} store="logg" /> */}
      </div>
    </main>
  )
}
