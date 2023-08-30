import Carousel from "../../components/Carousel/home/Carousel2";
import MainCarousel from "../../components/Carousel/home/MainCarousel";
import Category from "../../components/Category/Category";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HomeFeatured from "../../components/FeaturedProducts/HomeFeatured";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <HomeFeatured />
      <Category />
      <FeaturedProducts />
    </>
  );
};

export default Home;
