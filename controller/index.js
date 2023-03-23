import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {User,
Products} from '../model/index.js'
import { Router } from 'express'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

// USERS
const user = new User();
route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
})
// Login
route.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
})
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

//PRODUCTS
const products = new Products();
route.get('/products', (req, res)=> {
    products.fetchProducts(req, res);
})
route.get('/product/:id', (req, res) => {
    products.fetchProduct(req, res);
})
route.post('/products', bodyParser.json(), (req, res)=> {
    products.addProduct(req, res);
})
route.put('/product/:id', bodyParser.json(), (req, res)=> {
    products.updateProduct(req, res);
})
route.delete('/product/:id', (req, res)=> {
    products.deleteProduct(req, res);
})

export default route;
