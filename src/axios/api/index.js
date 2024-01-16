import _ from "lodash";
import { toast } from "react-toastify";
import { endpoints } from "../endpoints";

export const getFackData = () => {
  return endpoints
    .getFackData()
    .then((res) => {
      if (res.status === 200) {
        console.log("Successfully !!", res);
        return res.data;
      }
    })
    .catch((err) => {
      console.log("Error message", err);
    });
};

export const getPlatformInsights = (setData, setLoading) => {
  return endpoints
    .getPlatformInsights()
    .then((res) => {
      if (res.status === 200) {
        setData(res.data.data);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log("Error message", err);
    });
};

export const getResourcesByIdentifier = (id, setData) => {
  return endpoints
    .getResourcesByIdentifier(id)
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => console.log("ERROR", err));
};
