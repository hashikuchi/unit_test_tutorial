function validatePassword(password) {
    if (typeof password !== "string") {
        throw TypeError("パスワードが文字列ではありません");
    }
    if (password.length < 6) {
        return false;
    }
    return !!password.match(/^[0-9a-zA-Z]+$/);
}

module.exports = validatePassword;