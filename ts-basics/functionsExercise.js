function twoFer(name) {
    if (name === void 0) { name = 'you'; }
    return "one for ".concat(name, ", one for me.");
}
console.log(twoFer());
console.log(twoFer('anna'));
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
console.log(isLeapYear(2012));
