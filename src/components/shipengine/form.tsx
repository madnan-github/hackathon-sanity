"use client"
import { Weight } from 'lucide-react';
import React, { useRef, useState } from 'react';

const AddressForm = () => {
  const getName = useRef<HTMLInputElement>(null);
  const getPhone = useRef<HTMLInputElement>(null);
  const getAdd1 = useRef<HTMLInputElement>(null);
  const getAdd2 = useRef<HTMLInputElement>(null);
  const getCity = useRef<HTMLInputElement>(null);
  const getState = useRef<HTMLInputElement>(null);
  const getPcode = useRef<HTMLInputElement>(null);
  const getCcode = useRef<HTMLInputElement>(null);
  const getAddRes = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const payload = {
      shipToAddress:{
        name:getName.current?.value,
        phone:getPhone.current?.value,
        addressLine1:getAdd1.current?.value,
        addressLine2:getAdd2.current?.value,
        cityLocality:getCity.current?.value,
        stateProvince:getState.current?.value,
        postalCode:getPcode.current?.value,
        countryCode:getCcode.current?.value,
        addressResidentialIndicator:getAddRes.current?.value,
      },
      // addtocart item set krne hen
      packages:[
        {
          Weight:{value:5, unit:"ounce"},
          dimensions:{height:3, width:15, length:10, unit:"inch"},
        },
      ],
    };
     console.log("payload",payload)
     try{
      const res = await fetch("http://localhost:3000/api/shipengine",{
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload) 
       });
       const data = await res.json();
       console.log("Response from api", data)
     }catch(error){
      console.log("error")
     }
  };
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   addressLine1: '',
  //   addressLine2: '',
  //   cityLocality: '',
  //   stateProvince: '',
  //   postalCode: '',
  //   countryCode: '',
  //   addressResidentialIndicator: 'no',
  // });

  // const handleChange = (e:any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Process form data
  // };

  return (
    <form 
    onSubmit={handleSubmit}
    className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Address Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
        ref={getName}
          type="text"
          id="name"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">Phone</label>
        <input
         ref={getPhone}
          type="text"
          id="phone"
          name="phone"
          // value={formData.phone}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine1" className="block text-gray-700">Address Line 1</label>
        <input
         ref={getAdd1}
          type="text"
          id="addressLine1"
          name="addressLine1"
          // value={formData.addressLine1}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine2" className="block text-gray-700">Address Line 2</label>
        <input
         ref={getAdd2}
          type="text"
          id="addressLine2"
          name="addressLine2"
          // value={formData.addressLine2}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cityLocality" className="block text-gray-700">City/Locality</label>
        <input
         ref={getCity}
          type="text"
          id="cityLocality"
          name="cityLocality"
          // value={formData.cityLocality}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stateProvince" className="block text-gray-700">State/Province</label>
        <input
         ref={getState}
          type="text"
          id="stateProvince"
          name="stateProvince"
          // value={formData.stateProvince}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="postalCode" className="block text-gray-700">Postal Code</label>
        <input
         ref={getPcode}
          type="text"
          id="postalCode"
          name="postalCode"
          // value={formData.postalCode}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="countryCode" className="block text-gray-700">Country Code</label>
        <input
         ref={getCcode}
          type="text"
          id="countryCode"
          name="countryCode"
          // value={formData.countryCode}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressResidentialIndicator" className="block text-gray-700">Residential Indicator</label>
        <select
         ref={getAddRes}
          id="addressResidentialIndicator"
          name="addressResidentialIndicator"
          // value={formData.addressResidentialIndicator}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded mt-4 hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default AddressForm;
