import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Pet from '../models/petModel.js';
import { isAdmin, isAuth } from '../utils.js';

const petRouter = express.Router();

petRouter.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.send(pets);
});

petRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newPet = new Pet({
      name: 'sample name ' + Date.now(),
      slug: 'sample-name-' + Date.now(),
      image: '/images/p1.jpg',
      price: 0,
      category: 'sample category',
      brand: 'sample brand',
      countInShelter: 0,
      rating: 0,
      description: 'sample description',
      // type: 'sample type',
      // adoptionStatus: 'sample adoptionStatus',
      // height: 0,
      // weight: 0,
      // color: 'sample color',
      // hypoallergenic: true,
      // dietaryRestrictions: 'sample dietaryRestrictions',
      // breed: 'sample breed',
    });
    const pet = await newPet.save();
    res.send({ message: 'Pet Created', pet });
  })
);

petRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const petId = req.params.id;
    const pet = await Pet.findById(petId);
    if (pet) {
      pet.name = req.body.name;
      pet.slug = req.body.slug;
      pet.price = req.body.price;
      pet.image = req.body.image;
      pet.category = req.body.category;
      pet.brand = req.body.brand;
      pet.countInShelter = req.body.countInShelter;
      pet.description = req.body.description;
      // pet.type = req.body.type;
      // pet.adoptionStatus = req.body.adoptionStatus;
      // pet.height = req.body.height;
      // pet.weight = req.body.weight;
      // pet.color = req.body.color;
      // pet.hypoallergenic = req.body.hypoallergenic;
      // pet.dietaryRestrictions = req.body.dietaryRestrictions;
      // pet.breed = req.body.breed;
      await pet.save();
      res.send({ message: 'Pet Updated' });
    } else {
      res.status(404).send({ message: 'Pet Not Found' });
    }
  })
);

petRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const pet = await Pet.findById(req.params.id);
    if (pet) {
      await pet.remove();
      res.send({ message: 'Pet Deleted' });
    } else {
      res.status(404).send({ message: 'Pet Not Found' });
    }
  })
);

const PAGE_SIZE = 3;

petRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const pets = await Pet.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countPets = await Pet.countDocuments();
    res.send({
      pets,
      countPets,
      page,
      pages: Math.ceil(countPets / pageSize),
    });
  })
);

petRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || '';
    const price = query.price || '';
    const rating = query.rating || '';
    const order = query.order || '';
    const searchQuery = query.query || '';

    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
            name: {
              $regex: searchQuery,
              $options: 'i',
            },
          }
        : {};
    const categoryFilter = category && category !== 'all' ? { category } : {};
    const ratingFilter =
      rating && rating !== 'all'
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};
    const priceFilter =
      price && price !== 'all'
        ? {
            price: {
              $gte: Number(price.split('_')[0]),
              $lte: Number(price.split('_')[0]),
            },
          }
        : {};
    const sortOrder =
      order === 'featured'
        ? { featured: -1 }
        : order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : order === 'newest'
        ? { createdAt: -1 }
        : { _id: -1 };

    const pets = await Pet.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    })

      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countPets = await Pet.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      pets,
      countPets,
      page,
      pages: Math.ceil(countPets / pageSize),
    });
  })
);

petRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Pet.find().distinct('category');
    res.send(categories);
  })
);

petRouter.get('/slug/:slug', async (req, res) => {
  const pet = await Pet.findOne({ slug: req.params.slug });
  if (pet) {
    res.send(pet);
  } else {
    res.status(404).send({ message: 'Pet Not Found' });
  }
});

petRouter.get('/:id', async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (pet) {
    res.send(pet);
  } else {
    res.status(404).send({ message: 'Pet Not Found' });
  }
});

export default petRouter;
