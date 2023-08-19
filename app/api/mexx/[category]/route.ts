import connectDB from "@/libs/mongodb"
import Mexx_product from "@/models/mexx_product"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  await connectDB()

  const { category } = params

  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 7)

  const products = await Mexx_product.aggregate([
    {
      $match: {
        $expr: {
          $gt: [
            {
              $dateFromString: {
                dateString: "$date",
                format: "%d/%m/%Y",
              },
            },
            lastWeek,
          ],
        },
      },
    },
    {
      $match: {
        category: category.replace(/\-/g, " "),
      },
    },
  ])

  return NextResponse.json({ products })
}
