const express = require('express');
const mongoose = require('mongoose');
const Product=require('./model')
const app = express();
const port = process.env.PORT || 3001;
let cors = require("cors");
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/online-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to the database');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      if(products.length==0){
        res.status(404).json({message: "No products found"});
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/api/products/:id', async (req, res) => {
    try {
      const product = await Product.findOne({_id:req.params.id});
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });