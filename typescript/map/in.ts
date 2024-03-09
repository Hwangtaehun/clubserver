type HeroNames = 'capt' | 'hulk' | 'thor';
type HeroAttendance = {
    [Name in HeroNames]: boolean;
}

var arr = [1,2,3];
var doubledArr = arr.map(function(num){
    return num * 2;
});

console.log(doubledArr);

var heroes = ['capt', 'hulk', 'thor'];
var HeroAttendance = heroes.map(function(hero){
    return {
        [hero]: true
    }
});

console.log(HeroAttendance);