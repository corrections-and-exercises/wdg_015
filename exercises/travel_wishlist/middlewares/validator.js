import {body, validationResult} from 'express-validator';

export function countryValidator() {
    return [
        body('alpha2Code')
            .notEmpty()
            .trim()
            .isLength({min: 2, max: 2})
            .isAlpha(),
        body('alpha3Code')
            .notEmpty()
            .trim()
            .isLength({min: 3, max: 3})
            .isAlpha(),
        body('name').notEmpty().trim().isLength({min: 2}).isAlpha(),
        body('visited').trim().isIn(['true', 'false']),
    ];
}

export function validating(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({errors: result.array()});
    }

    next();
}
