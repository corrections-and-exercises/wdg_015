import {Router} from 'express';
import {
    getCountries,
    getSingleCountry,
    postCountry,
    updateCountry,
    markCountryAsVisited,
} from '../controllers/wishlistController.js';
import {countryValidator, validating} from '../middlewares/validator.js';

export const wishlistRouter = Router();

wishlistRouter
    .route('/')
    .get(getCountries)
    .post(countryValidator(), validating, postCountry);
wishlistRouter
    .route('/:code')
    .get(getSingleCountry)
    .put(countryValidator(), validating, updateCountry)
    .delete(markCountryAsVisited);
