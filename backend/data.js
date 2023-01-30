import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Elena',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Kim',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Blueberry Cake',
      slug: 'Blueberry Cake',
      category: 'Cake',

      image: '/images/blueberryCake.jpeg',
      price: '17.90',
      countInStock: 10,
      brand: 'Milk & Cake',
      rating: 4.5,
      numReviews: 10,
      description: 'very tasty',
    },
    {
      // _id: '2',
      name: 'Chocolate Muffins',
      slug: 'Chocolate Muffins',
      category: 'muffins',
      image: '/images/chocolateMuffins.jpeg',
      price: '19.90',
      countInStock: 0,
      brand: 'Milk & Cake',
      rating: 5,
      numReviews: 8,
      description: 'very tasty',
    },
    {
      //_id: '3',
      name: 'Fruit Cake',
      slug: 'Fruit Cake',
      category: 'Cake',

      image: '/images/fruitCake.jpeg',
      price: '15.90',
      countInStock: 8,
      brand: 'Milk & Cake',
      rating: 3.5,
      numReviews: 7,
      description: 'very tasty',
    },
    {
      //_id: '4',
      name: 'Waffle',
      slug: 'Waffle',
      category: 'Small tasty think',
      image: '/images/waffle.jpeg',
      price: '12.90',
      countInStock: 6,
      brand: 'Milk & Cake',
      rating: 4,
      numReviews: 9,
      description: 'very tasty',
    },
    {
      //_id: '5',
      name: 'Macaron',
      slug: 'Macaron',
      category: 'Small tasty think',
      image: '/images/macaron.jpeg',
      price: '10.90',
      countInStock: 6,
      brand: 'Milk & Cake',
      rating: 5,
      numReviews: 9,
      description: 'very tasty',
    },
  ],
};

export default data;
