//Import required modules
const express = require('express');
const multer = require('multer');
const hbs = require('hbs');
const path = require('path');

//Defining the port for app to listen on
const PORT = 3000;

//Defining how the files should be stored in the file system
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        //To allow each file to be saved with its own unique timestamp
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
});

const upload = multer({
    //Defining where to store the files
    storage: storage, 
    //Ensuring that only images are accepted as valid uploads
    fileFilter: function(req, file, cb) {
        const fileTypes = /jpeg|jpg|png/

        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

        if (extname) {
            return cb(null, true);
        } else {
            cb('Error: Only Images can be uploaded');
        }
    }
}).single('photo')

//Initiate Express Application
const app = express();

//Define path to views directory
const viewsPath = path.join(__dirname, '../views');

//Set up handlebars template engine and views location
app.set('view engine', hbs);
app.set('views', viewsPath);

//Set up static directory for public view
app.use(express.static('./public'));

//GET route for serving initial homepage
app.get('/', (req, res) => {
    res.render('index.hbs', {
        message: 'Select an image'
    });
});

//GET route for 404 pages
app.get("*", (req, res) => {
    res.render('404.hbs');
});

//POST route for rendering homepage depending on user action
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index.hbs', {
                message: 'Only images can be uploaded!',
                textColor: 'text-danger'
            });
        } else if (!req.file) {
            res.render('index.hbs', {
                message: 'Please select an image!',
                textColor: 'text-danger'
            });
        } else {
            res.render('index.hbs', {
                message: 'Image successfully uploaded!',
                textColor: "text-success"
            });
        }
    })
});

//To make the server live
app.listen(PORT, () => {
    console.log('Server is up and running');
});
