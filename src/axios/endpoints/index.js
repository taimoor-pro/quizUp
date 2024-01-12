import { client } from "../axios";

export const endpoints = {
  getPlatformInsights: () => {
    return client.get("/apis/platform_insights-2.php");
  },

  register: (data, headers) => {
    return client.post("/apis/register.php", data, { headers });
  },
};
