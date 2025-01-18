import { client } from "../sanity/lib/client";
import { Image as Iimage } from "sanity";


export const fetchProducts = async (): Promise<IProduct[]> => {
    const query = `*[_type == "food"]{
      name,
      "slug": slug.current,
      image,
      category,
      price,
      price2,
      tag,
      available
    }`;
    return await client.fetch(query);
  };
  
  // Define Product type
 export interface IProduct {
    name: string;
    slug: string;
    image: Iimage;
    category: string;
    descriotion: string;
    price: number;
    price2?: number;
    tag: string[];
    available: boolean;
  }

  