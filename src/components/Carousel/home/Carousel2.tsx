import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="relative">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      alt="Carousel Image"
    />
    <div className="absolute w-1/3 left-1/4 bottom-1/4 transform -translate-x-1/2">
      <div className="  px-4 py-2 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-center text-white">Sale 50%</p>
        <button type="button" className="btn btn-primary mt-2 w-full">
          Buy Now
        </button>
      </div>
    </div>
  </div>,

  <div className="item relative" data-value="1">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://marketplace.canva.com/EAFYElY5EE4/1/0/1600w/canva-brown-and-white-modern-fashion-banner-landscape-Ap8IU9nEbh8.jpg"
    />
    <button type="button" className="btn btn-primary absolute top-1/3 left-1/2">
      Buy Now
    </button>
  </div>,
  <div className="item" data-value="2">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://www.collegefashion.net/wp-content/uploads/2019/01/black-shirt-summerjpg.webp"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://cdn.tuk.dev/previews/desktop-2x/hero_XIV.jpg"
    />
  </div>,
  <div className="item" data-value="4">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
    />
  </div>,
  <div className="item" data-value="5">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://www.omnisend.com/blog/wp-content/uploads/2021/03/21-03-19-Fashion-ecommerce.jpg"
    />
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    autoPlayControls={false}
    autoPlayStrategy="none"
    autoPlayInterval={5000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={true}
    disableDotsControls
    disableButtonsControls
    items={items}
  />
);

export default Carousel;
