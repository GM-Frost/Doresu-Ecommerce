import { FaCartShopping } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

const ProductsCard = ({ product }) => {
  return (
    <div key={product.productID} className="p-4 relative">
      <div className="group relative block overflow-hidden rounded-xl">
        <img
          src={product.images}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="absolute top-4 end-4 z-100">
          <div className="flex flex-col gap-4 rounded-full bg-white p-1.5 text-gray-900 transition group-hover:text-gray-900/75">
            <AiFillEye className="hover:text-accent text-2xl cursor-pointer" />
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
            <button className="btn btn-primary btn-md text-white transition hover:scale-105">
              Add to Cart <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
