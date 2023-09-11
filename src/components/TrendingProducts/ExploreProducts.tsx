const products = [
  {
    productID: 1,
    title: "Jackets",
    images:
      "https://images.unsplash.com/photo-1520012410130-4d5ad71c9b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Unleash timeless style with our collection of meticulously crafted leather jackets, blending vintage appeal with contemporary flair.",
  },
  {
    productID: 2,
    title: "Dress",
    images:
      "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description:
      "Elevate your wardrobe with our stunning dresses, where every stitch tells a story of elegance and confidence.",
  },
  {
    productID: 3,
    title: "Sunnies",
    images:
      "https://images.unsplash.com/photo-1552888861-cd1444d1b1e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzaWFuJTIwc2tpcnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    description:
      "Discover a new level of chic with our collection of sunglasses, shielding your eyes from the sun while adding a touch of glamour to your ensemble.",
  },
];

const ExploreProducts = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-primary"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium uppercase title-font text-2xl mb-2 sm:mb-0 ">
                Explore Our Products
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
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {products.map((product) => (
              <div className="container relative flex flex-1 m-2 h-[30vh] overflow-hidden">
                <img
                  src={product.images}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center flex-col gap-6">
                  <h2 className="text-white text-5xl backdrop-blur-md w-full text-center sm:text-base md:text-3xl lg:text-4xl xl:text-5xl">
                    {product.title}
                  </h2>
                  <button className="bg-white p-2 hover:bg-neutral hover:text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreProducts;
