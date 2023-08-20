import React from "react"
import Search from "./Search"
import Categories from "./Categories"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center w-full mb-9">
          <Link href="/" className="inline-block">
            <h1 className="text-black text-2xl font-extrabold text-center">
              Precios de Hardware
            </h1>
          </Link>
        </div>
        <Search />
        <Categories />
        {children}
      </div>
    </main>
  )
}
