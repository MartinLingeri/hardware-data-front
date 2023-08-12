import Products from "@/components/Products"
import Search from "@/components/Search"
import Categories from "@/components/Categories"
import { categories } from "@/components/Category"
import { GroupedProduct, getProducts } from "@/components/Product"


export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string }
}) {

  let productsMexx: GroupedProduct[] = []

  //let productsLogg: GroupedProduct[] = []

  const search = searchParams.search ?? ""

  const initialProductsMexx = await getProducts("http://localhost:3000/api/mexx")

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
  }
  else {
    productsMexx = initialProductsMexx ?? []
    //productsLogg = initialProductsLogg ?? []
  }


  return (
    <main className="bg-gray-100 py-8">
      <div className="mx-auto max-w-4xl">
        {/* <Search /> */}
        <Categories />
        <Products products={productsMexx} store="mexx" />
        {/* <Products products={productsLogg} store="logg" /> */}
      </div>
    </main>
  )
}
