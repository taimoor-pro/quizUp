import { client } from "../axios";

export const endpoints = {
  getAdminCaseList: () => {
    return client.get("api/Loyalla/AdminCaseList");
  },

  login: (data) => {
    return client.post("login", data);
  },

  register: (data, headers) => {
    return client.post("/apis/register.php", data, { headers });
  },
};
