import React from "react";
import { useAppSelector } from "../../redux/hooks/Hooks";
import { RootState } from "../../redux/app/Store";
import { FaCcPaypal, FaCcStripe, FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { SiRazorpay } from "react-icons/si";
import { BsAlipay } from "react-icons/bs";
import { PiContactlessPayment } from "react-icons/pi";

import { RiVisaLine } from "react-icons/ri";
import axios from "axios";

const OrderConfirm = () => {
  const orderDetails = useAppSelector((state: RootState) => state.orderSummary);
  const user = useAppSelector((state: RootState) => state.auth);

  const handlePayment = () => {
    axios
      .post(`/create-checkout-session`, {
        orderDetails,
        userId: user.userDetails?.email,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <>
      <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
          <div className="w-full lg:w-9/12 xl:w-full">
            <img
              className="w-full hidden xl:block"
              src="https://i.ibb.co/RcMmXKc/Rectangle-19.png"
              alt="wardrobe "
            />
            <img
              className="w-full hidden md:block xl:hidden"
              src="https://i.ibb.co/ZhjHb0R/Rectangle-19-2.png"
              alt="wardrobe "
            />
            <img
              className="w-full md:hidden"
              src="https://i.ibb.co/sbV9CD2/Rectangle-19.png"
              alt="wardrobe "
            />
          </div>
          <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
            <h5 className="text-xl xl:text-2xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">
              Thankyou!
            </h5>
            <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-primary">
              Proceed to Payment
            </h3>
            <p className="text-base leading-2 mt-4 text-gray-800">
              <b>Order ID - Created</b>
              <br />
              Your has been created. Please Proceed to Payment.
            </p>
            <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
              {orderDetails.orderItems.map((orderItem) => (
                <div
                  key={orderItem.productId}
                  className="flex overflow-y-scroll md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full"
                >
                  <div className="w-40 md:w-32">
                    <img
                      className="hidden md:block"
                      src={orderItem.images}
                      alt={orderItem.productId}
                    />
                  </div>
                  <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                    <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                      <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                        {orderItem.productName}
                      </h3>
                      <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                        <p className="text-sm leading-none text-gray-600">
                          Size:{" "}
                          <span className="text-gray-800">
                            {" "}
                            {orderItem.productSize}
                          </span>
                        </p>
                        <p className="text-sm leading-none text-gray-600">
                          Quantity:{" "}
                          <span className="text-gray-800">
                            {" "}
                            {orderItem.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                      <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                        $ {orderItem.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
              <div className="flex justify-start items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                <div className="flex jusitfy-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4  text-gray-800">
                    Shipping Address
                  </p>
                  <p className="text-sm leading-2 text-gray-600">
                    <p>
                      {orderDetails.deliveryAddress?.firstName}&nbsp;
                      {orderDetails.deliveryAddress?.lastName}
                    </p>
                    <p>{orderDetails.deliveryAddress?.addressLine}</p>
                    <p>
                      {orderDetails.deliveryAddress?.city},&nbsp;
                      {orderDetails.deliveryAddress?.postalCode}
                    </p>
                    <p>
                      {orderDetails.deliveryAddress?.province},&nbsp;
                      {orderDetails.deliveryAddress?.country}
                    </p>
                  </p>
                </div>
                <div className="flex jusitfy-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4  text-gray-800">
                    Shipping Method
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    Standard - Takes up to 3 working days
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      $ {orderDetails.totalPrice - 8}
                    </p>
                  </div>
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                        Voucher
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-600">-</p>
                  </div>
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-4 text-gray-600">$8.00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    $ {orderDetails.totalPrice}
                  </p>
                </div>
                <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                  <button
                    onClick={handlePayment}
                    className=" flex justify-center items-center gap-4 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black"
                  >
                    Proceed to Pay <FaCcPaypal className="text-3xl " />
                    <RiVisaLine className="text-3xl" />
                  </button>
                </div>

                <div className="flex gap-3 justify-center text-center items-center">
                  <FaCcStripe className="text-3xl text-indigo-500" />
                  <FaGooglePay className="text-3xl " />
                  <FaApplePay className="text-3xl" />
                  <BsPaypal className="text-3xl text-indigo-800" />
                  <SiRazorpay className="text-3xl text-blue-500" />
                  <BsAlipay className="text-3xl text-red-800" />
                  <PiContactlessPayment className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
