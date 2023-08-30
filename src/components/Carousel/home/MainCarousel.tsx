import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const images = [
  {
    imageID: 1,
    imageURL:
      "https://images.unsplash.com/photo-1520012410130-4d5ad71c9b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    adVarient: {
      title: "30% of on New Item",
      buyNow: "Vist Products",
      background: "bg-secondary",
      color: "text-white",
      button: "black",
    },
  },
  {
    imageID: 2,
    imageURL:
      "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    adVarient: {
      title: "30% of on New Item",
      buyNow: "Vist Products",
      background: "bg-white",
      color: "text-black",
      button: "secondary",
    },
  },
  {
    imageID: 3,
    imageURL:
      "https://images.unsplash.com/photo-1552888861-cd1444d1b1e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzaWFuJTIwc2tpcnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    adVarient: {
      title: "30% of on New Item",
      buyNow: "Vist Products",
      background: "bg-black",
      color: "text-white",
      button: "black",
    },
  },
];
const MainCarousel = () => {
  const isNoneMobile = "min-width:600px";
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={4000}
        transitionTime={2000}
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
          <div key={image.imageID} className="div">
            <img
              src={image.imageURL}
              alt={image.imageURL}
              className="w-full h-[700px] object-cover bg-fixed"
            />
            <div
              className={`p-5 rounded-sm text-left ${
                image?.adVarient?.title
                  ? `${image.adVarient.background}
                 ${image.adVarient.color}
                  `
                  : "bg-none text-white "
              } bg-opacity-25 absolute top-[46%] ${
                isNoneMobile
                  ? "left-[10%] right-auto mx-auto max-w-[unset]"
                  : "left-0 right-0 mx-auto max-w-[240px]"
              }`}
            >
              <h1> {image?.adVarient?.title}</h1>
              <button className={`btn btn-${image.adVarient.button}`}>
                {image?.adVarient?.buyNow}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MainCarousel;
