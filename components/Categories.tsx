"use client"

import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
} from "next/navigation"
import { use, useEffect, useState } from "react"
import { categories } from "./Category"

export default function Categories() {
  const router = useRouter()
  const pathname = usePathname()
  const useParamsCategory = useParams()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState(categories[0].value)

  useEffect(() => {
    if (useParamsCategory.category) setCategory(useParamsCategory.category)
    const params = new URLSearchParams(window.location.search)
    const searchQuery = params.get("search") ?? ""
    setSearch(searchQuery)
  }, [useParamsCategory, search])

  function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value
    if (Boolean(useParamsCategory.category)) router.replace(`${category}`)
    else router.push(`category/${category}`)
  }

  return (
    <div className="mx-9 mb-9">
      <select
        id="categories"
        className="relative p-4 rounded-lg block w-full text-sm text-gray-900 bg-gray-50 shadow-md focus:shadow-xl focus:border-black"
        value={category}
        onChange={handleChangeSelect}
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.value.replace(/\-/g, " ")}
          </option>
        ))}
      </select>
    </div>
  )
}
