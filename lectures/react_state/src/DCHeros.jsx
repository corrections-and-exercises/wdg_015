import HeroProfile from './HeroProfile.jsx';
import {useState} from 'react';

function DCHeroes() {
    const [justiceLeague, setJusticeLeague] = useState([
        {id: 1, name: 'Batman'},
        {id: 2, name: 'Wonder Woman'},
        {id: 3, name: 'Superman'},
        {id: 4, name: 'The Flash'},
        {id: 5, name: 'Batman'},
    ]);

    function removeHero(id) {
        setJusticeLeague(justiceLeague.filter((el) => el.id !== id));
    }

    function changeBatman() {
        setJusticeLeague(
            justiceLeague.map((hero) =>
                hero.name === 'Batman' ? {...hero, name: 'Karl'} : hero
            )
        );
    }

    return (
        <>
            <h1>DC HEROS</h1>
            {justiceLeague.map((hero) => (
                <HeroProfile
                    key={hero.id}
                    heroName={hero.name}
                    removeHero={removeHero}
                    id={hero.id}
                />
            ))}
            <button onClick={changeBatman}>Change Batman</button>
        </>
    );
}

export default DCHeroes;
