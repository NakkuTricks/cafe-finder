import HTTP from "./client";

export const getDishes = function(id) {
  return HTTP.get(`/dishes/?place=${id}`).then(response => response.data);
};

export const getDishById = function(id) {
  return HTTP.get(`/dishes/${id}`).then(response => response.data);
};

export const createDish = function(dish, placeId) {
  const formData = new FormData();
  formData.append("name", dish.name);
  formData.append("price", dish.price);
  formData.append("photo", dish.photo);

  for (let elem of dish.ingredients) {
    formData.append("ingredients", elem.id);
  }
  formData.append("place", placeId);

  return HTTP.post("/dishes/", formData);
};

export const updateDish = function(dish, dishId) {
  const formData = new FormData();
  formData.append("name", dish.name);
  formData.append("price", dish.price);
  if (typeof dish.photo !== "string") {
    formData.append("photo", dish.photo);
  }
  for (let elem of dish.ingredients) {
    formData.append("ingredients", elem.id);
  }

  return HTTP.patch(`/dishes/${dishId}`, formData).then(
    response => response.data
  );
};

export const deleteDish = function(id) {
  return HTTP.delete(`/dishes/${id}`);
};
