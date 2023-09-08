import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import {
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
} from "../../redux/features/CartSlice";
import { RootState } from "../../redux/app/Store";
import { useNavigate } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";

const CartMenu = ({ onCloseCart, isCartOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  //CART AREA
  const cartProducts = useAppSelector((state: RootState) => state.cart);
  const allCartItems = useAppSelector((state: RootState) => state.cart.items);

  const removeItem = (itemID: number) => {
    dispatch(removeFromCart(itemID));
  };

  const increaseCount = (itemID: number) => {
    dispatch(increaseItemCount(itemID));
  };
  const decreaseCount = (itemID: number) => {
    dispatch(decreaseItemCount(itemID));
  };

  const itemTotalPrice = (item) => {
    const totalPrice = item.price * item.count;
    return totalPrice.toFixed(2);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Iterate through allCartItems and sum up the prices
    allCartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });

    return totalPrice;
  };
  const subtotal = () => {
    let tax = 8;
    let total = calculateTotalPrice() + tax;
    return total;
  };

  const logintocheckout = () => {
    navigate("/login");
  };
  const toCheckout = () => {
    onCloseCart(); // Close the cart
    navigate("/checkout");
  };
  return (
    <>
      <div
        className={`fixed w-[100%] h-[100%] z-50 left-0 top-0 overflow-auto bg-black bg-opacity-50 transition-opacity duration-500 ${
          isCartOpen ? "opacity-200" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed right-0 bottom-0 h-[100%] bg-white shadow-2xl">
          <div className="p-[30px] overflow-auto h-[100%]">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-primary">
                Your Shopping Cart
              </h1>
              <AiOutlineClose
                onClick={onCloseCart}
                className="cursor-pointer hover:text-red-600"
              />
            </div>
            <div className="flex">
              <div className="mx-auto mt-8 max-w-xl md:mt-12">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flow-root">
                    {allCartItems.length > 0 ? (
                      <ul className="-my-8">
                        {allCartItems.map((item) => (
                          <li
                            key={item.id}
                            className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                          >
                            <div className="shrink-0">
                              <img
                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                src={item.images[0].imageUrl}
                                alt={item.title}
                              />
                            </div>

                            <div className="relative flex flex-1 flex-col justify-between">
                              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                  <p className="text-base font-semibold text-gray-900">
                                    {item.title}
                                  </p>
                                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                    {item.category.name}
                                  </p>
                                  <p className="mx-0 mt-3 mb-0 text-md font-bold text-green-600 ">
                                    $ {item.price}
                                  </p>
                                </div>
                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                    $ {itemTotalPrice(item)}
                                  </p>
                                  <div className="sm:order-1 flex flex-col">
                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                      <button
                                        onClick={() => decreaseCount(item.id)}
                                        className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                      >
                                        -
                                      </button>
                                      <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                        {item.count}
                                      </div>
                                      <button
                                        onClick={() => increaseCount(item.id)}
                                        className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="absolute top-0 right-0 sm:bottom-auto sm:top-1/2 transform sm:-translate-y-1/2">
                                <button
                                  type="button"
                                  className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                >
                                  <RiDeleteBin2Line
                                    className="hover:text-red-400"
                                    onClick={() => removeItem(item.id)}
                                  />
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 text-xl">
                          Your Cart is Empty
                        </p>
                        <img
                          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Subtotal</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {calculateTotalPrice().toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Shipping</p>
                      <p className="text-lg font-semibold text-gray-900">
                        $8.00
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-green-500">
                      <span className="text-xs font-normal text-gray-400">
                        CAD
                      </span>{" "}
                      {calculateTotalPrice() > 0 ? subtotal().toFixed(2) : 0}
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    {allCartItems.length > 0 ? (
                      <button
                        type="button"
                        className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                        onClick={toCheckout}
                      >
                        Checkout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                        onClick={logintocheckout}
                      >
                        Checkout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
