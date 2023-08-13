import connectDB from "@/libs/mongodb"
import Mexx_product from "@/models/mexx_product"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  await connectDB()

  const { id } = params

  const products = await Mexx_product.find({ id: id })

  return NextResponse.json({ products })
}
