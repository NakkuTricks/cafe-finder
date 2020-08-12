import HTTP from "./client";

export const getPlaces = function() {
  return HTTP.get("/places").then(response => response.data);
};

export const createPlace = function(place) {
  const formData = new FormData();
  formData.append("name", place.name);
  formData.append("address", place.address);
  formData.append("image", place.image);
  formData.append("from_hour", place.from_hour);
  formData.append("to_hour", place.to_hour);
  return HTTP.post("/places/", formData);
};

export const updatePlace = function(place) {
  const formData = new FormData();
  formData.append("name", place.name);
  formData.append("address", place.address);
  formData.append("from_hour", place.from_hour);
  formData.append("to_hour", place.to_hour);
  if (typeof place.image !== "string") {
    formData.append("image", place.image);
  }

  return HTTP.patch(`/places/${place.id}`, formData).then(
    response => response.data
  );
};

export const deletePlace = function(id) {
  return HTTP.delete(`/places/${id}`);
};
