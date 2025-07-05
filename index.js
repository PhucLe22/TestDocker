require('dotenv').config(); // Load biến môi trường trước
const express = require('express');
const app = express();
const port = process.env.PORT;
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');


db.connect();

// Cấu hình Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Helps server define the req.body and req.json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
