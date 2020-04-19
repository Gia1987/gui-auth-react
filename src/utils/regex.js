// this regex match the follow criteria : length > 9, at least 1 number, at least 1 uppercase + lowercase.
export const validPassword = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{10,}$/;
export default validPassword;
