const validatePassword = require("./passwordValidator");

// パスワードが6文字以上かつ
// 半角英数字のみを含む場合 true
// それ以外の場合 false を返す

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