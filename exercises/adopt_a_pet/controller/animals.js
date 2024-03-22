import {pets} from '../petList.js';

export function sendHomeView(req, res) {
    res.send(`
    <h1>Adop a Pet</h1>
    <p>Browse through the links below to find your new furry friend.</p>
    <ul>
    <li><a href="/animals/dogs">Dogs</a></li>
    <li><a href="/animals/cats">Cats</a></li>
    <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>
    `);
}

export function sendCategoryView(req, res) {
    const {pet_type} = req.params;
    res.send(`
    <h1>List of ${pet_type[0].toUpperCase() + pet_type.slice(1)}</h1>
    <ul>
    ${pets[pet_type]
        .map(
            (pet, index) =>
                `<li><a href="/animals/${pet_type}/${index}">${pet.name}</a></li>`
        )
        .join('')}
    </ul>`);
}

export function sendAnimalDetailView(req, res) {
    const {pet_type, pet_id} = req.params;
    const findPet = pets[pet_type][pet_id];
    res.send(`
    <h1>${findPet.name}</h1>
    <img src=${findPet.url} alt=${pet_type}/>
    <p>${findPet.description}</p>
    <ul>
    <li>${findPet.breed}</li>
    <li>${findPet.age}</li>
    `);
}
