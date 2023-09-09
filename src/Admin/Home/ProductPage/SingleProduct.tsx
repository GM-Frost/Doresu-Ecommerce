import { SingleProductData } from "./SingleProductData";
import SingleProductProps from "./SingleProductProps";

const SingleProduct = () => {
  return (
    <>
      <div className="product">
        <SingleProductProps {...SingleProductData} />
      </div>
    </>
  );
};

export default SingleProduct;
