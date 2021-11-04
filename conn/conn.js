const mongoose = require("mongoose");

const conn = () => {
  mongoose
    .connect("mongodb://localhost:27017/users", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB Conectado");
    })
    .catch(() => {
      console.log("Houve um erro na conexão com o mongoDB");
    });
};

module.exports = conn;
