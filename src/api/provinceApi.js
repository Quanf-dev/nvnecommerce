import axios from "axios";

const BASE_URL = "https://vapi.vnappmob.com/api/v2/province";

export const apiGetPublicProvinces = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const apiGetPublicDistrict = async (provinceId) => {
  try {
    const response = await axios.get(`${BASE_URL}/district/${provinceId}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const apiGetPublicWard = async (districtId) => {
  try {
    const response = await axios.get(`${BASE_URL}/ward/${districtId}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
