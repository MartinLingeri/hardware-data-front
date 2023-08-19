import Link from "next/link"
import { GroupedProduct, getProducts } from "./Product"
import Image from "next/image"

type Props = {
  search: string | undefined
  store: string
  url: string
}

export default async function Products(props: Props) {
  let products: GroupedProduct[] = []

  const search = props.search ?? ""

  const initialProducts = await getProducts(
    props.url
  )

  interface GroupedProductMap {
    [key: string]: GroupedProduct[]
  }

  const initialProductsReduced: GroupedProduct[] = (
    Object.values(
      (initialProducts || []).reduce(
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

  const filteredProducts = initialProducts!.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  if (search.length > 0) {
    if (filteredProducts) {
      products = filteredProducts
    } else {
      products = []
    }
  } else {
    products = initialProductsReduced ?? []
  }

  return (
    <section className="grid justify-center">
      <h1 className="text-black text-xl">
        {props.store.toUpperCase()} Productos
      </h1>
      <div className="grid self-center gap-4 grid-cols-1fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products
          ? products.map((product: GroupedProduct) => (
              <Link
                href={`/${props.store}/${product.id}`}
                className="flex flex-col justify-between rounded-md w-64 md:w-48 h-80 pb-4 shadow-md bg-slate-50 text-black box-shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
                key={product.id}
              >
                <img
                  //alt={product.title}
                  //width={192}
                  //height={192}
                  className="w-full h-48 object-cover rounded-t-md"
                  src={product.image}
                />
                <h1 className="font-medium text-sm px-4 max-h-30">
                  {product.title}
                </h1>
                <div className="font-bold px-4">
                  $
                  {product.prices[
                    product.prices.length - 1
                  ].price.toLocaleString()}
                </div>
              </Link>
            ))
          : Array(20)
              .fill(
                <div className="rounded-md w-64 md:w-48 h-80 pb-4 shadow-md bg-gray-200 dark:bg-gray-700"></div>
              )
              .map((product) => product)}
      </div>
    </section>
  )
}
