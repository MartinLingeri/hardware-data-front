import { getProduct } from "@/components/Product"
import ProductChart from "@/components/ProductChart"

export default async function ProductPage({
  params,
}: {
  params: { id?: string }
}) {
  const id = params.id ?? ""
  const product = await getProduct(`http://localhost:3000/api/mexx/id/${id}`)

  const chartData = {
    labels: product!.prices.map((priceData) => priceData.date),
    datasets: [
      {
        label: "Precio",
        data: product!.prices.map((priceData) => priceData.price),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  }

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{id}</p>
      <ProductChart data={chartData} />
    </div>
  )
}
