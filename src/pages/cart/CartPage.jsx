import Layout from "../../layout/Layout";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import useCart from "../../hooks/useCart";
import BuyNowModalDialog from "../../components/buyNowDialog/BuyNowModalDialog";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, incrementCart, decrementCart, deleteCart } = useCart();

  const cartItemTotal = cartItems
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="container px-4 mx-auto max-w-7xl lg:px-0">
        <div className="max-w-2xl py-8 mx-auto lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="bg-white rounded-lg lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item, index) => {
                      const {
                        id,
                        title,
                        price,
                        productImageUrl,
                        quantity,
                        category,
                      } = item;
                      return (
                        <div key={index} className="">
                          <li className="flex py-6 sm:py-6 ">
                            <div className="flex-shrink-0">
                              <img
                                src={productImageUrl}
                                alt="img"
                                className="object-contain object-center w-24 h-24 rounded-md sm:h-38 sm:w-38"
                              />
                            </div>

                            <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                  <div className="flex justify-between">
                                    <h3 className="text-sm">
                                      <div className="font-semibold text-black">
                                        {title}
                                      </div>
                                    </h3>
                                  </div>
                                  <div className="flex mt-1 text-sm">
                                    <p className="text-sm text-gray-500">
                                      {category}
                                    </p>
                                  </div>
                                  <div className="flex items-end mt-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      ₹{price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <div className="flex mb-2">
                            <div className="flex min-w-24">
                              <button
                                onClick={() => decrementCart(id)}
                                type="button"
                                className="h-7 w-7"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="mx-1 text-center border rounded-md h-7 w-9"
                                value={quantity}
                              />
                              <button
                                onClick={() => incrementCart(id)}
                                type="button"
                                className="flex items-center justify-center h-7 w-7"
                              >
                                +
                              </button>
                            </div>
                            <div className="flex ml-6 text-sm">
                              <button
                                onClick={() => deleteCart(item)}
                                type="button"
                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                              >
                                <Trash size={12} className="text-red-500" />
                                <span className="text-xs font-medium text-red-500">
                                  Remove
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <h1>Not Found</h1>
                )}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-white rounded-md lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className="px-4 py-3 text-lg font-medium text-gray-900 border-b border-gray-200 sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className="px-2 py-4 space-y-1 ">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price ({cartItemTotal} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ {cartTotal}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">Free</dd>
                  </div>
                  <div className="flex items-center justify-between py-4 border-dashed border-y ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹ {cartTotal}
                    </dd>
                  </div>
                </dl>
                {/* Buy Now */}
                <div className="px-2 pb-4 font-medium text-green-700">
                  <div className="flex gap-4 mb-6">
                    <BuyNowModalDialog />
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
