import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";

const CartMenu = ({ onCloseCart, isCartOpen }) => {
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
                    <ul className="-my-8">
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0">
                          <img
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                            src="https://images.pexels.com/photos/5432532/pexels-photo-5432532.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                Nike Air Max 2019
                              </p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                36EU - 4US
                              </p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                $259.00
                              </p>

                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                    -
                                  </button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                    1
                                  </div>
                                  <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
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
                              <RiDeleteBin2Line className="hover:text-red-400" />
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Subtotal</p>
                      <p className="text-lg font-semibold text-gray-900">
                        $399.00
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
                    <p className="text-2xl font-semibold text-gray-900">
                      <span className="text-xs font-normal text-gray-400">
                        CAD
                      </span>{" "}
                      408.00
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      Checkout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
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
