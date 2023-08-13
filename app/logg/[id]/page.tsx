import { getProduct } from "@/components/Product"

export default async function ProductPage({
  params,
}: {
  params: { id?: string }
}) {
  const id = params.id ?? ""
  const product = await getProduct(`http://localhost:3000/api/logg/id/${id}`)

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{id}</p>
    </div>
  )
}
