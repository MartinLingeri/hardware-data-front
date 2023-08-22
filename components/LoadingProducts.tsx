type Props = {
  store: string
}

export default function LoadingProducts(props: Props) {
  return (
    <section className="grid justify-center mt-9">
      <div className="flex gap-2 items-center mb-2">
        <h1 className="text-black inline-block min-w-fit text-xl">
          {props.store.toUpperCase()} Productos
        </h1>
        <div className="bg-black w-full h-1 rounded-md">
        </div>
      </div>
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
