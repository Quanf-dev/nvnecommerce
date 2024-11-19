const UserDetail = () => {
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
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Location Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Action
                </th>
              </tr>
              <tr className="text-pink-300">
                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                  1.
                </td>
                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                  {"name"}
                </td>
                <td className="h-12 px-6 text-green-500 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                  Edit
                </td>
                <td className="h-12 px-6 text-red-500 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                  Delete
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
