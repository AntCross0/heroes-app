import { heroes } from "../components/data/heroes";

const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`el publisher "${publisher}" que haz especificado, no existe, prueba con: Dc, Marvel`);
    }

    return heroes.filter(hero => (hero.publisher === publisher));
}

export default getHeroByPublisher
