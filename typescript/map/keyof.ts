interface Hero {
    name: string;
    skill: string;
}

type HeroPropCheck = {
    [H in keyof Hero]: boolean;
}

//위와 같다.
// type HeroPropCheck = {
//     [H in 'name' | 'skill']: boolean;
// }

type HeroNames1 = keyof Hero; //== type HeroNames2 = 'name' | 'skill';