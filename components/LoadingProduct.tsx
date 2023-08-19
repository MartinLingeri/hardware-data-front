export default function LoadingProduct() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center p-4">
        <div className="p-4 flex-col">
          <h1 className="text-black text-xl font-bold">Cargando titulo...</h1>
          <h2 className="text-black text-lg font-bold">
            Categoria: cargando categoria...
          </h2>
          <h2 className="text-black text-lg font-bold">
            Fecha del ultimo registro: cargando fecha...
          </h2>
          <h2 className="text-black text-lg font-bold">
            Ultimo precio registrado: $ cargando precio...
          </h2>
        </div>
        <div role="status" className="animate-pulse">
          <div className="w-48 h-48 object-cover rounded-md"></div>
        </div>
      </div>
    </>
  )
}
