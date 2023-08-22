import Link from "next/link"
import { GroupedProduct, getProducts } from "./Product"
import Image from "next/image"

type Props = {
  search: string | undefined
  store: string
  url: string
  reduced?: boolean
}

export default async function Products(props: Props) {
  let products: GroupedProduct[] = []

  const search = props.search ?? ""

  const initialProducts = await getProducts(props.url)

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
    products = props.reduced
      ? initialProductsReduced ?? []
      : initialProducts ?? []
  }

  return (
    <section id={props.store} className="grid justify-center mt-9">
      <div className="flex gap-2 items-center mb-2">
        <h1 className="text-black inline-block min-w-fit text-xl">
          {props.store.toUpperCase()} Productos
        </h1>
        <div className="bg-black w-full h-1 rounded-md">
        </div>
      </div>
      {products.length ? (
        <div className="grid self-center gap-4 grid-cols-1fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: GroupedProduct) => (
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
          ))}
        </div>
      ) : (
        <h2 className="text-black m-9">No se encontraron productos</h2>
      )}
    </section>
  )
}
