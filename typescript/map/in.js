var arr = [1, 2, 3];
var doubledArr = arr.map(function (num) {
    return num * 2;
});
console.log(doubledArr);
var heroes = ['capt', 'hulk', 'thor'];
var HeroAttendance = heroes.map(function (hero) {
    var _a;
    return _a = {},
        _a[hero] = true,
        _a;
});
console.log(HeroAttendance);
