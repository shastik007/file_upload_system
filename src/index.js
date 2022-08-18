import express from 'express';
import router from "./routes/file.route.js";
import { sequelize } from './db/database.js';

const PORT = process.env.PORT || 8000;
const app = express();``

app.use(express.json())
app.use('/api',router)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });


app.get('/',(request,response) => {
    response.send('Hi THIS IS MY FIRST EXPRESS BACKEND APPLICATION')
})



const startApplication = async () => {
    await sequelize.sync({ force: false });
    try{
        app.listen(PORT,'localhost',()=>{
            console.log('server started in port ', PORT);
        })
    }catch (e) {
        console.log(e)
    }
}


startApplication()