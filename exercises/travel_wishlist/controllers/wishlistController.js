import {countryList} from '../countries.js';

let countries = countryList;

export function getCountries(req, res) {
    const {sort, visited} = req.query;
    let result = countries;

    if (sort) {
        const copy = [...result];
        result = copy.sort((c1, c2) => (c1.name < c2.name ? -1 : 1));
    }

    if (visited) {
        result = result.filter((c) => c.visited);
    }

    res.json(result);
}

export function postCountry(req, res) {
    const {name, alpha2Code, alpha3Code, visited} = req.body;

    const alreadyInTheList = countries.some(
        (c) => c.alpha2Code == alpha2Code || c.alpha3Code == alpha3Code
    );
    if (alreadyInTheList) {
        return res.json({message: 'country already in the list'});
    }

    countries.push({
        id: countries.length + 1,
        name,
        alpha2Code,
        alpha3Code,
        visited: JSON.parse(visited),
    });

    res.json({countries});
}

export function getSingleCountry(req, res) {
    const code = req.params.code.toLowerCase();

    const result = countries.filter(
        (c) =>
            c.alpha2Code.toLowerCase() == code ||
            c.alpha3Code.toLowerCase() == code
    );

    if (!result.length > 0)
        res.json({message: 'country does not exist in the list'});

    res.json({country: result});
}

export function updateCountry(req, res) {
    const code = req.params.code.toLowerCase();
    const {name, alpha2Code, alpha3Code} = req.body;

    countries = countries.map((c) =>
        c.alpha2Code.toLowerCase() == code || c.alpha3Code.toLowerCase() == code
            ? {...c, name, alpha2Code, alpha3Code}
            : c
    );

    res.json({countries});
}

export function markCountryAsVisited(req, res) {
    const code = req.params.code.toLowerCase();
    countries = countries.map((c) =>
        c.alpha2Code.toLowerCase() == code || c.alpha3Code.toLowerCase() == code
            ? {...c, visited: true}
            : c
    );

    res.json({countries});
}
