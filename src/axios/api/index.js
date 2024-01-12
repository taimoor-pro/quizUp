import _ from "lodash";
import { toast } from "react-toastify";
import { convertHtmlToString } from "../../utils";
import { endpoints } from "../endpoints";
import { generateFile, getUnixTime } from "../../utils/generic.js";
import { locales } from "../../i18n/helper";
import { BiError } from "react-icons/bi";
import i18next from "i18next";
import { setStaticTopics, setTopics } from "../../redux/reducers/Facets";

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

