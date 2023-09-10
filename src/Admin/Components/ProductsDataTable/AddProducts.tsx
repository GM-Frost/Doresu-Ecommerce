import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type IProps = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const handleChange = () => {};

const AddProducts = (props: IProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    sizes: [],
    images: ["", "", "", ""],
    brand: "",
    featured: "",
    type: "",
    color: "",
    preference: "",
    category: "",
  });

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    size: string
  ) => {
    const { checked } = e.target;
    const updatedSizes = [...formData.sizes];
    if (checked) {
      updatedSizes.push(size);
    } else {
      const index = updatedSizes.indexOf(size);
      if (index !== -1) {
        updatedSizes.splice(index, 1);
      }
    }
    setFormData({
      ...formData,
      sizes: updatedSizes,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "size") {
      const newSize = [...formData.sizes];
      const sizeIndex = newSize.indexOf(value);
      if (sizeIndex === -1) {
        newSize.push(value);
      } else {
        newSize.splice(sizeIndex, 1);
      }

      setFormData({
        ...formData,
        [name]: newSize,
      });
    } else {
      // Handle changes in other fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setFormData({
      ...formData,
      type,
    });
  };

  const handleFeaturedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const featured = e.target.value;
    setFormData({
      ...formData,
      featured,
    });
  };

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const preference = e.target.value;
    setFormData({
      ...formData,
      preference,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData?.title === "" ||
      formData?.description === "" ||
      formData?.brand === "" ||
      formData?.category === "" ||
      formData?.color === "" ||
      formData?.price === "" ||
      formData?.preference === "" ||
      formData?.type === "" ||
      formData?.sizes.length === 0 ||
      formData?.images.length === 0
    ) {
      toast.error("Please fill the required fields");
      return;
    }
    const productData = {
      title: formData.title,
      description: formData.description,
      brand: formData.brand,
      category: formData.category,
      color: formData.color,
      price: formData.price,
      preference: formData.preference,
      type: formData.type,
      sizes: formData.sizes,
      images: formData.images,
    };
    try {
      // Send the data to the backend API
      const response = await axios.post(
        "http://localhost:8082/api/v1/products/create",
        productData
      );

      // Handle the response as needed
      if (response.status === 200) {
        toast.success("Product created successfully!");
        // Optionally, you can reset the form or navigate to another page
      } else {
        toast.error("Failed to create the product. Please try again later.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error(
        "An error occurred while creating the product. Please try again later."
      );
    }
  };

  const sizeOptions = ["small", "medium", "large", "x-large"];
  const typeOptions = ["Clothing", "Accessories"];
  const preferenceOptions = ["Men", "Women"];
  return (
    <>
      <ToastContainer />
      <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className=" p-14 rounded-lg bg-white relative">
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => props.setOpen(false)}
          >
            X
          </span>
          <h1 className="text-center text-2xl capitalize">
            Add New {props.slug}
          </h1>
          <form className="w-full max-w-lg mt-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-title"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name="title"
                  placeholder="Product Title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-description"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Product Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-price"
                >
                  Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-price"
                  type="text"
                  placeholder="$ 0.00"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-price"
                >
                  Size
                </label>
                <div className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  {sizeOptions.map((size, index) => (
                    <div className="flex items-center pl-3" key={index}>
                      <input
                        id={`size-checkbox-${index}`}
                        type="checkbox"
                        value={size}
                        name="sizes"
                        checked={formData.sizes.includes(size)}
                        onChange={(e) => handleCheckboxChange(e, size)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={`size-checkbox-${index}`}
                        className="vue-checkbox-list w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              {formData.images.map((imageUrl, index) => (
                <div className="w-full md:w-1/2 px-3" key={index}>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`grid-image-${index}`}
                  >
                    Image ({index + 1})
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id={`grid-image-${index}`}
                    type="text"
                    name="images"
                    placeholder="Url to image"
                    value={imageUrl}
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Brand
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-brand"
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-feature"
                >
                  Featured
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="featured"
                    value={formData.featured}
                    onChange={handleFeaturedChange}
                  >
                    <option value="" disabled>
                      Select Featured
                    </option>
                    <option value="Top Rated">Top Rated</option>
                    <option value="New Arrivals">New Arrivals</option>
                    <option value="Best Sellers">Best Sellers</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Type
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="type"
                    value={formData.type}
                    onChange={handleTypeChange}
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    {typeOptions.map((typeOption) => (
                      <option key={typeOption} value={typeOption}>
                        {typeOption}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Color
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-color"
                  type="text"
                  name="color"
                  placeholder="Color"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-feature"
                >
                  Preference
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="preference"
                    value={formData.preference}
                    onChange={handlePreferenceChange}
                  >
                    <option value="" disabled>
                      Select Preference
                    </option>
                    {preferenceOptions.map((preferenceOption) => (
                      <option key={preferenceOption} value={preferenceOption}>
                        {preferenceOption}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Category
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-category"
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="btn btn-primary text-white">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
