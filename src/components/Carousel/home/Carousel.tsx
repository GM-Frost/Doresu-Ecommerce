import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item" data-value="1">
    <img
      className="w-full object-cover h-[calc(100vh-330px)]"
      src="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    />
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
      src="https://images.unsplash.com/photo-1523190432056-f7ad503cfe4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
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
      src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    />
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    autoPlayControls={false}
    autoPlayStrategy="none"
    autoPlayInterval={2000}
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
