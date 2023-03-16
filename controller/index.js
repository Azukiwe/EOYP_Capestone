import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {User,
Products} from '../model/index.js'
import { Router } from 'express'

// code to fix error: __dirname is not defined
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

// Create a client instance
const user = new User();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Client's Route
// Login
route.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
})

// get all clients: works
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});

// get a user : works
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});

// Update : works
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register : works
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete : works
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});


// Fetch all perfumes
const products = new Products();

route.get('/products', (req, res)=> {
    products.fetchProducts(req, res);
})

// Fetch a single perfume
route.get('/product/:id', (req, res) => {
    products.fetchProduct(req, res);
})

// Add a new perfume
route.post('/products', bodyParser.json(), (req, res)=> {
    products.addProduct(req, res);
})

// Update a product
route.put('/product/:id', bodyParser.json(), (req, res)=> {
    products.updateProduct(req, res);
})

// Delete a product
route.delete('/product/:id', (req, res)=> {
    products.deleteProduct(req, res);
})

export default route;
