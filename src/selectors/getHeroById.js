import { heroes } from "../components/data/heroes"

const getHeroById = (id) => {

    return heroes.filter(hero => hero.id === id);
}

export default getHeroById
