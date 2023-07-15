import connectDB from "@/libs/mongodb"
import Mexx_product from "@/models/mexx_product"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()

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
  ])
  return NextResponse.json({products})
}
