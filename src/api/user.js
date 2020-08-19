import HTTP from "./client";

export const create = function(user) {
  const formData = new FormData();

  formData.append("username", user.username);
  formData.append("password", user.password);

  return HTTP.post("/users/", formData);
};

export const login = function(user) {
  const formData = new FormData();

  formData.append("username", user.username);
  formData.append("password", user.password);

  return HTTP.post("/auth/token/", formData).then(res => res.data);
};
