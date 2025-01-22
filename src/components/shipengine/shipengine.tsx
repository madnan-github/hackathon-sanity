// import React from 'react'
// import AddressForm from './form';

// export default async function Ship() {
//     const res = await fetch("http://localhost:3000/api/shipengine");
//     const message = await res.json()
//     console.log(message)
//   return (
//     <div>
// <AddressForm />
//     </div>
//   )
// }
"use client"
import React, { useEffect, useState } from 'react';
import AddressForm from './form'; // Update the import path if necessary

const Ship: React.FC = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/shipengine");
        const data = await res.json();
        setMessage(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching ship data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <AddressForm />
      <div>{message ? JSON.stringify(message) : "No data available"}</div>
    </div>
  );
};

export default Ship;
