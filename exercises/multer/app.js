import express from 'express';
import path from 'path';
import multer from 'multer';
import {pool} from './db.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('.'));

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${extension}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith('image'))
        return cb(new Error('Invalid file type. Please upload an image'));
    const allowedExtension = ['.png', '.jpg', '.jpeg'];
    const extension = path.extname(file.originalname);
    return allowedExtension.includes(extension)
        ? cb(null, true)
        : cb(new Error('Type of image not accepted'));
};

const upload = multer({storage, fileFilter});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views', 'index.html'));
});

// app.post(
//     '/upload-profile-pic',
//     upload.single('profile_pic'),
//     async (req, res, next) => {
//         try {
//             if (!req.file) throw new Error('Please upload something');
//             return res
//                 .status(200)
//                 .send(
//                     `<h1>Here is the picture</h1><img src="${req.file.path}" alt="" />`
//                 );
//         } catch (error) {
//             next(error);
//         }
//     }
// );

app.post('/upload-cat-pics', upload.array('cat_pics', 3), (req, res, next) => {
    try {
        if (!req.files) throw new Error('Please upload many cat pics');
        const allCatPics = req.files
            .map((img) => `<div><img src="${img.path}" alt="" /></div> `)
            .join('');

        return res.status(200).send(allCatPics);
    } catch (error) {
        next(error);
    }
});

app.post(
    '/upload-profile-pic',
    upload.single('profile_pic'),
    async (req, res, next) => {
        try {
            if (!req.file) throw new Error('Please upload something');

            const {originalname, path, filename} = req.file;
            const {
                rows: [fileDetails],
            } = await pool.query(
                `INSERT INTO pictures (name, path, filename) VALUES ($1, $2, $3) RETURNING *`,
                [originalname, path, filename]
            );

            return res
                .status(200)
                .send(
                    `<h1>Here is the picture</h1><img src="${fileDetails.path}" alt="" />`
                );
        } catch (error) {
            next(error);
        }
    }
);

app.get('/get-pics', async (req, res, next) => {
    try {
        const {rows: pictures} = await pool.query('SELECT * FROM pictures');

        const displayedLinks = pictures
            .map((picture) => `<a href="/${picture.path}">${picture.name}</a>`)
            .join('<br>');
        console.log(displayedLinks);
        res.send(displayedLinks);
    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    return res.status(500).send(`<h2>${err.message}</h2>`);
});

export default app;
