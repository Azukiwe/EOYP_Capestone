import connect from 'dotenv'
const dotenv = connect
import web from 'jsonwebtoken'
const {sign, verify}  = web

dotenv.config();

// Creating a token
export default function createToken(user) {
    return sign(
        {
            user_email: user.email,
            user_password: user.password
        },
        process.env.SECRET_KEY, 
        { 
            expiresIn: '1h'
        }
    );
}
//
export  function verifyAToken(req, res, next) {
    try{
        const token = req.cookies["ValidClient"] !== null ? req.cookies["ValidClient"] :
        "Please register" ;
        const isValid = null;
        if(token !== "Please register") {
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "Please register"})
            }
        }else {
            res.status(400).json({err: "Please register"})
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}
