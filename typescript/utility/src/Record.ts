type HeroProfile = {
    skill: string;
    age: number;
};
type HeroNames = 'thor' | 'hulk' | 'capt';

type Heros = Record<HeroNames, HeroProfile>;
var avengers: Heros = {
    capt: {
        skill: '방패',
        age: 100
    },
    thor: {
        skill: '해머',
        age: 3000
    },
    hulk: {
        skill: '괴성',
        age: 47
    }
};

type PhoneBook = Record<string, string>;

var familyPhones: PhoneBook = {
    dad: '010--------',
    mon: '010--------'
};

var myPhone: PhoneBook = {
    me: '010----------',
};

var companyPhones: PhoneBook = {
    ceo: '010---------',
    hr: '010----------',
    engineering: '010----------'
};