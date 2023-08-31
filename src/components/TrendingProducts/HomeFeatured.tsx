import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
const HomeFeatured = () => {
  const isNoneMobile = window.matchMedia("min-width: 600px").matches;
  const categoryData = [
    {
      id: 1,
      title: "Top Rated",
      items: [
        {
          itemID: 1,
          itemTitle: "Item 1",
          itemImage:
            "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=600",
          itemPrice: 35.55,
        },
        {
          itemID: 2,
          itemTitle: "Item 2",
          itemImage:
            "https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=600",
          itemPrice: 22.0,
        },
        {
          itemID: 3,
          itemTitle: "Item 3",
          itemImage:
            "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600",
          itemPrice: 85.55,
        },
        {
          itemID: 4,
          itemTitle: "Item 4",
          itemImage:
            "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          itemPrice: 11.22,
        },
        {
          itemID: 5,
          itemTitle: "Item 5",
          itemImage:
            "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=600",
          itemPrice: 11.22,
        },
      ],
    },
    {
      id: 2,
      title: "New Arrivals",
      items: [
        {
          itemID: 1,
          itemTitle: "Item 6",
          itemImage:
            "https://images.pexels.com/photos/18077457/pexels-photo-18077457/free-photo-of-beautiful-woman-in-traditional-chinese-dress.jpeg?auto=compress&cs=tinysrgb&w=400",
          itemPrice: 22.55,
        },
      ],
    },
    {
      id: 3,
      title: "Best Sellers",
      items: [
        {
          itemID: 1,
          itemTitle: "Item 6",
          itemImage:
            "https://images.pexels.com/photos/17997570/pexels-photo-17997570/free-photo-of-redhead-woman-in-black-clothes.jpeg?auto=compress&cs=tinysrgb&w=400",
          itemPrice: 33.45,
        },
        {
          itemID: 2,
          itemTitle: "Item 7",
          itemImage:
            "https://images.pexels.com/photos/18015267/pexels-photo-18015267/free-photo-of-smiling-woman-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=400",
          itemPrice: 11.22,
        },
        {
          itemID: 3,
          itemTitle: "Item 8",
          itemImage:
            "https://images.pexels.com/photos/17997566/pexels-photo-17997566/free-photo-of-redhead-woman-portrait-on-bridge.jpeg?auto=compress&cs=tinysrgb&w=400",
          itemPrice: 11.22,
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("Top Rated");

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const activeTabItems =
    categoryData.find((category) => category.title === activeTab)?.items || [];

  return (
    <div className="flex flex-col justify-center items-center my-[60px]">
      <div className="w-[80%] p-4 text-center">
        <h4 className="uppercase text-2xl">Featured Products</h4>
      </div>
      <div className="tabs">
        {categoryData.map((category) => (
          <a
            key={category.id}
            className={`tab tab-bordered ${
              activeTab === category.title ? "tab-active text-primary" : ""
            }`}
            onClick={() => handleTabClick(category.title)}
          >
            {category.title}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
        {activeTabItems.map((item) => (
          <div
            key={item.itemID}
            className="flex flex-col items-center relative overflow-hidden group"
          >
            <img
              src={item.itemImage}
              alt={item.itemTitle}
              className={`w-full h-auto max-h-96 max-w-full rounded-md ${
                isNoneMobile ? "sm:w-full" : "sm:w-1/2 md:w-full"
              }`}
            />
            <div className="absolute h-full w-full bg-black/40 flex flex-col items-center justify-center -left-10 group-hover:left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-10">
              <h2 className="text-white text-xl Capitalized">
                {item.itemTitle}
              </h2>

              <p className="text-white text-2xl bg-neutral w-full text-center p-3">
                $ {item.itemPrice}
              </p>
              <div className="flex justify-evenly gap-7">
                <BsCartCheckFill className=" text-white text-4xl cursor-pointer hover:-translate-y-2 hover:transition-all duration-200" />
                <AiFillEye className=" text-white text-4xl cursor-pointer origin-center  hover:rotate-180 hover:transition-all duration-200" />
              </div>
              <div className="sm:order-1">
                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                  <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-neutral hover:text-white">
                    -
                  </button>
                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                    1
                  </div>
                  <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-neutral hover:text-white">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatured;
