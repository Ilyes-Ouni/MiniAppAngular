const express = require('express')
const app = express();
const bodyParser = require('body-parser'); // middleware
require("dotenv").config();
const PORT = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
var cors = require('cors')
app.use(cors());

const produits = require('./router/produit.router')
app.use('/', produits)

const categories = require('./router/categorie.router')
app.use('/', categories)


app.listen(3000)