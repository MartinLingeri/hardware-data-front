import { ObjectId } from "mongoose"

export type Product = {
  _id: ObjectId
  id: string
  image: string
  title: string
  category: string
  price: string
  stock: string
  date: string
  dolar_oficial: string
  oficial_price: number
  dolar_blue: string
  blue_price: number
}

export type GroupedProduct = {
  id: number
  title: string
  image: string
  category: string
  prices: {
    date: string
    stock: string
    price: number
    dolar_oficial: number
    oficial_price: number
    dolar_blue: number
    blue_price: number
  }[]
}

export const getProducts = async (url: string) => {
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 * 60 * 24 },
    })

    if (!res.ok) throw new Error(res.statusText)

    const { products: listaOriginal }: { products: Product[] } =
      await res.json()

    const listaTransformada: GroupedProduct[] = listaOriginal.reduce<
      GroupedProduct[]
    >((acumulador, elemento) => {
      const {
        id,
        image,
        title,
        category,
        price,
        stock,
        date,
        dolar_oficial,
        oficial_price,
        dolar_blue,
        blue_price,
      } = elemento
      const itemExistente = acumulador.find((item) => item.id === parseInt(id))

      if (itemExistente) {
        itemExistente.prices.push({
          date: date,
          stock: stock,
          price: parseFloat(price.replace(/\./g, '')),
          dolar_oficial: parseFloat(dolar_oficial),
          oficial_price: oficial_price,
          dolar_blue: parseFloat(dolar_blue),
          blue_price: blue_price,
        })
      } else {
        acumulador.push({
          id: parseInt(id),
          title: title,
          image: image,
          category: category,
          prices: [
            {
              date: date,
              stock: stock,
              price: parseFloat(price.replace(/\./g, '')),
              dolar_oficial: parseFloat(dolar_oficial),
              oficial_price: oficial_price,
              dolar_blue: parseFloat(dolar_blue),
              blue_price: blue_price,
            },
          ],
        })
      }

      return acumulador
    }, [])

    return listaTransformada
  } catch (error) {
    console.log(error)
  }
}
