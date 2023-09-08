import React, { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import OrderTracker from "./OrderTracker";
import axios from "axios";
import { useParams } from "react-router-dom";

interface OrderDetailsData {
  orderId: string;
  accEmail: string;
  orderDate: string;
  totalPrice: number;
  status: string;
  deliveryAddress: {
    firstName: string;
    lastName: string;
    addressLine: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
    phoneNumber: string;
  };
  orderItems: {
    images: string;
    productName: string;
    productColor: string;
    productSize: string;
    price: number;
  }[];
}

const OrderDetails: React.FC = () => {
  const [orderDetailsData, setOrderDetailsData] = useState<OrderDetailsData>({
    orderId: "",
    accEmail: "",
    orderDate: "",
    totalPrice: 0,
    status: "",
    deliveryAddress: {
      firstName: "",
      lastName: "",
      addressLine: "",
      city: "",
      postalCode: "",
      province: "",
      country: "",
      phoneNumber: "",
    },
    orderItems: [],
  });
  const { orderID } = useParams<{ orderID: string }>();

  useEffect(() => {
    const fetchOrdersDetails = async () => {
      try {
        const response = await axios.get<OrderDetailsData>(
          `http://localhost:8082/api/v1/orders/${orderID}`
        );

        setOrderDetailsData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrdersDetails();
  }, [orderID]);

  // Destructure values from orderDetailsData
  const {
    orderId,
    totalPrice,
    status,
    orderDate,
    accEmail,
    deliveryAddress,
    orderItems,
  } = orderDetailsData;

  return (
    <>
      <div className="py-14 px-4 md:px-4 2xl:px-16 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9  text-gray-800"></h1>
          <div className="flex flex-col px:5 lg:px-20 bg-white shadow-lg p-8 rounded-lg">
            <div className="flex mb-10">
              <OrderTracker status={status} />
            </div>
            <h1 className="font-bold text-lg">Shipping To</h1>
            <div className="flex flex-col justify-start items-start flex-shrink-0 ">
              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <AiOutlineHome className="text-2xl" />
                <p className="text-sm leading-5 text-gray-800">
                  <div>
                    {deliveryAddress.firstName} {deliveryAddress.lastName}
                  </div>
                  <div>{deliveryAddress.addressLine}</div>
                  <div>
                    {deliveryAddress.city}, {deliveryAddress.postalCode},{" "}
                    {deliveryAddress.province}
                  </div>
                  <div>{deliveryAddress.country}</div>
                </p>
              </div>
              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <AiOutlineMail className="text-2xl" />
                <p className="text-sm leading-5 text-gray-800">{accEmail}</p>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <FiPhoneCall className="text-2xl" />
                <p className="text-sm leading-5 text-gray-800">
                  {deliveryAddress.phoneNumber}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px:5 lg:px-20 bg-white shadow-lg p-8 rounded-lg">
            <div className="flex justify-between font-bold text-lg mb-10 text-center">
              <p>Order Items</p>
              <p className="text-sm font-extralight bg-gray-200 p-2 rounded-sm">
                Order Date: {orderDate}
              </p>
              <span className="text-sm text-gray-500 font-bold float-right">
                OrderNumber #{orderId}
              </span>
            </div>
            {orderItems.map((orderItem, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start flex-shrink-0 "
              >
                <div className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <img
                    src={orderItem.images}
                    alt={orderItem.productName}
                    className="w-[5rem] h-[5rem] object-cover object-top"
                  />
                  <div className="space-y-2 ml-5">
                    <p className="font-bold">{orderItem.productName}</p>
                    <p className="space-x-5">
                      <span>Color: {orderItem.productColor}</span>
                      <span>Size: {orderItem.productSize}</span>
                    </p>
                    <p className="font-bold text-sm">
                      $ {orderItem.price.toFixed(2)}
                    </p>

                    <div className="rating rating-sm ">
                      <input
                        type="radio"
                        name="rating-9"
                        className="rating-hidden"
                      />
                      <input
                        type="radio"
                        name="rating-9"
                        className="mask mask-star-2 bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-9"
                        className="mask mask-star-2 bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-9"
                        className="mask mask-star-2 "
                      />
                      <input
                        type="radio"
                        name="rating-9"
                        className="mask mask-star-2"
                      />
                      <input
                        type="radio"
                        name="rating-9"
                        className="mask mask-star-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <p className="font-bold">
                Total Price:&nbsp;
                <span className="text-green-700">
                  ${orderDetailsData.totalPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
