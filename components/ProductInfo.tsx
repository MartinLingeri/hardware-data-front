import { getProduct } from "@/components/Product"
import ProductChart from "./ProductChart"

type Props = {
  id?: string
  store: string
}

export default async function ProductInfo(props: Props) {
  const id = props.id ?? ""
  const product = await getProduct(`${process.env.API}/${props.store}/id/${id}`)

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
    <>
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
            {product!.prices[product!.prices.length - 1].price.toLocaleString()}
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
    </>
  )
}
