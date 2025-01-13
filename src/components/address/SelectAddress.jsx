import React, { memo } from "react";

const SelectAddress = ({
  label,
  options,
  value,
  setValue,
  type,
  reset,
  name,
}) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <label htmlFor="phone" className="block text-sm font-medium text-black">
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        value={reset ? "" : value}
        onChange={(e) =>
          !name
            ? setValue(e.target.value)
            : setValue((prev) => ({ ...prev, [name]: e.target.value }))
        }
        id="select-address"
        className="w-full p-2 border border-gray-300 rounded-md outline-none "
      >
        <option value="">{`--Chọn ${label}--`}</option>
        {options?.map((item) => {
          return (
            <option
              key={
                type === "province"
                  ? item?.province_id
                  : type === "district"
                  ? item?.district_id
                  : item?.code
              }
              value={
                type === "province"
                  ? item?.province_id
                  : type === "district"
                  ? item?.district_id
                  : type === "ward"
                  ? item?.ward_id
                  : item?.code
              }
            >
              {type === "province"
                ? item?.province_name
                : type === "district"
                ? item?.district_name
                : type === "ward"
                ? item?.ward_name
                : item?.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default memo(SelectAddress);
