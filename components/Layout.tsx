import React from "react"
import Search from "./Search"
import Categories from "./Categories"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <Search />
        <Categories />
        {children}
      </div>
    </main>
  )
}
