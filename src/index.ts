const express = require('express')
const morgan = require('morgan')
//init database connection
const app = express();
//settings
app.set('port',process.env.PORT||4000);

//middleware
app.use(morgan('dev'))

//Global variables

//routes

//Public

//Starting Server
app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'))
})

