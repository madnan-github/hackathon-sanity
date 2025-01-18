'use client'
import Image from 'next/image'
import { Container } from '../container';
import { client } from "../../sanity/lib/client";
import { Image as Iimage } from "sanity";
import { useEffect, useState } from 'react';
import { urlFor } from '@/sanity/lib/image';

// Fetch products using the Sanity client
const fetchProducts = async (): Promise<IChef[]> => {
  const query = `*[_type == "chef"]{
    slug,
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available
  }`;
  return await client.fetch(query);
};

// Define Chef type
interface IChef {
  slug: string;
  name: string;
  position: string
  experience: number;
  specialty: string;
  image: Iimage;
  descriotion: string;
  available: boolean;
}


export default function OurChefs() {
  // const chefs = [
  //   { name: 'Tahmina Nuru', role: 'Chef', image: '/ourchef/p1.png' },
  //   { name: 'Johna Begum', role: 'Chef', image:  '/ourchef/p2.png' },
  //   { name: 'M Mohammed', role: 'Chef', image: '/ourchef/p3.png' },
  //   { name: 'Munna Kathy', role: 'Chef', image:  '/ourchef/p4.png' },
  //   { name: 'Tahmina Nuru', role: 'Chef', image:  '/ourchef/p5.png' },
  //   { name: 'Bisou dragon', role: 'Chef', image:  '/ourchef/p6.png' },
  //   { name: 'Karin Mustafa', role: 'Chef', image:  '/ourchef/p7.png' },
  //   { name: 'William Rumi', role: 'Chef', image:  '/ourchef/p8.png' },
  //   { name: 'Kate william ray', role: 'Chef', image:  '/ourchef/p9.png' },
  //   { name: 'Mahmud Mahi', role: 'Chef', image:  '/ourchef/p10.png' },
  //   { name: 'Asgar Rahman', role: 'Chef', image:  '/ourchef/p11.png' },
  //   { name: 'Mustafiz Holy', role: 'Chef', image:  '/ourchef/p12.png' },
  // ]

const [products, setProducts] = useState<IChef[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <Container>
    <div className=" mx-auto px-4 py-16 md:px-6 lg:px-8">
     
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((chef, index) => (
          <div key={index} className=" shadow-md overflow-hidden">
            <Image
              // src={chef.image}
              src={urlFor(chef.image).url()}
              alt={chef.name}
              width={312}
              height={379}
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-center">{chef.name}</h2>
              <p className="text-gray-600 mb-4 text-center">{chef.position}</p>
              <p className="text-gray-600 mb-4 text-center">Specialist in: {chef.specialty}</p>
              <p className="text-gray-600 mb-4 text-center">{chef.descriotion}</p>
              <p className="text-gray-600 mb-4 text-center">{chef.experience} Year's of Experience</p>
              {/* <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500">
                  <Instagram className="w-5 h-5" />
                </a>
              </div> */}


            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  )
}