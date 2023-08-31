import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const images = [
  {
    imageID: 1,
    imageURL:
      "https://images.unsplash.com/photo-1520012410130-4d5ad71c9b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    adVarient: {
      title: "Holiday Special",
      desc: "Celebrate the Holidays with our Exclusive Holiday Collection.",
    },
  },
  {
    imageID: 2,
    imageURL:
      "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    adVarient: {
      title: "Winter Collection",
      desc: "Stay Warm and Stylish with our Latest Winter Collection.",
    },
  },
  {
    imageID: 3,
    imageURL:
      "https://images.unsplash.com/photo-1552888861-cd1444d1b1e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzaWFuJTIwc2tpcnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    adVarient: {
      title: "Summer Sale",
      desc: "Don't Compromise on the Sale. Get Flat 30% off for new arrivals.",
    },
  },
];
const MainCarousel = () => {
  const isNoneMobile = "min-width:600px";
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={3000}
        transitionTime={1000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            onClick={onClickHandler}
            className="absolute top-1/2 left-0 text-white p-2 z-10"
          >
            <MdOutlineNavigateBefore className="text-5xl hover:bg-black hover:bg-opacity-25" />
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            onClick={onClickHandler}
            className="absolute top-1/2 right-0 text-white p-2 z-10"
          >
            <MdOutlineNavigateNext className="text-5xl hover:bg-black hover:bg-opacity-25" />
          </button>
        )}
      >
        {images.map((image) => (
          <div key={image.imageID} className="relative">
            <img
              src={image.imageURL}
              alt={image.imageURL}
              className="w-full h-[700px] object-cover bg-fixed"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full flex items-end justify-end p-6">
                <div className="w-1/2 h-[50%] bg-opacity-70 backdrop-blur-md backdrop-brightness-75 text-white p-6 flex flex-col items-center justify-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
                    {image.adVarient.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    {image.adVarient.desc}
                  </p>
                  <button className="text-white bg-none outline-dashed hover:bg-black hover:outline-none p-4 font-bold mt-4 transition-all duration-500">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MainCarousel;
