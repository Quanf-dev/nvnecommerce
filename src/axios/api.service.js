import axios from "axios";

export const apiGetPublicProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://vapi.vnappmob.com/api/v2/province/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicDistrict = (provinceId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://vapi.vnappmob.com/api/v2/province/district/${provinceId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPublicWard = (district_id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://vapi.vnappmob.com//api/v2/province/ward/${district_id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
