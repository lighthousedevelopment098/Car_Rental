import db from "../Config/db.js";
import catchAsync from '../utils/catchAsync.js';
import AppError from "../utils/appError.js"


export const createFueling = catchAsync(async (req, res, next) => {
    const { booking_id, customer_paid, verified } = req.body;
  
    const [fueling] = await db('fueling').insert({
      booking_id,
      customer_paid: customer_paid || false,
      verified: verified || false,
    }).returning('*');
  
    res.status(201).json({
      status: 'success',
      data: {
        fueling,
      },
    });
  });
  
  // Get all fueling records
  export const getAllFuelings = catchAsync(async (req, res, next) => {
    const fuelings = await db('fueling')
      .join('bookings', 'fueling.booking_id', 'bookings.id')
      .select('fueling.*', 'bookings.username', 'bookings.company_name');
  
    res.status(200).json({
      status: 'success',
      results: fuelings.length,
      data: {
        fuelings,
      },
    });
  });
  
  // Get a single fueling record by ID
  export const getFuelingById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const fueling = await db('fueling')
      .where({ 'fueling.id': id })
      .join('bookings', 'fueling.booking_id', 'bookings.id')
      .select('fueling.*', 'bookings.username', 'bookings.company_name')
      .first();
  
    if (!fueling) {
      return next(new AppError('Fueling record not found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        fueling,
      },
    });
  });
  
  // Update a fueling record by ID
  export const updateFueling = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { customer_paid, verified } = req.body;
  
    const [updatedFueling] = await db('fueling')
      .where({ id })
      .update({ customer_paid, verified })
      .returning('*');
  
    if (!updatedFueling) {
      return next(new AppError('Fueling record not found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        fueling: updatedFueling,
      },
    });
  });
  
  // Delete a fueling record by ID
  export const deleteFueling = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const deleted = await db('fueling').where({ id }).del();
  
    if (!deleted) {
      return next(new AppError('Fueling record not found', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });