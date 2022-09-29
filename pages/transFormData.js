import React from 'react';

//## When we Communicate with THIRD-PARTY-APPLICATIONS i.e Payment methods, fetching Data etc, we Need to Transform Data Accordingly.

//#Pull The Response From Response.json
import Response from "./Response.json";

function transformData() {

  // //# Normal Way
//   // Crate a Variable to store JSON
//   const data = Response;

//   // Create a Variable to Push the Values, Make Sure this is LET, because we will push the Values
//   let goalData = []; 

//   data.map( (item) => {
      
//       // Create  a variable to FORM the Data
//       const arr = 
//       {
//           id: item.id,
//           product_details: {
//             // Use String interpolation Here
//               category: `${item.category.highlevel} - ${item.category.lowlevel}`,
//               name: item.title
//           },
//           price_data: {
//               price: item.price,
//               salesPrice: item.salesPrice
//           }
//       }
//       // Push the Formed data in goalData Variable
//       goalData.push(arr);
//   })

//   console.log(goalData);


//## SHORTER WAY 
const data = Response;

// Apply Map with DESTRUCTURING
// When we Destruture Always Use the Keys which we WANT in OUR DATA as Parameters
// We need NESTED Destructuring to Get highlevel and lowlevel KEYS inside the Category KEY
const goalData = data.map( ({ id, category, category: { highLevel, lowLevel },  title, price, salesPrice}) => {
  return {
    id: id,
    product_details: {
      category: `${highLevel} - ${lowLevel}`,
      name: title
    },
    price_data: {
      price: price,
      salesPrice: salesPrice
    },
        }
})

// // WithOut Destructuring
// const goalData = data.map( (item) => {
//      return {
//         id: item.id,
//         product_details: {
//           category: `${item.category.highLevel} - ${item.category.lowLevel}`,
//           name: item.title
//         },
//         price_data: {
//           price: item.price,
//           salesPrice: item.salesPrice
//         },
//       }
// })
console.log(goalData)

// // ## Using Reduce on Response
// const numbers = Response;
//   const totalNumbers = numbers.reduce( (total, curValue) => {
//     return total + curValue.price
//    }, 0)
//   console.log(totalNumbers);

  return (
    <div>
    </div>
  )
}

export default transformData
