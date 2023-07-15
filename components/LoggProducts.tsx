import Link from "next/link"
import { Product } from "./Product"

const getLoggProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/logg", {
      next: { revalidate: 60 * 60 * 24 },
    })

    if (!res.ok) throw new Error(res.statusText)

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function LoggProducts() {
  const { products } = await getLoggProducts()
  return (
    <div>
      <h1>Logg Products</h1>
      <ul>
        {products.map((product: Product, index: number) => (
          <li key={index}>
            <Link href={`/logg/${product._id}`}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
