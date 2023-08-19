type Props = {
  store: string
}

export default function LoadingProducts(props: Props) {
  return (
    <section className="grid justify-center">
      <h1 className="text-black text-xl">
        {props.store.toUpperCase()} Productos
      </h1>
      <div
        role="status"
        className="animate-pulse grid self-center gap-4 grid-cols-1fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
      </div>
    </section>
  )
}
