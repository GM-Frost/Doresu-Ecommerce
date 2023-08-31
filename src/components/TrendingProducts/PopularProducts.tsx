import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

import { GiSelfLove } from "react-icons/gi";

const products = [
  {
    productID: 1,
    title: "Jackets",
    images:
      "https://images.pexels.com/photos/17997570/pexels-photo-17997570/free-photo-of-redhead-woman-in-black-clothes.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Unleash timeless style with our collection of meticulously crafted leather jackets, blending vintage appeal with contemporary flair.",
    price: 30.33,
  },
  {
    productID: 2,
    title: "Dress",
    images:
      "https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Elevate your wardrobe with our stunning dresses, where every stitch tells a story of elegance and confidence.",
    price: 30.33,
  },
  {
    productID: 3,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 4,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 5,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 6,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/18077457/pexels-photo-18077457/free-photo-of-beautiful-woman-in-traditional-chinese-dress.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 7,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 8,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 9,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 10,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
  {
    productID: 11,
    title: "Sunnies",
    images:
      "https://images.pexels.com/photos/1306246/pexels-photo-1306246.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
    price: 30.33,
  },
];

const PopularProducts = () => {
  const isNoneMobile = window.matchMedia("min-width: 600px").matches;
  const displayedProducts = products.slice(0, 8);
  return (
    <>
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
            {displayedProducts.map((product) => (
              <div
                key={product.productID}
                className="flex flex-col items-center relative overflow-hidden group"
              >
                <img
                  src={product.images}
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
                    <div className="relative bg-black/40 rounded-full h-12 w-12 flex items-center justify-center text-white">
                      <FaCartShopping className="text-2xl cursor-pointer hover:-translate-y-2  hover:transition-all duration-200" />
                    </div>
                    <div className="relative bg-black/40 rounded-full h-12 w-12 flex items-center justify-center text-white">
                      <GiSelfLove className="text-2xl cursor-pointer origin-center  hover:scale-125 hover:text-red-500 hover:transition-all duration-200" />
                    </div>
                    <div className="relative bg-black/40 rounded-full h-12 w-12 flex items-center justify-center text-white">
                      <FaEye className="text-2xl cursor-pointer origin-center  hover:rotate-180 hover:text-[#ffeed4] hover:transition-all duration-200" />
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
