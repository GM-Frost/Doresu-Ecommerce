import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  return (
    <>
      <div className="py-14 px-4 md:px-4 2xl:px-16 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Your Address
          </h1>
          <div className="flex flex-col px:5 lg:px-20 bg-white shadow-lg p-8 rounded-lg">
            <div className="flex mb-10">
              <OrderTracker activeStep={1} />
            </div>
            <h1 className="font-bold text-lg">Shipping To</h1>
            <div className="flex flex-col justify-start items-start flex-shrink-0 ">
              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <AiOutlineHome className="text-2xl" />
                <p className="text-sm leading-5 text-gray-800">
                  <div>Hanna San</div>
                  <div>180 North King Street</div>
                  <div>Northhampton MA 1060</div>
                </p>
              </div>
              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <AiOutlineMail className="text-2xl" />
                <p className="text-sm leading-5 text-gray-800">
                  david89@gmail.com
                </p>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <FiPhoneCall className="text-2xl" />
                <p className="text-sm leading-5 text-gray-800">
                  +1 438-8844-8488
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px:5 lg:px-20 bg-white shadow-lg p-8 rounded-lg">
            <div className="flex font-bold text-lg mb-10 text-center justify-center">
              Order Items
            </div>

            <div className="flex flex-col justify-start items-start flex-shrink-0 ">
              <div className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <img
                  src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="w-[5rem] h-[5rem] object-cover object-top"
                />
                <div className="space-y-2 ml-5">
                  <p className="font-bold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5">
                    <span>Color: Blue</span>
                    <span>Size: M</span>
                  </p>
                  <p className="font-bold text-sm">$ 452.44</p>

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
            <div className="flex flex-col justify-start items-start flex-shrink-0 ">
              <div className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="w-[5rem] h-[5rem] object-cover object-top"
                />
                <div className="space-y-2 ml-5">
                  <p className="font-bold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5">
                    <span>Color: Blue</span>
                    <span>Size: M</span>
                  </p>
                  <p className="font-bold text-sm">$ 200.44</p>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
