
import Image from 'next/image'
import { Container } from '../container';
const categories = [
  { name: 'Salad', image: '/foodcategories/001.png' },
  { name: 'Burger', image: '/foodcategories/002.png' },
  { name: 'Pasta', image: '/foodcategories/003.png' },
  { name: 'Dessert', image: '/foodcategories/004.png' },
]

export default function FoodCategories() {
  return (
       <Container>
    <section className=" mx-auto bg-[#0D0D0D] py-14 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        <span><h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">Food Category</h2></span>
        <span className="text-orange-500">Ch</span>oose Food Item
      </h2>
      <div className="md:max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {categories.map((category, index) => (
          <div  key={index} className="relative group cursor-pointer mr-9">
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Container>
  )
}


//__________________________________________________
// "use client"
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Container } from "../container";
// import { fetchProducts, IProduct } from "../../components/productdata";
// import { Carousel } from "@/components/ui/carousel"; // Assuming ShadCN carousel component

// export default function FoodCategories() {
//   const [categories, setCategories] = useState<IProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProducts();
//         // Extract unique categories
//         const uniqueCategories = Array.from(
//           new Map(
//             data.map((product) => [product.category, product])
//           ).values()
//         );
//         setCategories(uniqueCategories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="text-white text-center">Loading...</div>;
//   }

//   return (
//     <Container>
//       <section className="mx-auto bg-[#0D0D0D] py-14 px-6">
//         <h2 className="text-3xl font-bold text-white text-center mb-8">
//           <span>
//             <h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">
//               Food Category
//             </h2>
//           </span>
//           <span className="text-orange-500">Ch</span>oose Food Item
//         </h2>
//         <Carousel>
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="relative group cursor-pointer flex-shrink-0 w-[300px] mr-4"
//             >
//               <Image
//                 src={category.image.url} // Sanity image URL
//                 alt={category.category}
//                 width={300}
//                 height={300}
//                 className="rounded-lg"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                 <h3 className="text-white text-xl font-bold">
//                   {category.category}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </section>
//     </Container>
//   );
// }
