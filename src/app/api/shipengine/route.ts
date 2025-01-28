
// import { shipEngine } from "@/helper/shipEngine";
// import { NextRequest } from "next/server"


// export async function GET() {
//     return new Response(JSON.stringify({message:"shipengine Testing"}))
// }

// export async function POST(request:NextRequest) {
//     const {shipToAddress,packages}= await request.json();
//     try{
//         const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
//             shipment:{
//                 shipTo:shipToAddress,
//                 shipFrom:{
//                     // company owner detail
//                     name:"buyer",
//                     phone:"0317*******",
//                     addressLine1:"address 1",
//                     addressLine2:"address 2",
//                     cityLocality:"karachi",
//                     stateProvince:"IL",
//                     postalCode:"12345",
//                     countryCode:"PK",
//                     addressResidentialIndicator:"no",
//                     },
//                     packages:packages,
//             },
//             rateOptions:{
//                 carrierIds:[
//                     process.env.SHIPENGINE_DHL || "",
//                     process.env.SHIPENGINE_FedEx || "",
//                     process.env.SHIPENGINE_UPS || "",
//                 ].filter(Boolean)
//             }
//         });
//         return new Response(JSON.stringify(shipmentDetails),{status:200});
//     }catch(error)
//     {
//         return new Response(JSON.stringify({message:"error"}))
//     }
// }


// // https://www.youtube.com/watch?v=oKjQiJnz2MM