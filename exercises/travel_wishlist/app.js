import express from 'express';
import {wishlistRouter} from './routes/wishlistRouter.js';
import {engine} from 'express-handlebars';
import {countryList} from './countries.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/static', express.static('assets'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {list: countryList});
});

app.use('/api/countries', wishlistRouter);

export default app;
