import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const images = [
  {
    imageID: 1,
    imageURL:
      "https://img.freepik.com/free-vector/flat-design-fashion-template_23-2150382681.jpg?w=1800&t=st=1694321331~exp=1694321931~hmac=4d5341b1cca54a88d9e3a0e085e48ee65231f987eb2c464b6384dd7ddf7d5848",
    adVarient: {
      title: "Summer Sale",
      desc: "Don't Compromise on the Sale. Get Flat 30% off for new arrivals.",
    },
  },

  {
    imageID: 2,
    imageURL:
      "https://img.freepik.com/free-vector/blog-header-template-with-dark-academia-outfit-conceptwatercolor_83728-9560.jpg?w=1800&t=st=1694321135~exp=1694321735~hmac=bdd811e98055d80c0d89293d68c439ec1b13b11872c68758ce1661a34bfe95de",
    adVarient: {
      title: "Winter Collection",
      desc: "Stay Warm and Stylish with our Latest Winter Collection.",
    },
  },
  {
    imageID: 3,
    imageURL:
      "https://img.freepik.com/free-vector/abstract-fashion-monsoon-sale-banner-offer-discount-business-background-free-vector_1340-22460.jpg?w=1800&t=st=1694321270~exp=1694321870~hmac=d2fd89815181ed4446432fc4a43f52cd63530adedac7d49d35923ce3b575f3bb",
    adVarient: {
      title: "Holiday Special",
      desc: "Celebrate the Holidays with our Exclusive Holiday Collection.",
    },
  },
  {
    imageID: 4,
    imageURL:
      "https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitter-header_23-2149985370.jpg?w=1800&t=st=1694321412~exp=1694322012~hmac=3acd3efef8bfb6c65203e49621d42f18c4143892373a22fb44df81f5bd9b087e",
    adVarient: {
      title: "Top Rated",
      desc: "Find the Top Rated Products in our Collection.",
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
