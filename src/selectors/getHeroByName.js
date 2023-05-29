import { heroes } from "../components/data/heroes";

export const getHeroByName = (name) => {

    if (name === '') {
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}