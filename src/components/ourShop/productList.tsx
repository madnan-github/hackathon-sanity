// 'use client';
// // import { FaArrowsRotate, FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { Image as Iimage } from "sanity";


// // Fetch products using the Sanity client
// export const fetchProducts = async (): Promise<IProduct[]> => {
//   const query = `*[_type == "product"]{
//     name,
//     "slug": slug.current,
//     image,
//     category,
//     price,
//     price2,
//     rating,
//     sell
//   }`;
//   return await client.fetch(query); // Correctly fetch and return the data
// };

// // Define Product type
// interface IProduct {
//   name: string;
//   slug: string;
//   image: Iimage;
//   category: string;
//   price: number;
//   price2?: number;
//   rating?: number;
//   sell?: string;
// }

// const ProductList = async () => {
//   const data: IProduct[] = await fetchProducts();

//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {data.map(({ slug, image, name, price, price2, sell }) => (
//         <div
//           key={slug}
//           className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
//         >
//           <Link href={`/shop/${slug}`}>
//             <div className="relative group">
//               <Image
//                 src={urlFor(image).url()} // Correct usage of urlFor
//                 alt={name}
//                 width={200}
//                 height={200}
//                 className="object-cover w-full h-64"
//               />
//               <div className="absolute top-2 right-2 flex gap-2"></div>
//               {sell && (
//                 <span className="absolute top-2 left-2 bg-orange-600 text-white rounded-md px-2 text-sm">
//                   {sell}
//                 </span>
//               )}
//             </div>
//           </Link>
//           <div className="p-4">
//             <Link href={`/shop/${slug}`}>
//               <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
//                 {name}
//               </h3>
//             </Link>
//             <div className="flex items-center justify-between">
//               <span className="text-orange-500 font-bold">
//                 ${price.toFixed(2)}
//               </span>
//               {price2 && (
//                 <span className="text-gray-600 line-through">
//                   ${price2.toFixed(2)}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';
import { Product } from './productData';
import { FaArrowsRotate } from "react-icons/fa6";
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@radix-ui/react-hover-card';

interface ProductListProps {
  filteredProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ filteredProducts }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <div key={product.id} className="max-w-[312px] max-h-330px rounded-lg shadow-md overflow-hidden">
          <Link href={`/shop/${product.slug}`}>
          
            <HoverCard>
              <HoverCardTrigger>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312}
                  height={267}
                  className="w-full h-48 object-cover"
                />
              </HoverCardTrigger>
              <HoverCardContent
                className={`w-[40.14px] h-[34px] bg-orange-500 text-white text-center mt-[-100px] ml-[-70px] absolute`}
              >
                <FaArrowsRotate className="absolute w-[17.98px] h-[17.5px] ml-[10px] mt-[5px]" />
              </HoverCardContent>
              <HoverCardContent
                className={`w-[40.14px] h-[34px] bg-orange-500 text-white text-center mt-[-100px] ml-[-20px] absolute`}
              >
                <MdOutlineShoppingBag className="absolute w-[17.98px] h-[17.5px] ml-[10px] mt-[5px]" />
              </HoverCardContent>
              <HoverCardContent
                className={`w-[40.14px] h-[34px] bg-white text-orange-500 text-center mt-[-100px] ml-[30px] absolute`}
              >
                <FaRegHeart className="absolute w-[17.98px] h-[17.5px] ml-[10px] mt-[5px]" />
              </HoverCardContent>
            </HoverCard>
          </Link>

          <div className="p-4">
            {product.sell && (
              <p className={`w-[52px] h-[22px] absolute mt-[-200px] mr-40 text-white bg-orange-600 rounded-md`}>
                <span className='ml-3 text-[14px]'>{product.sell}</span>
              </p>
            )}
            <Link href={`/shop/${product.slug}`}>
              <h3 className="font-semibold text-lg mb-2 text-black hover:text-orange-500 transition-colors">{product.name}</h3>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
              <div className="flex mr-36">
                {product.price2 && (
                  <p className={`text-gray-600 relative inline-block`}>
                    <span className="absolute inset-0 border-b-2 border-gray-600 transform -translate-y-1/2"></span>
                    ${product.price2.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;