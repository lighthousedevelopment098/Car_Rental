import db from "../Config/db.js";
import catchAsync from '../utils/catchAsync.js';
import AppError from "../utils/appError.js"

export const createDriver = catchAsync(async (req, res, next) => {
    const { booking_id, name, license, identity_card } = req.body;
  
    const [driver] = await db('drivers').insert({
      booking_id,
      name,
      license,
      identity_card,
    }).returning('*');
  
    res.status(201).json({
      status: 'success',
      data: {
        driver,
      },
    });
  });
  
  // Get all drivers
  export const getAllDrivers = catchAsync(async (req, res, next) => {
    const drivers = await db('drivers')
      .join('bookings', 'drivers.booking_id', 'bookings.id')
      .select('drivers.*', 'bookings.username', 'bookings.company_name');
  
    res.status(200).json({
      status: 'success',
      results: drivers.length,
      data: {
        drivers,
      },
    });
  });
  
  // Get a single driver by ID
  export const getDriverById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const driver = await db('drivers')
      .where({ 'drivers.id': id })
      .join('bookings', 'drivers.booking_id', 'bookings.id')
      .select('drivers.*', 'bookings.username', 'bookings.company_name')
      .first();
  
    if (!driver) {
      return next(new AppError('Driver not found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        driver,
      },
    });
  });
  
  // Update a driver by ID
  export const updateDriver = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name, license, identity_card } = req.body;
  
    const [updatedDriver] = await db('drivers')
      .where({ id })
      .update({ name, license, identity_card })
      .returning('*');
  
    if (!updatedDriver) {
      return next(new AppError('Driver not found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        driver: updatedDriver,
      },
    });
  });
  
  // Delete a driver by ID
  export const deleteDriver = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const deleted = await db('drivers').where({ id }).del();
  
    if (!deleted) {
      return next(new AppError('Driver not found', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });