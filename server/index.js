const express =require('express');
const app = express();

const morgan = require('morgan');
const {mongoose}= require('./database');

//Settings

app.set('port',process.env.PORT || 3000);

//Middleware
 
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/employes',require('./route/employes.route'));

//starting the server
app.listen(app.get('port'), ()=> {
   console.log('server on port 3000')
});

