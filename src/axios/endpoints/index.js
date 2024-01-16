import { client } from "../axios";

export const endpoints = {
  getFackData: () => {
    return client.get("products");
  },

  register: (data, headers) => {
    return client.post("/apis/register.php", data, { headers });
  },
};
