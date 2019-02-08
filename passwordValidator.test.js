const validatePassword = require("./passwordValidator");

test("パスワードが6文字以上ならばtrue", () => {
    expect(validatePassword("123Abc")).toBe(true);
});

test("パスワードが5文字以下ならばfalse", () => {
    expect(validatePassword("123Ab")).toBe(false);
});

test("パスワードが半角英数字のみを含むならばtrue", () => {
    expect(validatePassword("1234ABcd")).toBe(true);
});

test("パスワードが半角英数字以外を含むならばfalse", () => {
    expect(validatePassword("1234!ABcd")).toBe(false);
});

test("パスワードが文字列でないならば例外を投げる", () => {
    expect(() => validatePassword({ a: 123 })).toThrowError("パスワードが文字列ではありません");
});