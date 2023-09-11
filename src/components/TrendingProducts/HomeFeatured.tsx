import { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useAppDispatch } from "../../redux/hooks/Hooks";
import { useNavigate } from "react-router-dom";
import { useGetAllProducts } from "../../redux/service/ProductsApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../LoadingSpinner/Loader";
import { setSelectedProduct } from "../../redux/features/ProductSelectSlice";
import { IProductTypes } from "../../redux/types/ProductsTypes";
import {
  addToCart,
  decreaseItemCount,
  increaseItemCount,
} from "../../redux/features/CartSlice";
import axios from "axios";

const HomeFeatured = () => {
  const isNoneMobile = window.matchMedia("min-width: 600px").matches;
  const categoryData = [
    {
      id: 1,
      title: "Top Rated",
    },
    {
      id: 2,
      title: "New Arrivals",
    },
    {
      id: 3,
      title: "Best Sellers",
    },
  ];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const { data: products, isLoading } = useGetAllProducts();

  const [products, setProducts] = useState<IProductTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("Top Rated");
  const [showPlus, setShowPlus] = useState(false);
  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const activeTabItems = products.filter(
    (product) => product.featured === activeTab
  );

  const addCart = (product: IProductTypes) => {
    dispatch(addToCart(product));
    setShowPlus(true);
    toast.success("Item Added to cart");
  };

  const viewProductDetails = (product: IProductTypes) => {
    dispatch(setSelectedProduct(product));
    navigate(`/product/${product.id}`);
  };

  const increaseCount = (itemID: number) => {
    dispatch(increaseItemCount(itemID));
    toast.info("Item Count Increased");
  };
  const decreaseCount = (itemID: number) => {
    dispatch(decreaseItemCount(itemID));
    toast.warning("Item Count Decreased");
  };

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/v1/products");
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-center items-center my-[60px]">
        {isLoading && <Loader />}
        <div className="w-[80%] p-4 text-center">
          <h4 className="uppercase text-2xl">Featured Products</h4>
        </div>
        <div className="tabs">
          {categoryData.map((category) => (
            <a
              key={category.id}
              className={`tab tab-bordered ${
                activeTab === category.title ? "tab-active text-primary" : ""
              }`}
              onClick={() => handleTabClick(category.title)}
            >
              {category.title}
            </a>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
          {activeTabItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative overflow-hidden group"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className={`w-full h-auto max-h-96 max-w-full rounded-md ${
                  isNoneMobile ? "sm:w-full" : "sm:w-1/2 md:w-full"
                }`}
              />
              <div className="absolute h-full w-full bg-black/40 flex flex-col items-center justify-center -left-10 group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-10">
                <h2 className="text-white text-xl Capitalized">{item.title}</h2>

                <p className="text-white text-2xl bg-neutral w-full text-center p-3">
                  $ {item.price}
                </p>
                <div className="flex justify-evenly gap-7">
                  <BsCartCheckFill
                    onClick={() => addCart(item)}
                    className=" text-white text-4xl cursor-pointer hover:-translate-y-2 hover:transition-all duration-200"
                  />
                  <AiFillEye
                    onClick={() => viewProductDetails(item)}
                    className=" text-white text-4xl cursor-pointer origin-center  hover:rotate-180 hover:transition-all duration-200"
                  />
                </div>
                <div className={`sm:order-1 ${showPlus ? "" : "hidden"}`}>
                  <div className="mx-auto flex h-8 items-stretch text-gray-600">
                    <button
                      onClick={() => decreaseCount(item.id)}
                      className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-neutral hover:text-white"
                    >
                      -
                    </button>
                    <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                      1
                    </div>
                    <button
                      onClick={() => increaseCount(item.id)}
                      className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-neutral hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeFeatured;
