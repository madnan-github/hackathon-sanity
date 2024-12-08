import Image from 'next/image'

const chefs = [
  { name: 'D.Estwood', role: 'Head Chef', image: '/ourchef/001.png' },
  { name: 'D.Scoriesh', role: 'Assistant Chef', image: '/ourchef/002.png' },
  { name: 'M. William', role: 'Advertising Chef', image: '/ourchef/003.png' },
  { name: 'W.Readfroad', role: 'Chef', image: '/ourchef/004.png' },
]

export default function Chefs() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6 bg-[#0D0D0D]">
    <div className="w-[1282px] mx-auto">
    <h2 className="text-[#ff9F0D] font-greatvibes text-center text-2xl leading-10 mb-2">Chefs</h2>
    <h1 className="text-5xl font-bold text-center text-[#ff9F0D] leading-[56px] mb-8">Me<span className='text-white'>et Our Chef</span></h1>
      {/* <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">Meet Our Chef</span>
      </h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {chefs.map((chef, index) => (
          <div key={index} className="text-center w-[312px] h-[391px]]">
            <Image src={chef.image} alt={chef.name} width={200} height={200} className="rounded-lg mx-auto mb-4" />
              <h3 className="font-bold text-white">{chef.name}</h3>
              <p className=" text-white">{chef.role}</p>
        
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          See More
        </button>
      </div>
      </div>
      
    </section>
  )
}

