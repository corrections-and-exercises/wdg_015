function HeroProfile({heroName, id, removeHero}) {
    return (
        <div className='heroProfile'>
            <h2>{heroName}</h2>
            <p>
                This hero is part of the Justice League! You can count on them
                to save the day!
            </p>
            <button onClick={() => removeHero(id)}>Remove Hero</button>
        </div>
    );
}

export default HeroProfile;
