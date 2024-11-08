export const createBooking = catchAsync(async (req, res, next) => {
    const {
      car_id,
      username,
      company_name,
      start_date,
      end_date,
      price_per_day,
      price_per_month,
      agreement,
      car_pictures,
      with_driver,
    } = req.body;
  
    const [booking] = await db('bookings').insert({
      car_id,
      username,
      company_name,
      start_date,
      end_date,
      price_per_day,
      price_per_month,
      agreement,
      car_pictures,
      with_driver,
    }).returning('*');
  
    res.status(201).json({
      status: 'success',
      data: {
        booking,
      },
    });
  });
  
  // Get all bookings
  export const getAllBookings = catchAsync(async (req, res, next) => {
    const bookings = await db('bookings')
      .join('cars', 'bookings.car_id', 'cars.id')
      .select('bookings.*', 'cars.make', 'cars.model');
  
    res.status(200).json({
      status: 'success',
      results: bookings.length,
      data: {
        bookings,
      },
    });
  });
  
  // Get a single booking by ID
  export const getBookingById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const booking = await db('bookings')
      .where({ 'bookings.id': id })
      .join('cars', 'bookings.car_id', 'cars.id')
      .select('bookings.*', 'cars.make', 'cars.model')
      .first();
  
    if (!booking) {
      return next(new AppError('Booking not found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        booking,
      },
    });
  });
  
  // Update a booking by ID
  export const updateBooking = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const {
      username,
      company_name,
      start_date,
      end_date,
      price_per_day,
      price_per_month,
      agreement,
      car_pictures,
      with_driver,
    } = req.body;
  
    const [updatedBooking] = await db('bookings')
      .where({ id })
      .update({
        username,
        company_name,
        start_date,
        end_date,
        price_per_day,
        price_per_month,
        agreement,
        car_pictures,
        with_driver,
      })
      .returning('*');
  
    if (!updatedBooking) {
      return next(new AppError('Booking not found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        booking: updatedBooking,
      },
    });
  });
  
  // Delete a booking by ID
  export const deleteBooking = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const deleted = await db('bookings').where({ id }).del();
  
    if (!deleted) {
      return next(new AppError('Booking not found', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });