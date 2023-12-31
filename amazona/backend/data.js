import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "tarikk",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456789"),
      isAdmin: true,
    },
    {
      name: "bergen",
      email: "bergen@gmail.com",
      password: bcrypt.hashSync("12789"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim shirt",
      slug: "nike-silm-shirt",
      category: "shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Adidas Fit shirt",
      slug: "adidas-fit-shirt",
      category: "shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 200,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Nike Slim Pants",
      slug: "nike-silm-pants",
      category: "pants",
      image: "/images/p3.jpg", // 679px x 829px
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality pants",
    },
    {
      name: "Adidas Fit Pants",
      slug: "adidas-fit-pants",
      category: "pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.4,
      numReviews: 10,
      description: "high quality pants",
    },
  ],
};

export default data;
