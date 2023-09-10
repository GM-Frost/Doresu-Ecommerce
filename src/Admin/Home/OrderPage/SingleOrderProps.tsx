import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IOrderData {
  id: string;
  orderId: string;
  userId: string;
  accFirstname: string;
  accLastname: string;
  accEmail: string;
  orderDate: string;
  expectedDate: string | null;
  status: string;
  totalPrice: number;
  deliveryAddress: {
    firstName: string;
    lastName: string;
    addressLine: string;
    phoneNumber: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  orderItems: {
    productId: string;
    productName: string;
    productBrand: string;
    productColor: string;
    productSize: string;
    category: string;
    images: string;
    quantity: number;
    price: number;
    subtotal: number;
  }[];
}

const SingleOrderProps: React.FC<IOrderData> = (props) => {
  const { orderID } = useParams<{ orderID: string }>();
  const [order, setOrder] = useState<IOrderData | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  // Fetch the order details when the component mounts

  console.log(order);
  console.log(selectedStatus);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/v1/orders/${orderID}`
        );
        setOrder(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderDetails();
  }, [orderID]);

  // Handle status change
  const handleStatusChange = async () => {
    if (selectedStatus === "") {
      toast.error("Please select a status");
      return;
    }
    try {
      const updatedOrder = {
        ...order,
        status: selectedStatus,
      };

      await axios.put(
        `http://localhost:8082/api/v1/orders/${orderID}`,
        updatedOrder
      );
      setOrder(updatedOrder);
      toast.success("Order Status is Changed");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-evenly">
        <div className="flex flex-wrap gap-5 bg-white p-5">
          <div className="flex flex-col">
            <h4 className="text-3xl mb-5 font-bold text-blue-gray-300">
              Order Details
            </h4>
            <p className="text-2xl font-bold italic">
              Order ID #{props.orderId}
            </p>
            <div className="mt-6 flex flex-col gap-4 items-center">
              <p>
                Order by: {props.accFirstname}&nbsp;{props.accLastname}
              </p>
              <p>Email: {props.accEmail}</p>
              <p>Order Date: {props.orderDate}</p>
              <p>Expected Delivery : {props.expectedDate}</p>
            </div>
            <div className="mt-6 flex flex-col gap-4 items-center">
              <p>
                Total Price:{" "}
                <span className="text-green-500">${props.totalPrice}</span>
              </p>
            </div>
            <hr />
            <div className="mt-6 flex flex-col gap-4 items-center">
              <p className="text-3xl">Status: {props.status}</p>
            </div>
            <hr />
            <div className="flex-1 mt-4">
              <select
                className="select select-primary w-full max-w-xs"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option disabled value="">
                  Change Status
                </option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Returned">Returned</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <div className="justify-center items-center flex mt-5">
                <button
                  onClick={handleStatusChange}
                  className="btn btn-primary text-white "
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <p className="flex flex-col border border-gray-400"></p>
          <div>
            <h4 className="text-3xl mb-5 font-bold text-blue-gray-300">
              Delivery Details
            </h4>
            <hr />
            <div className="mt-6 flex flex-col gap-4 items-center">
              <p>
                {props.deliveryAddress.firstName}&nbsp;
                {props.deliveryAddress.lastName}
              </p>
              <p>
                Address: {props.deliveryAddress.addressLine},{" "}
                {props.deliveryAddress.city}
                <br />
                {props.deliveryAddress.province},{" "}
                {props.deliveryAddress.postalCode}
                <br />
                {props.deliveryAddress.country}
              </p>

              <p>Contact : {props.deliveryAddress.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 shadow-md bg-white p-5">
        <h1 className="items-center justify-center text-center">
          Ordered Items
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Order Item</th>
                <th>Product ID</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {props.orderItems.map((item) => (
                <tr key={item.productId}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.images} alt={item.productId} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.productName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.category}
                    </span>
                  </td>
                  <td> {item.productId}</td>
                  <td> {item.productBrand}</td>
                  <td>{item.productColor}</td>
                  <td>{item.productSize}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SingleOrderProps;
