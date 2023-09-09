import { useState } from "react";

export interface IProducts {
  id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  color: string;
  sizes: string[];
  images: string[];
  category: string;
}

const SingleProductProps: React.FC<IProducts> = (props) => {
  const [productData, setProductData] = useState<IProducts>(props);

  const handleUpdate = () => {};
  return (
    <>
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
                      $ {props.brand}
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
            <form onSubmit={handleUpdate}>
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
                        value={props.title}
                        onChange={(e) => {
                          const updatedTitle = e.target.value;
                          setProductData({
                            ...productData,
                            title: updatedTitle,
                          });
                        }}
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
                        value={props.description}
                        onChange={(e) => {
                          const updatedDescription = e.target.value;
                          setProductData({
                            ...productData,
                            description: updatedDescription,
                          });
                        }}
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
                        value={props.brand}
                        onChange={(e) => {
                          const updatedBrand = e.target.value;
                          setProductData({
                            ...productData,
                            brand: updatedBrand,
                          });
                        }}
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
                        value={props.color}
                        onChange={(e) => {
                          const updatedColor = e.target.value;
                          setProductData({
                            ...productData,
                            color: updatedColor,
                          });
                        }}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="Sizes"
                        className=" block text-sm font-medium text-gray-700"
                      >
                        Sizes
                      </label>
                      <div className="flex col-span-6 sm:col-span-3 lg:col-span-2 gap-4">
                        {props.sizes.map((size, index) => (
                          <input
                            key={index}
                            type="text"
                            name={`sizes[${index}]`}
                            value={size}
                            onChange={(e) => {
                              const updatedSizes = [...productData.sizes];
                              updatedSizes[index] = e.target.value;
                              setProductData({
                                ...productData,
                                sizes: updatedSizes,
                              });
                            }}
                            className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="imageUrl1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL (1)
                      </label>
                      <input
                        type="text"
                        name="images[0]"
                        value={props.images[0]}
                        onChange={(e) => {
                          const updatedImages = [...productData.images];
                          updatedImages[0] = e.target.value;
                          setProductData({
                            ...productData,
                            images: updatedImages,
                          });
                        }}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="imageUrl2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL (2)
                      </label>
                      <input
                        type="text"
                        name="images[1]"
                        value={props.images[1]}
                        onChange={(e) => {
                          const updatedImages = [...productData.images];
                          updatedImages[1] = e.target.value;
                          setProductData({
                            ...productData,
                            images: updatedImages,
                          });
                        }}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="imageUrl3"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL (3)
                      </label>
                      <input
                        type="text"
                        name="images[2]"
                        value={props.images[2]}
                        onChange={(e) => {
                          const updatedImages = [...productData.images];
                          updatedImages[2] = e.target.value;
                          setProductData({
                            ...productData,
                            images: updatedImages,
                          });
                        }}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="imageUrl4"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL (4)
                      </label>
                      <input
                        type="text"
                        name="images[3]"
                        value={props.images[3]}
                        onChange={(e) => {
                          const updatedImages = [...productData.images];
                          updatedImages[3] = e.target.value;
                          setProductData({
                            ...productData,
                            images: updatedImages,
                          });
                        }}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

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
                        value={props.category}
                        onChange={(e) => {
                          const updatedCategory = e.target.value;
                          setProductData({
                            ...productData,
                            category: updatedCategory,
                          });
                        }}
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
