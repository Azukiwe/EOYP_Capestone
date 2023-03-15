import expressModule from 'express'
const express = expressModule
import route from './controller/index.js'
import connect from 'cors'
const port = parseInt(process.env.PORT) || 6000;
const cors = connect
// import errorHandling from './middleware/ErrorHandling.js'
// const errorHandling = errorHandlingModule
import cookieParser from 'cookie-parser'

const app = express();

app.use((req, res, next)=> {
     
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: true})
)

// Server is running
app.listen(port, () => {
    console.log(`Server is running ${port}`)
});
// Handling all errors
// app.use(errorHandling);