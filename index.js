const express = require('express');
const app = express();
const path = require('path');
const productsRouter = require('./routes/products')



app.set( "views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use("/products", productsRouter);



const server = app.listen(3000, ()=>{
    console.log(`Listenting http://localhost:${server.address().port}`);
});