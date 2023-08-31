import MainCarousel from "../../components/Carousel/home/MainCarousel";
import Category from "../../components/Category/Category";
import ExploreProducts from "../../components/TrendingProducts/ExploreProducts";
import HomeFeatured from "../../components/TrendingProducts/HomeFeatured";
import PopularProducts from "../../components/TrendingProducts/PopularProducts";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <HomeFeatured />
      <Category />
      <ExploreProducts />
      <PopularProducts />
    </>
  );
};

export default Home;
