import { mocks } from "./mock";
import camelize from "camelize";


export const itemRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};
export const itemTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant)=> {
    return {
        ...restaurant,
        
    };
  });
  console.log(mappedResults)
  return results;
};
// itemRequest()
//   .then(itemsTransform)
//   .then((transformedResponse) => {
//    // console.log(transformedResponse);
//   })
//   .catch((err) => {
//     console.log(error);
//   });
