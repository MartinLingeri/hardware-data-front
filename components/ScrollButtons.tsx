'use client'


export default function ScrollButtons() {
  const scrollToSection = (targetId:string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col gap-2 fixed bottom-4 right-8 z-50 ">
      <button
        className="p-3 bg-red-700 text-white rounded-md shadow hover:bg-red-500"
        onClick={()=>scrollToSection("mexx")}
      >
        Mexx
      </button>
      <button
        className="p-3 bg-green-700 text-white rounded-md shadow hover:bg-green-500"
        onClick={()=>scrollToSection("logg")}
      >
        Logg
      </button>
    </div>
  )
}
