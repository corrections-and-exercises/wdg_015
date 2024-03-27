import {body, validationResult} from 'express-validator';

export function nameValidator() {
    return [
        body('first_name').notEmpty().trim(),
        body('last_name').notEmpty().trim(),
    ];
}

export function validating(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({errors: result.array()});
    }
    next();
}
