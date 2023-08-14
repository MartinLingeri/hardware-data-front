import { getProduct } from "@/components/Product"
import ProductChart from "@/components/ProductChart"

export default async function ProductPage({
  params,
}: {
  params: { id?: string }
}) {
  const id = params.id ?? ""
  const product = await getProduct(`http://localhost:3000/api/mexx/id/${id}`)

  const uniqueDatesMap: { [name: string]: boolean } = {};

  //Se eliminan fechas repetidas que estan duplicadas por error en la base de datos
  const uniquePrices = product!.prices.filter((item) => {
    if (!uniqueDatesMap[item.date]) {
      uniqueDatesMap[item.date] = true;
      return true;
    }
    return false;
  })

  const chartData = uniquePrices.map((priceData) => ({
    name: priceData.date,
    Precio: priceData.price,
    Precio_a_dolar_blue: parseFloat(priceData.blue_price["$numberDecimal"]),
    Precio_a_dolar_oficial: parseFloat(
      priceData.oficial_price["$numberDecimal"]
    ),
    Dolar_oficial: parseFloat(priceData.dolar_oficial),
    Dolar_blue: parseFloat(priceData.dolar_blue),
  }))
  console.log(chartData)
  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <h1 className="text-black text-xl font-bold">{product?.title}</h1>
      <h2 className="text-black text-lg font-bold">
        ${product!.prices[product!.prices.length - 1].price.toLocaleString()}
      </h2>
      <img
        //alt={product.title}
        //width={192}
        //height={192}
        className="w-48 h-48 object-cover rounded-md"
        src={product!.image}
      />
      <ProductChart data={chartData} />
    </main>
  )
}
