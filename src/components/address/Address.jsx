import React, { memo, useEffect, useState } from "react";
import {
  apiGetPublicDistrict,
  apiGetPublicProvinces,
  apiGetPublicWard,
} from "../../axios/api.service";
import SelectAddress from "./SelectAddress";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [ward, setWard] = useState("");
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchPublicProvince();
  }, []);
  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistrict(province);
      if (response.status === 200) {
        setDistricts(response.data?.results);
      }
    };
    province && fetchPublicDistrict();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);
  useEffect(() => {
    setWard(null);
    const fetchPublicWard = async () => {
      const response = await apiGetPublicWard(district);
      if (response.status === 200) {
        setWards(response.data?.results);
      }
    };
    province && fetchPublicWard();
    !province ? setReset(true) : setReset(false);
    !province && setWards([]);
  }, [district]);
  // useEffect(() => {
  //   setPayload((prev) => ({
  //     ...prev,
  //     address: `${
  //       district
  //         ? `${
  //             districts?.find((item) => item.district_id === district)
  //               ?.district_name
  //           },`
  //         : ""
  //     } ${
  //       province
  //         ? provinces?.find((item) => item.province_id === province)
  //             ?.province_name
  //         : ""
  //     }`,
  //     province: province
  //       ? provinces?.find((item) => item.province_id === province)
  //           ?.province_name
  //       : "",
  //   }));
  // }, [province, district]);
  return (
    <div className="col-span-2">
      <div className="flex items-center gap-4">
        <SelectAddress
          type="province"
          value={province}
          setValue={setProvince}
          options={provinces}
          label="Tỉnh/Thành phố"
        />
        <SelectAddress
          reset={reset}
          type="district"
          value={district}
          setValue={setDistrict}
          options={districts}
          label="Quận/Huyện"
        />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex-1">
          <SelectAddress
            reset={reset}
            type="ward"
            value={ward}
            setValue={setWard}
            options={wards}
            label="Xã/phường"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-black"
          >
            {" "}
            Địa chỉ chi tiết (số nhà, đường,...){" "}
            <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            id="address"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Address);
