import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const resturantCamelizeData = (result) => {
  const mappeddResults = result.results.map((resturant) => {
    return {
      ...resturant,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
    };
  });
  return camelize(mappeddResults);
};
