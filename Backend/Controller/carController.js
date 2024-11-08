import db from "../Config/db.js";
import catchAsync from '../utils/catchAsync.js';
import AppError from "../utils/appError.js"

// Create a new car
export const createCar = catchAsync(async (req, res, next) => {
  const { make, model, variant, registration_no, documents } = req.body;

  const [car] = await db('cars').insert({
    make,
    model,
    variant,
    registration_no,
    documents,
  }).returning('*');

  res.status(201).json({
    status: 'success',
    data: {
      car,
    },
  });
});

// Get all cars
export const getAllCars = catchAsync(async (req, res, next) => {
  const cars = await db('cars').select('*');

  res.status(200).json({
    status: 'success',
    results: cars.length,
    data: {
      cars,
    },
  });
});

// Get a single car by ID
export const getCarById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const car = await db('cars').where({ id }).first();

  if (!car) {
    return next(new AppError('Car not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      car,
    },
  });
});

// Update a car by ID
export const updateCar = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { make, model, variant, registration_no, documents } = req.body;

  const [updatedCar] = await db('cars')
    .where({ id })
    .update({
      make,
      model,
      variant,
      registration_no,
      documents,
    })
    .returning('*');

  if (!updatedCar) {
    return next(new AppError('Car not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      car: updatedCar,
    },
  });
});

// Delete a car by ID
export const deleteCar = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await db('cars').where({ id }).del();

  if (!deleted) {
    return next(new AppError('Car not found', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
