import db from '../config/index.js'
import {hash, compare, hashSync, genSaltSync} from 'bcrypt'
import createToken from '../middleware/AuthenticatedUser.js'

// create a User class
export class User {
    // log in
    login(req, res){
        const {emailAdd, userPass} = req.body;
        const qryStr = `
            SELECT userID, firstName, lastName, gender, cellphoneNo, emailAdd, userPass, userRole, userProfile
            FROM Users
            WHERE emailAdd = '${emailAdd}';
        `;
        db.query(qryStr, async (err, data) => {
            console.log(data);
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err: 'Incorrect email address.'
                })
            }
            else {
                await compare(userPass, data[0].userPass, (_err, _result) => {
                    if (_err) throw _err;
                    const jwToken = createToken({
                        emailAdd, userPass
                    });
                    res.cookie('ValidClient', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    });

                    if(_result) {
                        res.status(200).json({
                            msg: 'Logged in',
                            jwToken,
                            result: data[0]
                        });
                    }
                    else {
                        res.status(401).json({
                            err: 'You entered a wrong password or did not register.'
                        })
                    };
                })
            }
        });
    }

    // fetch Users
    fetchUsers(req, res){
        const qryStr = `
        SELECT userID, firstName, lastName, gender, cellphoneNo, emailAdd, userPass, userRole, userProfile
        FROM Users;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch User
    fetchUser(req, res){
        const qryStr = `
        SELECT userID, firstName, lastName, gender, cellphoneNo, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE userID = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a User
    async createUser(req, res) {
        let detail = req.body;
        console.log(detail);
        let salt = genSaltSync(15); 
        console.log(detail.userPass);
        detail.userPass = await hash(detail.userPass, salt);
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }

        // sql query
        const qryStr = 'INSERT INTO Users SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            const jwToken = createToken(user);
            res.cookie('LegitClient', jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.status(200).json({msg: 'User successfully registered'});
        }) 
    }

    // update User details
    updateUser(req, res) {
        let data = req.body;
        if( (data.userPass !== null) || (data.userPass !== undefined)){
            data.userPass = hashSync(data.userPass, 15);
        }
        const qryStr = `
            UPDATE Users
            SET ?
            WHERE userID = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "User record has been updated."
            });
        });
    }
    
    // delete a User
    deleteUser(req, res) {
        const qryStr = `
            DELETE FROM Users
            WHERE userID = ?;`;
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'User record has been removed successfully.'
            });
        });  
    }
}


export class Products {

    fetchProducts(req, res){
        const qryStr = `
        SELECT prodID, prodName, price, prodDescription, category, imgURL
        FROM Products;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    fetchProduct(req, res){
        const qryStr = `
        SELECT prodID, prodName, price, prodDescription, category, imgURL
        FROM Products
        WHERE prodID = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                result: data
            });
        });
    }
//Adding a Product
    async addProduct(req, res) {
        let detail = req.body;
        console.log(detail);
        const qryStr = 'INSERT INTO Products SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            res.status(200).json({msg: 'Product added'});
        });
    }

    // update a Product
    updateProduct(req, res) {
        let data = req.body;
        const qryStr = `
            UPDATE Products
            SET ?
            WHERE prodID = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Record has been updated."
            });
        });
    }
    
    // delete a Product
    deleteProduct(req, res) {
        const qryStr = `
            DELETE FROM Products
            WHERE prodID = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Record has been removed successfully.'
            });
        });  
    }
}

//CART
export class Cart {
    fetchCarts(req, res){
        const qryStr = `
        SELECT order_id, user_id, perfume_id
        FROM Orders;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }
    fetchCart(req, res){
        const qryStr = `
        SELECT order_id, user_id, perfume_id
        FROM Orders
        WHERE order_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Cart
    async createCart(req, res) {
        let detail = req.body;
        const qryStr = 'INSERT INTO Orders SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            res.status(201).json({msg: 'Purchase created successfully.'});
        });
    }
    //Updating a Cart
    updateCart(req, res) {
        let data = req.body;
        const qryStr = `
            UPDATE Orders
            SET ?
            WHERE order_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Your purchase has been updated successful."
            });
        });
    }
    //Deleting a Cart
    deleteCart(req, res) {
        const qryStr = `
            DELETE FROM Orders
            WHERE order_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Purchase has been canceled successfully.'
            });
        });  
    }
}

