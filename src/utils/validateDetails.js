import validator from 'validator';
import { validPassword } from './regex';

export const validateDetails = details => {
    if (!details.name || !details.email || !details.password) {
        return false;
    }

    if (!validator.isEmail(details.email)) {
        return false;
    }
    if (!details.password.match(validPassword)) {
        return false;
    }
    return true;
};

export default validateDetails;
