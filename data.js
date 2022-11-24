import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mosh',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Hamish',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  pets: [
    {
      // _id: '1',
      name: 'German Sheperd',
      slug: 'german-sheperd',
      category: 'Dog',
      image: '/images/germansheperd.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Dog',
      rating: 7,
      numReviews: 2,
      description: 'Responsible dog',
      // type: 'Dogs',
      // height: 100,
      // weight: 70,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'German Sheperd',
    },
    {
      // _id: '2',
      name: 'Husky',
      slug: 'husky',
      category: 'Dog',
      image: '/images/husky.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Dog',
      rating: 7,
      numReviews: 2,
      description: 'snow dog',
      // type: 'Dogs',
      // height: 110,
      // weight: 80,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Husky',
    },
    {
      // _id: '3',
      name: 'Bulldog',
      slug: 'bulldog',
      category: 'Dog',
      image: '/images/bulldog.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Dog',
      rating: 7,
      numReviews: 2,
      description: 'funny dog',
      // type: 'Dogs',
      // height: 50,
      // weight: 70,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Bulldog',
    },
    {
      // _id: '4',
      name: 'Sausage Dog',
      slug: 'sausage-dog',
      category: 'Dog',
      image: '/images/sausagedog.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Dog',
      rating: 7,
      numReviews: 2,
      description: 'slinky dog',
      // type: 'Dogs',
      // height: 30,
      // weight: 40,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Sausage Dog',
    },
    {
      // _id: '5',
      name: 'Weimeraner',
      slug: 'weimeraner',
      category: 'Dog',
      image: '/images/weimeraner.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Dog',
      rating: 7,
      numReviews: 2,
      description: 'energetic dog',
      // type: 'Dogs',
      // height: 100,
      // weight: 70,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'German Sheperd',
    },
    {
      // _id: '1',
      name: 'Budgie',
      slug: 'budgie',
      category: 'Bird',
      image: '/images/budgie.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Bird',
      rating: 9,
      numReviews: 2,
      description: 'cute bird',
      // type: 'Dogs',
      // height: 100,
      // weight: 70,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'German Sheperd',
    },
    {
      // _id: '2',
      name: 'Spider Monkey',
      slug: 'spider-monkey',
      category: 'Monkey',
      image: '/images/spidermonkey.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Monkey',
      rating: 8,
      numReviews: 2,
      description: 'cute monkey',
      // type: 'Monkeys',
      // height: 30,
      // weight: 20,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Spider Monkey',
    },
    {
      // _id: '3',
      name: 'Tabby Cat',
      slug: 'tabby-cat',
      category: 'Cat',
      image: '/images/tabbycat.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Cat',
      rating: 7,
      numReviews: 2,
      description: 'shy cat',
      // type: 'Cats',
      // height: 20,
      // weight: 20,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Tabby Cat',
    },
    {
      // _id: '4',
      name: 'Horse',
      slug: 'horse',
      category: 'Horse',
      image: '/images/horse.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Horse',
      rating: 5,
      numReviews: 2,
      description: 'strong horse',
      // type: 'Dogs',
      // height: 100,
      // weight: 70,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Horse',
    },
    {
      // _id: '5',
      name: 'Piglet',
      slug: 'teacup-pig',
      category: 'Pig',
      image: '/images/piglet.jpg',
      price: 1,
      countInShelter: 1,
      brand: 'Pig',
      rating: 6,
      numReviews: 2,
      description: 'guard pig',
      // type: 'Pigs',
      // height: 30,
      // weight: 50,
      // hypoallergenic: false,
      // dietaryRestrictions: 'none',
      // breed: 'Piglet',
    },
  ],
};

export default data;
