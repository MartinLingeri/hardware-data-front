import connectDB from "@/libs/mongodb"
import Logg_product from "@/models/logg_product"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  await connectDB()

  const { id } = params

  const products = await Logg_product.find({ id: id })

  return NextResponse.json({ products })
}
