const products = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/6121448/pexels-photo-6121448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    user: "Eva McDonald",
    email: "eva@gmail.com",
    amound: "343.56",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    user: "Someone One",
    email: "Someone@gmail.com",
    amound: "32.22",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/5604520/pexels-photo-5604520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    user: "Daisy Hell",
    email: "daisy@gmail.com",
    amound: "343.56",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/4906201/pexels-photo-4906201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    user: "Andey Seea",
    email: "andy@gmail.com",
    amound: "432.43",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/5689044/pexels-photo-5689044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    user: "Someone Two",
    email: "someone@gmail.com",
    amound: "55.33",
  },
];
const TopBox = () => {
  return (
    <>
      <h1 className="text-2xl mb-5">Top Products</h1>
      <div className="lists">
        {products.map((product) => (
          <div
            className="flex items-center justify-between mb-8"
            key={product.id}
          >
            <div className="flex gap-5">
              <img
                src={product.image}
                alt=""
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className=" font-medium">{product.user}</span>
                <span className="text-sm">{product.email}</span>
              </div>
              <span className="font-medium">$ {product.amound}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopBox;
