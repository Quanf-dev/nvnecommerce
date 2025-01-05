import { useEffect, useState } from "react";
import getAllOrderService from "../../services/getAllOrderService";
import deleteProductOrderService from "./../../services/deleteProductOrderService";
import { RiDeleteBin2Line } from "@remixicon/react";
import { Spinner } from "@material-tailwind/react";

const OrderDetail = () => {
  const getAllOrderFunction = getAllOrderService();
  const [getAllOrder, setGetAllOrder] = useState([]);
  const deleteProductOrderFunction = deleteProductOrderService();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        await getAllOrderFunction(setGetAllOrder);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = (id) => {
    deleteProductOrderFunction(id);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-10 py-2 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full pl-3 mt-1 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Tất cả đơn hàng ({getAllOrder.length})
          </h3>
          <p className="text-slate-500">Xem và quản lý các đơn hàng của bạn</p>
        </div>
      </div>

      <div className="relative flex flex-col w-full min-h-44">
        {loading && (
          <Spinner
            className="absolute w-12 h-12 left-1/2 top-1/2"
            color="teal"
          />
        )}

        <table className="w-full text-left table-auto min-w-max ">
          <thead>
            <tr className="border-b border-slate-300 bg-slate-50">
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Mã đơn hàng
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Sản phẩm
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Tên
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Giá
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Tổng giá
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Trạng thái
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {getAllOrder.map((order) =>
              order.cartItems.map((item, index) => {
                const { id, productImageUrl, title, price, quantity } = item;
                return (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="p-4 py-5 border-b border-slate-200">
                      {order.id}
                    </td>
                    <td className="p-4 py-5 border-b border-slate-200">
                      <img
                        src={productImageUrl}
                        alt="img"
                        className="object-cover w-16 h-16 rounded"
                      />
                    </td>
                    <td className="p-4 py-5 border-b border-slate-200">
                      <p className="block text-sm font-semibold text-slate-800">
                        {title}
                      </p>
                    </td>
                    <td className="p-4 py-5 border-b border-slate-200">
                      ₹{price}
                    </td>
                    <td className="p-4 py-5 border-b border-slate-200">
                      ₹{price * quantity}
                    </td>
                    <td className="p-4 py-5 border-b border-slate-200">
                      <p className="text-sm text-green-600">{order.status}</p>
                    </td>
                    <td className="p-4 py-5 border-b border-slate-200">
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <RiDeleteBin2Line />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
