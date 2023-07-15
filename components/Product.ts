import { ObjectId } from "mongoose"

export type Product = {
  _id: ObjectId
  image: String
  title: String
  category: String
  price: String
  stock: String
  date: String
  dolar_oficial: String
  oficial_price: String
  dolar_blue: String
  blue_price: String
}
