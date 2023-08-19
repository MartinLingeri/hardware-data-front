"use client"

import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { categories } from "./Category"

export default function Categories() {
  const router = useRouter()
  const [pathname, setPathname] = useState(usePathname())
  const [category, setCategory] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const categoryQuery = params.get("category") ?? ""
    setCategory(categoryQuery)
  }, [])

  function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value
    setCategory(category)
    router.replace(`category/${category}`)
  }

  return (
    <div className="mx-9 mb-9">
      <select
        id="categories"
        className="relative p-4 rounded-lg block w-full text-sm text-gray-900 bg-gray-50 shadow-md focus:shadow-xl focus:border-black"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.value}
          </option>
        ))}
      </select>
    </div>
  )
}
