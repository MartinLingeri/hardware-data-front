import Link from "next/link"
import { Product } from "./Product"

const getMexxProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/mexx", {
      next: { revalidate: 60 * 60 * 24 },
    })

    if (!res.ok) throw new Error(res.statusText)

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function MexxProducts() {
  const { products } = await getMexxProducts()
  return (
    <div>
      <h1>Mexx Products</h1>
      <ul>
        {products.map((product: Product, index: number) => (
          <li key={index}>
            <Link href={`/mexx/${product._id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
