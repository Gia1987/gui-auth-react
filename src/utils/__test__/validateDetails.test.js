import { validateDetails } from '../validateDetails';

describe('validateDetails', () => {
    it('should return false if name is not provided', async () => {
        const details = {
            name: '',
            email: 'test@email.com',
            role: '',
            password: 'Mypassword123'
        };

        expect(validateDetails(details)).toEqual(false);
    });

    it('should return false if email is not provided', async () => {
        const details = {
            name: 'Jack',
            email: '',
            role: '',
            password: 'Mypassword123'
        };

        expect(validateDetails(details)).toEqual(false);
    });

    it('should return false if password is not provided', async () => {
        const details = {
            name: 'Jack',
            email: 'test@email.com',
            role: '',
            password: ''
        };

        expect(validateDetails(details)).toEqual(false);
    });
    it('should return false if email is not valid', async () => {
        const details = {
            name: 'Jack',
            email: 'test!!!email.com',
            role: '',
            password: 'Mypassword123'
        };

        expect(validateDetails(details)).toEqual(false);
    });
    it('should return false if password is too short', async () => {
        const details = {
            name: 'Jack',
            email: 'test@email.com',
            role: '',
            password: 'Mypasswo1'
        };

        expect(validateDetails(details)).toEqual(false);
    });
    it('should return false if password is all lowercase', async () => {
        const details = {
            name: 'Jack',
            email: 'test@email.com',
            role: '',
            password: 'mypassword123'
        };

        expect(validateDetails(details)).toEqual(false);
    });
    it('should return false if password is all uppercase', async () => {
        const details = {
            name: 'Jack',
            email: 'test@email.com',
            role: '',
            password: 'MYPASSWORD123'
        };

        expect(validateDetails(details)).toEqual(false);
    });
    it('should return false if password is does not contains numbers', async () => {
        const details = {
            name: 'Jack',
            email: 'test@email.com',
            role: '',
            password: 'Mypassword'
        };

        expect(validateDetails(details)).toEqual(false);
    });
    it('should return true if all details match the criteria', async () => {
        const details = {
            name: 'Jack',
            email: 'test@email.com',
            role: '',
            password: 'Mypassword1234'
        };

        expect(validateDetails(details)).toEqual(true);
    });
});
