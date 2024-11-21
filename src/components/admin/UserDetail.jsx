import { useEffect, useState } from "react";
import getAllUserService from "../../services/getAllUserService";

const UserDetail = () => {
  const [getAllUser, setGetAllUser] = useState([]);
  const getAllUserFunction = getAllUserService();
  useEffect(() => {
    try {
      getAllUserFunction(setGetAllUser);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  }, []);
  console.log(getAllUser);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between py-5">
          {/* text  */}
          <h1 className="text-xl font-bold text-pink-300 ">All User</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-pink-400 border border-collapse border-pink-100 sm:border-separate">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara"
                >
                  S.No.
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara"
                >
                  Uid
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara"
                >
                  Role
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara"
                >
                  Date
                </th>
              </tr>
              {getAllUser.map((value, index) => {
                return (
                  <tr key={index} className="text-pink-300">
                    <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                      {index + 1}
                    </td>

                    <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                      {value.name}
                    </td>

                    <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                      {value.email}
                    </td>

                    <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                      {value.uid}
                    </td>

                    <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                      {value.role}
                    </td>

                    <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                      {value.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
