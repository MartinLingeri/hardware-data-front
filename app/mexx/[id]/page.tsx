import { getProduct } from "@/components/Product"
import ProductChart from "@/components/ProductChart"
import Link from "next/link"

export default async function ProductPage({
  params,
}: {
  params: { id?: string }
}) {
  const id = params.id ?? ""
  const product = await getProduct(`http://localhost:3000/api/mexx/id/${id}`)

  const uniqueDatesMap: { [name: string]: boolean } = {}

  //Se eliminan fechas repetidas que estan duplicadas por error en la base de datos
  const uniquePrices = product!.prices.filter((item) => {
    if (!uniqueDatesMap[item.date]) {
      uniqueDatesMap[item.date] = true
      return true
    }
    return false
  })

  function convertDateFormat(inputDate: string) {
    const parts = inputDate.split("/")
    const year = parts[2]
    const month = parts[1].padStart(2, "0")
    const day = parts[0].padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  const chartData = uniquePrices.map((priceData) => ({
    date: convertDateFormat(priceData.date),
    Precio: priceData.price,
    Precio_a_dolar_blue: parseFloat(priceData.blue_price["$numberDecimal"]),
    Precio_a_dolar_oficial: parseFloat(
      priceData.oficial_price["$numberDecimal"]
    ),
    Dolar_oficial: parseFloat(priceData.dolar_oficial),
    Dolar_blue: parseFloat(priceData.dolar_blue),
  }))

  return (
    <main className="bg-gray-100 py-4 md:py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-block rounded-full w-8 h-8 hover:opacity-70">
          <div className="flex items-center justify-center bg-red-400 w-8 h-8 rounded-full mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
        </Link>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center p-4">
          <div className="p-4 flex-col">
            <h1 className="text-black text-xl font-bold">{product?.title}</h1>
            <h2 className="text-black text-lg font-bold">
              Categoria: {product?.category}
            </h2>
            <h2 className="text-black text-lg font-bold">
              Fecha del ultimo registro:{" "}
              {product!.prices[product!.prices.length - 1].date}
            </h2>
            <h2 className="text-black text-lg font-bold">
              Ultimo precio registrado: $
              {product!.prices[
                product!.prices.length - 1
              ].price.toLocaleString()}
            </h2>
          </div>
          <img
            //alt={product.title}
            //width={192}
            //height={192}
            className="w-48 h-48 object-cover rounded-md"
            src={product!.image}
          />
        </div>
        <ProductChart data={chartData} />
      </div>
    </main>
  )
}
