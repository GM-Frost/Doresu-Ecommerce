import { useParams } from "react-router-dom";
import { SingleProductData } from "./SingleProductData";
import SingleProductProps, { IProducts } from "./SingleProductProps";
import { useEffect, useState } from "react";
import axios from "axios";

const initialProductState: IProducts = {
  id: "",
  title: "",
  description: "",
  price: 0,
  brand: "",
  color: "",
  sizes: [],
  images: [],
  category: "",
};

const SingleProduct = () => {
  const [productDetailsData, setProductDetailsData] =
    useState<IProducts>(initialProductState);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchOrdersDetails = async () => {
      try {
        const response = await axios.get<IProducts>(
          `http://localhost:8082/api/v1/products/${id}`
        );

        setProductDetailsData(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrdersDetails();
  }, [id]);

  return (
    <>
      <div className="product">
        <SingleProductProps {...productDetailsData} />
      </div>
    </>
  );
};

export default SingleProduct;
