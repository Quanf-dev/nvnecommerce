import Layout from "../../components/layout/Layout";
const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    href: "#",
    price: "₹61,999",
    color: "Orange",
    imageAlt: "Nike Air Force 1 07 LV8",
    quantity: 1,
  },
];

const UserDashboard = () => {
  return (
    <Layout>
      <div className="container px-4 py-5 mx-auto lg:py-8">
        {/* Top  */}
        <div className="top ">
          {/* main  */}
          <div className="py-5 border border-pink-100 bg-pink-50 rounded-xl">
            {/* image  */}
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
            </div>
            {/* text  */}
            <div className="">
              <h1 className="text-lg text-center ">
                <span className="font-bold ">Name :</span> Kamal Nayan Upadhyay
              </h1>
              <h1 className="text-lg text-center ">
                <span className="font-bold ">Email :</span> test@gmail.com
              </h1>
            </div>
          </div>
        </div>

        {/* bottom  */}
        <div className="bottom">
          {/* main 1 */}
          <div className="max-w-6xl px-2 mx-auto my-4 md:my-6 md:px-0">
            {/* text  */}
            <h2 className="text-2xl font-bold lg:text-3xl">Order Details</h2>

            {/* main 2 */}
            <div className="flex flex-col mt-5 overflow-hidden border border-pink-100 rounded-xl md:flex-row">
              {/* main 3  */}
              <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                {/* left  */}
                <div className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-black">
                        Order Id
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        #74557994327
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold">Date</div>
                      <div className="text-sm font-medium text-gray-900">
                        4 March, 2023
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold">Total Amount</div>
                      <div className="text-sm font-medium text-gray-900">
                        ₹84,499
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order Status</div>
                      <div className="text-sm font-medium text-green-800">
                        Confirmed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right  */}
              <div className="flex-1">
                <div className="p-8">
                  <ul className="divide-y divide-gray-200 -my-7">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                      >
                        <div className="flex items-stretch flex-1">
                          <div className="flex-shrink-0">
                            <img
                              className="object-contain w-20 h-20 border border-gray-200 rounded-lg"
                              src={product.imageSrc}
                              alt={product.imageSrc}
                            />
                          </div>

                          <div className="flex flex-col justify-between ml-5">
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-900">
                                {product.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product.color}
                              </p>
                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-500">
                              x {product.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between ml-auto">
                          <p className="text-sm font-bold text-right text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
