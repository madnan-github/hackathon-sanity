// import { ChefHatIcon as Chef, Utensils, Clock, Users } from 'lucide-react'

// const stats = [
//   { icon: Chef, value: 420, label: 'Professional Chefs' },
//   { icon: Utensils, value: 320, label: 'Items Of Food' },
//   { icon: Clock, value: 30, label: 'Years Of Experienced' },
//   { icon: Users, value: 220, label: 'Happy Customers' },
// ]

// export default function Statistics() {
//   return (
//     <section className="max-w-[1929px] mx-auto py-16 px-6 bg-gray-800">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {stats.map((stat, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <stat.icon className="w-12 h-12 text-orange-500 mb-2" />
//             <span className="text-3xl font-bold">{stat.value}{stat.label === 'Years Of Experienced' && '+'}</span>
//             <span className="text-sm text-gray-400">{stat.label}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'
import { ChefHatIcon as Chef, Utensils, Clock, Users } from 'lucide-react'

const stats = [
  { img: "/icons/001.png" , value: 420, label: 'Professional Chefs' },
  { img: "/icons/002.png", value: 320, label: 'Items Of Food' },
  { img:"/icons/003.png" , value: 30, label: 'Years Of Experienced' },
  { img:"/icons/004.png" , value: 220, label: 'Happy Customers' },
]

export default function Statistics() {
  return (
       <section className="max-w-[1920px] h-[469px] mx-auto py-16 px-6 relative bg-[#0D0D0D] ">
    <Image
       src="/icons/bgpic.png"
       alt="Hero dish"
       layout="fill"
       objectFit="cover"
       className="z-0"
     />
     <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col md:flex-row ">
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-40 mx-auto items-center md:mt-0 mt-10 ">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center mx-auto ">
             <Image
                className=""
                alt="icon" 
                width={120}
                height={120}
                src={stat.img}
              />
            <span className="text-sm text-white mt-5">{stat.label}</span>
            <span className="text-3xl font-bold text-white mt-5 ">{stat.value}{stat.label === 'Years Of Experienced' && '+'}</span>
           
          </div>
        ))}
      </div> 
      </div>
    </section>
  )
}
