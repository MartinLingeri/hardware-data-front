import Products from "@/components/Products"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="mx-auto max-w-4xl">
        <Products url="http://localhost:3000/api/mexx" store="mexx" />
      </div>
    </main>
  )
}
