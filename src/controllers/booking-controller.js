const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createBooking(req, res) {
  try {
    console.log(req.body);
   const flight = await BookingService.createBooking({
      flightId: req.body.flightId,
      userId: req.body.userId,
      noOfSeats: req.body.noOfSeats
   });
   SuccessResponse.data = flight;
   return res
     .status(StatusCodes.CREATED)
     .json(SuccessResponse);
  } catch (error) {
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse)

  }
}

module.exports = {
  createBooking
  
}