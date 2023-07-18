import Link from "next/link"
import { GroupedProduct, getProducts } from "./Product"

type Props = {
  url: string
  store: string
}

export default async function Products(props: Props) {
  const products = await getProducts(props.url)
  return (
    <section>
      <h1>{props.store.toUpperCase()} Products</h1>
      <div className="grid gap-4 grid-cols-1fr lg:grid-cols-2 xl:grid-cols-3">
        {products!.map((product: GroupedProduct) => (
          <Link
            href={`/${props.store}/${product.id}`}
            className="flex flex-col justify-between p-4 rounded-md max-w-sm shadow-md bg-slate-50 text-black box-shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
            key={product.id}
          >
            <h1 className="font-bold">{product.title}</h1>
            <img src={product.image} />
            <div>${product.prices[product.prices.length - 1].price.toLocaleString()}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
