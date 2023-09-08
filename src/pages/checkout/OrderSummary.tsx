import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/app/Store";
import { getCurrentDate, getExpectedDate } from "./Date";
import { FiPhoneCall } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import {
  OrderSummaryState,
  setOrdersState,
} from "../../redux/features/OrderSummarySlice";
import { clearCart } from "../../redux/features/CartSlice";
import { useCreateOrderSummaryMutation } from "../../redux/service/OrderApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearAddress } from "../../redux/features/AddressSlice";

const OrderSummary: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //----------------------USER DETAILS AREA
  const loginUser = useAppSelector(
    (state: RootState) => state.auth.userDetails
  );

  //----------------------CART AREA

  const cartProducts = useAppSelector((state: RootState) => state.cart);
  const allCartItems = useAppSelector((state: RootState) => state.cart.items);
  const deliveryAddress = useAppSelector((state: RootState) => state.address);

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

  //----------------------CART AREA ENDS --------------------------------

  //----------------------REDUX MUTATION--------------------------------

  const [orderSummary, setOrderSummary] = useState<
    OrderSummaryState | undefined
  >();

  const [
    orderConfirmed,
    { data: orderConfirmResponse, isSuccess: orderConfirmSuccess },
  ] = useCreateOrderSummaryMutation();

  const orderItems = allCartItems.map((item) => {
    return {
      productId: item.id,
      productName: item.title,
      productBrand: item.brand,
      productColor: item.color.name,
      productSize: item.sizes[0].name, // You may need to adjust this based on your logic
      category: item.category.name,
      quantity: item.count,
      price: item.price,
      subtotal: item.price * item.count,
      images: item.images[0].imageUrl,
    };
  });

  // Create the delivery address object
  const createDeliveryAddress = {
    firstName: deliveryAddress?.firstName,
    lastName: deliveryAddress?.lastName,
    addressLine: deliveryAddress?.addressLine,
    phoneNumber: deliveryAddress?.phoneNumber,
    city: deliveryAddress?.city,
    province: deliveryAddress?.province,
    postalCode: deliveryAddress?.postalCode,
    country: deliveryAddress?.country,
  };

  const orderSummaryData = {
    orderId: "12345",
    userId: loginUser?.email,
    accFirstname: loginUser?.firstname,
    accLastname: loginUser?.lastname,
    accEmail: loginUser?.email,
    orderDate: getCurrentDate(),
    expectedDate: getExpectedDate(),
    status: "Order Placed",
    totalPrice: calculateTotalPrice().toFixed(2),
    deliveryAddress: createDeliveryAddress,
    orderItems: orderItems,
  };

  const confirmOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await orderConfirmed(orderSummaryData);
      toast.success("Order Placed");
    } catch (error) {
      console.error("Error confirming order:", error);
      toast.error("Error confirming order. Please try again later.");
    }
  };

  useEffect(() => {
    if (orderConfirmSuccess && orderConfirmResponse) {
      dispatch(setOrdersState(orderSummaryData));
      dispatch(clearAddress());
      dispatch(clearCart());
      navigate("orderconfirm");
    }
  }, [orderConfirmSuccess]);
  return (
    <>
      <ToastContainer />
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #13432
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            {getCurrentDate()}
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="bg-white flex flex-col justify-start items-start shadow-md rounded-md px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer's Cart
              </p>
              {allCartItems.length > 0 ? (
                <>
                  {allCartItems.map((item) => (
                    <div
                      key={item.id}
                      className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
                    >
                      <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img
                          className="w-full hidden md:block"
                          src={item.images[0].imageUrl}
                          alt={item.title}
                        />
                        <img
                          className="w-full h-full md:hidden"
                          src={item.images[0].imageUrl}
                          alt={item.title}
                        />
                      </div>
                      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                            {item.title}
                          </h3>
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-700">Catgory: </span>{" "}
                              {item.category.name}
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-700">Size: </span>
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-700">Color: </span>{" "}
                              {item.color.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className="text-base xl:text-lg leading-6">
                            $ {item.price}
                            {/* <span className="text-red-300 line-through">
                              {" "}
                              $45.00
                            </span> */}
                          </p>

                          <p className="text-base xl:text-lg leading-6 text-gray-800">
                            x {item.count}
                          </p>
                          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                            $ {itemTotalPrice(item)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-xl">Your Cart is Empty</p>
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      $ {calculateTotalPrice().toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                        VOUCHER CODE
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-600">-</p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-4 text-gray-600">$ 8</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    $ {calculateTotalPrice() > 0 ? subtotal().toFixed(2) : 0}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6 font-semibold text-gray-800">
                        DPD Delivery
                        <br />
                        <span className="font-normal">
                          Delivery within 4 Days
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold leading-6 ">
                    $ 8
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white  shadow-md w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0 ">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                    alt="avatar"
                  />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      {deliveryAddress?.firstName}&nbsp;{" "}
                      {deliveryAddress?.lastName}
                    </p>
                    <p className="text-sm leading-5 text-gray-600">
                      10 Previous Orders
                    </p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <FiPhoneCall />
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {deliveryAddress?.phoneNumber}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0 ">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {deliveryAddress?.addressLine}&nbsp;
                      <br />
                      {deliveryAddress?.city},&nbsp;
                      {deliveryAddress?.province}&nbsp;
                      {deliveryAddress?.postalCode}
                      <br />
                      {deliveryAddress?.country}
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button
                    type="submit"
                    onClick={confirmOrderSubmit}
                    className="flex justify-center hover:text-white gap-4 mt-6 md:mt-0 py-5 hover:bg-indigo-800 focus:outline-none transition-all hover:ease-in-out duration-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800"
                  >
                    Confirm Order <BsCheck2Circle className="text-green-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
