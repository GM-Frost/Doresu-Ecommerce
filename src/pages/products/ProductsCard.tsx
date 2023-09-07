import { FaCartShopping } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { useAppDispatch } from "../../redux/hooks/Hooks";
import { addToCart } from "../../redux/features/CartSlice";
import { IProductTypes } from "../../redux/types/ProductsTypes";
import { setSelectedProduct } from "../../redux/features/ProductSelectSlice";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const addCart = (product: IProductTypes) => {
    dispatch(addToCart(product));
    toast.success("Item Added to cart");
  };

  const viewProductDetails = (product: IProductTypes) => {
    dispatch(setSelectedProduct(product)); // Set the selected product in the ProductSelectSlice
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <div key={product.id} className="p-4 relative">
        <div className="group relative block overflow-hidden rounded-xl">
          <img
            src={product.images[0].imageUrl}
            alt=""
            onClick={() => viewProductDetails(product)}
            className="cursor-pointer h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="absolute top-4 end-4 z-100">
            <div className="flex flex-col gap-4 rounded-full bg-white p-1.5 text-gray-900 transition group-hover:text-gray-900/75">
              <AiFillEye
                onClick={() => viewProductDetails(product)}
                className="hover:text-accent text-2xl cursor-pointer"
              />
              <GiSelfLove className="hover:text-red-500 text-2xl cursor-pointer" />
            </div>
          </div>

          <div className="relative border border-gray-100 bg-white p-6">
            <span className="whitespace-nowrap text-white bg-accent px-3 py-1.5 text-xs font-medium">
              New
            </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            <p className="mt-1.5 text-sm text-gray-700">$ {product.price}</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => addCart(product)}
                className="btn btn-primary btn-md text-white transition hover:scale-105"
              >
                Add to Cart <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
