import React, { useEffect, useState } from "react";
import getAllUserService from "../../services/getAllUserService";
import Pagination from "../pagination/Pagination";

const UserDetail = () => {
  const [getAllUser, setGetAllUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const getAllUserFunction = getAllUserService();

  useEffect(() => {
    try {
      getAllUserFunction(setGetAllUser);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = getAllUser.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-10 py-2 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full pl-3 mt-1 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Tất cả người dùng ({getAllUser.length})
          </h3>
          <p className="text-slate-500">Xem và quản lý tất cả người dùng</p>
        </div>
      </div>

      {/* Table */}
      <div className="relative flex flex-col w-full min-h-44">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr className="border-b border-slate-300 bg-slate-50">
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                S.No.
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Name
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Email
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Role
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.reverse().map((user, index) => (
              <tr key={user.uid} className="hover:bg-slate-50">
                <td className="p-4 py-5 border-b border-slate-200">
                  {index + 1}
                </td>
                <td className="p-4 py-5 border-b border-slate-200">
                  {user.name}
                </td>
                <td className="p-4 py-5 border-b border-slate-200">
                  {user.email}
                </td>
                <td className="p-4 py-5 border-b border-slate-200">
                  {user.role}
                </td>
                <td className="p-4 py-5 border-b border-slate-200">
                  {user.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        active={currentPage}
        setActive={handlePageChange}
        totalPages={Math.ceil(getAllUser.length / itemsPerPage)}
      />
    </div>
  );
};

export default UserDetail;
