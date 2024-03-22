import express from 'express';
import {pets} from './petList.js';
import {
    sendAnimalDetailView,
    sendCategoryView,
    sendHomeView,
} from './controller/animals.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', sendHomeView);

app.get('/animals/:pet_type', sendCategoryView);

app.get('/animals/:pet_type/:pet_id', sendAnimalDetailView);

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log('app is listening');
});
