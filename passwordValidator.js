function validatePassword(password) {
    if (password.length < 6) {
        return false;
    }
    return !!password.match(/^[0-9a-zA-Z]+$/);
}

module.exports = validatePassword;