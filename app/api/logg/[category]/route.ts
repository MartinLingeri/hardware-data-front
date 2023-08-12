import connectDB from "@/libs/mongodb"
import Logg_product from "@/models/logg_product"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  await connectDB()

  const { category } = params

  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 7)

  const products = await Logg_product.aggregate([
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
        category: category,
      },
    },
  ])
  return NextResponse.json({ products })
}
