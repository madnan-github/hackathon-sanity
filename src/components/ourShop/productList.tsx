
// import { useEffect, useState } from "react";
// // import { MdOutlineShoppingBag } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// // import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";
// // import { Image as Iimage } from "sanity";
// import React from "react";
// import { fetchProducts } from "../../components/productdata";
// import { IProduct } from "../../components/productdata";
// // Fetch products using the Sanity client
// // const fetchProducts = async (): Promise<IProduct[]> => {
// //   const query = `*[_type == "food"]{
// //     name,
// //     "slug": slug.current,
// //     image,
// //     category,
// //     price,
// //     price2,
// //     tag,
// //     available
// //   }`;
// //   return await client.fetch(query);
// // };

// // // Define Product type
// // interface IProduct {
// //   name: string;
// //   slug: string;
// //   image: Iimage;
// //   category: string;
// //   descriotion: string;
// //   price: number;
// //   price2?: number;
// //   tag: string[];
// //   available: boolean;
// // }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {products.map(({ slug, image, name, price, price2, descriotion, tag, available }) => (
//         <div
//           key={slug}
//           className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
//         >
//           <Link href={`/shop/${slug}`}>
//             <div className="relative group">
//               <Image
//                 src={urlFor(image).url()}
//                 alt={name}
//                 width={200}
//                 height={200}
//                 className="object-cover w-full h-64"
//               />
//               <div className="absolute top-2 right-2 flex gap-2"></div>
//               {tag && (
//                 <span className="absolute top-2 left-2 bg-orange-600 text-white rounded-md px-2 text-sm">
//                   {tag}
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

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PaginationProduct } from "@/components/pagination";
import { urlFor } from "../../sanity/lib/image";
import { fetchProducts } from "../../components/productdata";
import { IProduct } from "../../components/productdata";

const ITEMS_PER_PAGE = 6;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const currentPageData = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPageData.map(
          ({ slug, image, name, price, price2, descriotion, tag, available }) => (
            <div
              key={slug}
              className="max-w-[312px] rounded-lg shadow-md overflow-hidden"
            >
              <Link href={`/shop/${slug}`}>
                <div className="relative group">
                  <Image
                    src={urlFor(image).url()}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute top-2 right-2 flex gap-2"></div>
                  {tag && (
                    <span className="absolute top-2 left-2 bg-orange-600 text-white rounded-md px-2 text-sm">
                      {tag}
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/shop/${slug}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
                    {name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">
                    ${price.toFixed(2)}
                  </span>
                  {price2 && (
                    <span className="text-gray-600 line-through">
                      ${price2.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mt-12 flex justify-center text-orange-500">
        <PaginationProduct 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
