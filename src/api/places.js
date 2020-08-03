import HTTP from "./client";

export const getPlaces = function() {
  return HTTP.get("/places");
};
