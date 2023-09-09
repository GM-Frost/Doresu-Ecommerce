import SingleOrderProps, { IOrderData } from "./SingleOrderProps";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleOrder: React.FC = () => {
  const [orderDetailsData, setOrderDetailsData] = useState<IOrderData>({
    id: "",
    orderId: "",
    userId: "",
    accFirstname: "",
    accLastname: "",
    accEmail: "",
    orderDate: "",
    expectedDate: null,
    status: "",
    totalPrice: 0,
    deliveryAddress: {
      firstName: "",
      lastName: "",
      addressLine: "",
      phoneNumber: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
    },
    orderItems: [],
  });
  const { orderID } = useParams<{ orderID: string }>();

  useEffect(() => {
    const fetchOrdersDetails = async () => {
      try {
        const response = await axios.get<IOrderData>(
          `http://localhost:8082/api/v1/orders/${orderID}`
        );

        setOrderDetailsData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrdersDetails();
  }, [orderID]);

  return <>{orderDetailsData && <SingleOrderProps {...orderDetailsData} />}</>;
};

export default SingleOrder;
