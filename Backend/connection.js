const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Godwin:Godu2005@pfinance.nyt4lvs.mongodb.net/new?retryWrites=true&w=majority&appName=PFinance')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
