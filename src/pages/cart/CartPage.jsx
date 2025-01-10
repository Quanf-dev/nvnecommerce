import { useEffect } from "react";
import useCart from "../../hooks/useCart";
import CartSummary from "../../components/cartSummary/CartSummary";
import CartItem from "../../components/cartItem/CartItem";
import CartCheckoutTrack from "../../components/cartCheckoutTrack/CartCheckoutTrack";
import LayoutHome from "../../layout/LayoutHome";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Track from "../../components/track/Track";

const CartPage = () => {
  const { cartItems, incrementCart, decrementCart, deleteCart } = useCart();

  const cartItemTotal = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <CartCheckoutTrack />
      <LayoutHome>
        <div className="container px-4 mx-auto max-w-7xl lg:px-0">
          <div className="max-w-2xl py-8 mx-auto lg:max-w-7xl">
            <form className="mt-4 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <section
                aria-labelledby="cart-heading"
                className="bg-white rounded-lg lg:col-span-8"
              >
                {cartItems.length > 0 ? (
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="border-b">
                        <th className="relative px-4 py-2 text-xl font-semibold text-left text-black ">
                          Sản phẩm
                        </th>
                        <th className="px-4 py-2 text-xl font-semibold text-left text-black">
                          Số lượng
                        </th>
                        <th className="px-10 py-2 text-xl font-semibold text-left text-black">
                          Đơn Giá
                        </th>
                        <th className="px-4 py-2 text-xl font-semibold text-left text-black">
                          Thao tác
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <CartItem
                          key={index}
                          item={item}
                          incrementCart={incrementCart}
                          decrementCart={decrementCart}
                          deleteCart={deleteCart}
                        />
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="py-8 text-xl text-center text-black">
                    Không có sản phẩm trong giỏ hàng
                  </div>
                )}
              </section>
              <CartSummary
                cartItemTotal={cartItemTotal}
                cartTotal={cartTotal}
              />
            </form>
          </div>
        </div>
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

export default CartPage;
