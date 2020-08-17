import HTTP from "./client";

export const getIngredients = function() {
  return HTTP.get("/ingredients").then(response => response.data);
};

export const createIngredient = function(ingredient) {
  const formData = new FormData();

  formData.append("name", ingredient.name);
  formData.append("calories", ingredient.calories);

  return HTTP.post("/ingredients/", formData);
};
