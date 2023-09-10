import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export interface IProducts {
  id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  color: string;
  sizes: string[];
  images: string[];
  featured: string | "";
  type: string;
  preference: string;
  category: string;
}

const SingleProductProps: React.FC<IProducts> = (props) => {
  const [productData, setProductData] = useState<IProducts>(props);
  const [featured, setFeatured] = useState<string | undefined>(props.featured);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setProductData(props);
    setFeatured(props.featured || "");
  }, [props]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("sizes-")) {
      // Handle changes in the sizes array
      const index = parseInt(name.split("-")[1]);
      setProductData((prevData) => ({
        ...prevData,
        sizes: prevData.sizes.map((size, i) => (i === index ? value : size)),
      }));
    } else if (name.startsWith("images-")) {
      // Handle changes in the images array
      const index = parseInt(name.split("-")[1]);
      setProductData((prevData) => ({
        ...prevData,
        images: prevData.images.map((image, i) =>
          i === index ? value : image
        ),
      }));
    } else {
      // Handle changes in other fields
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFeatureChange = (value: string) => {
    setFeatured(value);
  };

  const handleUpdate = async (
    e: React.FormEvent,
    featured: string | undefined
  ) => {
    e.preventDefault();
    if (
      productData.title === "" ||
      productData.description === "" ||
      productData.brand === "" ||
      productData.color === "" ||
      productData.category === ""
    ) {
      toast.error("Please fill in all the required fields before updating.");
      return;
    }

    try {
      const updatedProductData = {
        ...productData,
        featured: featured,
      };
      await axios.put(
        `http://localhost:8082/api/v1/products/${id}`,
        updatedProductData
      );
      toast.success("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product. Please try again later.");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Product Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This is the current product information
              </p>
            </div>

            <div className="p-5 sm:px-2 mt-5 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                {props.images.map((image, index) => (
                  <div key={index}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <h2 className="mt-4">Product ID: #{props.id}</h2>
              <div className="mt-3 text-sm text-gray-600 flex flex-col gap-4 leading-9">
                <div className="mt-4">
                  <p className="flex justify-around">
                    Title:
                    <span className="text-md font-light text-gray-900">
                      {props.title}
                    </span>
                  </p>

                  <p className="flex w-full gap-4 justify-around">
                    Description:
                    <span className="text-md font-light text-gray-900 border rounded-md p-4">
                      {props.description}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    Price:
                    <span className="text-md font-light text-green-900">
                      $ {props.price}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    Brand:
                    <span className="text-md font-light text-gray-900">
                      {props.brand}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    Color:
                    <span className="text-md font-light text-gray-900">
                      {props.color}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    <p>Size:</p>
                    <span className="text-md text-gray-900 flex gap-2">
                      {props.sizes.map((size) => (
                        <p>{size}</p>
                      ))}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    Featured:
                    <span className="text-md font-light text-gray-900">
                      {props.featured ? props.featured : "N/A"}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    Type:
                    <span className="text-md font-light text-gray-900">
                      {props.type}
                    </span>
                  </p>
                  <p className="flex justify-around">
                    Preference:
                    <span className="text-md font-light text-gray-900">
                      {props.preference}
                    </span>
                  </p>

                  <p className="flex justify-around">
                    Category:
                    <span className="text-md font-light text-gray-900">
                      {props.category}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={(e) => handleUpdate(e, featured)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={productData.title}
                        onChange={handleFormChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleFormChange}
                        placeholder="Product Description"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="brand"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        value={productData.brand}
                        onChange={handleFormChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="color"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        value={productData.color}
                        onChange={handleFormChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    {productData.sizes.map((size, index) => (
                      <div
                        className="col-span-6 sm:col-span-3 lg:col-span-2"
                        key={index}
                      >
                        <label
                          htmlFor={`size-${index}`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Size ({index + 1})
                        </label>
                        <input
                          type="text"
                          name={`sizes-${index}`} // Use a unique name for each size input
                          value={size}
                          onChange={handleFormChange}
                          className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    ))}
                    {productData.images.map((image, index) => (
                      <div className="col-span-6" key={index}>
                        <label
                          htmlFor={`image-${index}`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Image URL ({index + 1})
                        </label>
                        <input
                          type="text"
                          name={`images-${index}`} // Use a unique name for each image input
                          value={image}
                          onChange={handleFormChange}
                          className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    ))}

                    <div className="col-span-6">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={productData.category}
                        onChange={handleFormChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price $
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleFormChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 flex gap-4">
                      <label
                        htmlFor="preference"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Featured
                      </label>
                      <div className="form-control">
                        <label className="label cursor-pointer flex gap-2">
                          <span className="label-text">Top Rated</span>
                          <input
                            type="radio"
                            name="featured"
                            className="radio checked:bg-red-500"
                            value="Top Rated"
                            checked={featured === "Top Rated"}
                            onChange={(e) => setFeatured(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="form-control ">
                        <label className="label cursor-pointer flex gap-2">
                          <span className="label-text">New Arrivals</span>
                          <input
                            type="radio"
                            name="featured"
                            className="radio checked:bg-blue-500"
                            value="New Arrivals"
                            checked={featured === "New Arrivals"}
                            onChange={(e) => setFeatured(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="form-control ">
                        <label className="label cursor-pointer flex gap-2">
                          <span className="label-text">Best Sellers</span>
                          <input
                            type="radio"
                            name="featured"
                            className="radio checked:bg-orange-500"
                            value="Best Sellers"
                            checked={featured === "Best Sellers"}
                            onChange={(e) => setFeatured(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="form-control ">
                        <label className="label cursor-pointer flex gap-2">
                          <span className="label-text">N/A</span>
                          <input
                            type="radio"
                            name="featured"
                            className="radio checked:bg-green-500"
                            value=""
                            checked={featured === ""}
                            onChange={(e) => setFeatured(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Types
                      </label>
                      <input
                        type="text"
                        name="type"
                        value={productData.type}
                        onChange={handleFormChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductProps;
