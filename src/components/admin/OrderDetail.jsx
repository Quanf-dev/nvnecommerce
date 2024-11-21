import { useEffect, useState } from "react";
import getAllOrderService from "../../services/getAllOrderService";
import deleteProductOrderService from "./../../services/deleteProductOrderService";

const OrderDetail = () => {
  const getAllOrderFunction = getAllOrderService();
  const [getAllOrder, setGetAllOrder] = useState([]);
  const deleteProductOrderFunction = deleteProductOrderService();
  useEffect(() => {
    try {
      getAllOrderFunction(setGetAllOrder);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  }, []);
  console.log(getAllOrder);
  const handleDelete = (id) => {
    deleteProductOrderFunction(id);
  };
  return (
    <div>
      <div>
        <div className="py-5">
          {/* text  */}
          <h1 className="text-xl font-bold text-pink-300 ">All Order</h1>
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
                  Order Id
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Image
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Title
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Category
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Quantity
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Total Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Status
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Address
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Pincode
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Phone Number
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100"
                >
                  Action
                </th>
              </tr>
              {getAllOrder.map((order) => {
                console.log(order);
                return (
                  <>
                    {order.cartItems.map((item, index) => {
                      const {
                        id,
                        productImageUrl,
                        title,
                        category,
                        price,
                        quantity,
                      } = item;
                      return (
                        <tr key={index} className="text-pink-300">
                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                            {index + 1}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                            {id}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            <img src={productImageUrl} alt="img" />
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {title}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {category}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            ₹{price}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {quantity}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            ₹{price * quantity}
                          </td>

                          <td className="h-12 px-6 text-green-600 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {order.status}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {order.addressInfo.name}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {order.addressInfo.address}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {order.addressInfo.pincode}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {order.addressInfo.mobileNumber}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                            {order.email}
                          </td>

                          <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                            {order.date}
                          </td>

                          <td
                            onClick={() => handleDelete(order.id)}
                            className="h-12 px-6 text-red-500 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 "
                          >
                            Delete
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
