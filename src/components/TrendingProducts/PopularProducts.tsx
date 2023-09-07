import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

import { GiSelfLove } from "react-icons/gi";
import {
  useGetAllProducts,
  useGetProductsQuery,
} from "../../redux/service/ProductsApi";
import { IProductTypes } from "../../redux/types/ProductsTypes";
import { useAppDispatch } from "../../redux/hooks/Hooks";
import { addToCart } from "../../redux/features/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSelectedProduct } from "../../redux/features/ProductSelectSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../LoadingSpinner/Spinner";

const PopularProducts = () => {
  const isNoneMobile = window.matchMedia("min-width: 600px").matches;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const { currentData: productsItems, isLoading } = useGetProductsQuery([]);
  const { data: productsItems, isLoading } = useGetAllProducts();
  //Add to Cart

  const addCart = (product: IProductTypes) => {
    dispatch(addToCart(product));
    toast.success("Item Added to cart");
  };

  const viewProductDetails = (product: IProductTypes) => {
    dispatch(setSelectedProduct(product)); // Set the selected product in the ProductSelectSlice
    navigate(`/product/${product.id}`);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const displayedProducts = productsItems.slice(0, 12);

  return (
    <>
      <ToastContainer />
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-primary"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium uppercase title-font text-2xl mb-2 sm:mb-0">
                Popular Products
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Elevate your evening elegance with our Elegant Midnight Velvet
                Dress. Crafted from sumptuous, soft velvet fabric, this dress
                exudes sophistication and allure. Its flattering A-line
                silhouette drapes gracefully, while the deep midnight hue adds a
                touch of mystique to your look.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {displayedProducts?.map((product: IProductTypes) => (
              <div
                key={product.id}
                className="flex flex-col items-center relative overflow-hidden group"
              >
                <img
                  src={product.images[0].imageUrl}
                  alt={product.title}
                  className={`w-full h-auto max-h-96 max-w-full rounded-md ${
                    isNoneMobile ? "sm:w-full" : "sm:w-1/2 md:w-full"
                  }`}
                />
                <div
                  className={`${
                    isNoneMobile ? "sm:w-full" : "sm:w-1/2 md:w-full"
                  } absolute mt-3 w-full flex flex-col justify-end opacity-100 transition-all duration-300`}
                >
                  <div className="flex flex-col gap-7 p-1">
                    <div className="relative bg-black/40 rounded-full h-10 w-10 flex items-center justify-center text-white">
                      <FaCartShopping
                        onClick={() => addCart(product)}
                        className="text-2xl cursor-pointer hover:-translate-y-2  hover:transition-all duration-200"
                      />
                    </div>
                    <div className="relative bg-black/40 rounded-full h-10 w-10 flex items-center justify-center text-white">
                      <GiSelfLove className="text-2xl cursor-pointer origin-center  hover:scale-125 hover:text-red-500 hover:transition-all duration-200" />
                    </div>
                    <div className="relative bg-black/40 rounded-full h-10 w-10 flex items-center justify-center text-white">
                      <FaEye
                        onClick={() => viewProductDetails(product)}
                        className="text-2xl cursor-pointer origin-center  hover:rotate-180 hover:text-[#ffeed4] hover:transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <span className="text-xl">$ {product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default PopularProducts;
