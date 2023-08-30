const FeaturedProducts = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium uppercase title-font text-2xl mb-2 sm:mb-0">
                Featured Products
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
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://images.unsplash.com/photo-1520012410130-4d5ad71c9b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Jackets
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Unleash timeless style with our collection of meticulously
                crafted leather jackets, blending vintage appeal with
                contemporary flair.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Explore Products
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Dress
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Elevate your wardrobe with our stunning dresses, where every
                stitch tells a story of elegance and confidence.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Explore Products
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://images.unsplash.com/photo-1552888861-cd1444d1b1e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzaWFuJTIwc2tpcnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Sunnies
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Discover a new level of chic with our collection of sunglasses,
                shielding your eyes from the sun while adding a touch of glamour
                to your ensemble.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Explore Products
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
