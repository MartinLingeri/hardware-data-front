import Products from "@/components/Products"
import Search from "@/components/Search"
import Categories from "@/components/Categories"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="mx-auto max-w-4xl">
        <Search />
        <Categories />
        <Products url="http://localhost:3000/api/mexx" store="mexx" />
      </div>
    </main>
  )
}
