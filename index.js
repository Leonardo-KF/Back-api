const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const filmes = [
  {
    id: 0,
    nome: "Inception",
    imagem: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
    genero: "Ação / Aventura",
    nota: 8.8,
    assistido: "false",
  },
  {
    id: 1,
    nome: "Interstellar",
    imagem: "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    genero: "Aventura / Drama",
    nota: 8.6,
    assistido: "false",
  },
  {
    id: 2,
    nome: "A Procura da Felicidade",
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
    genero: "Biografia / Drama",
    nota: 8.0,
    assistido: "false",
  },
];

app.get("/", (req, res) => {
  res.send(filmes);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(filmes[id]);
});

app.post("/create", (req, res) => {
  const { nome, imagem, genero, nota } = req.body;
  const filme = {
    id: filmes.length,
    nome: nome,
    imagem: imagem,
    genero: genero,
    nota: parseFloat(nota),
    assistido: "false",
  };
  filmes.push(filme);
  res.send(filmes);
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { nome, imagem, genero, nota } = req.body;
  filmes[id] = {
    id: id,
    nome: nome,
    imagem: imagem,
    genero: genero,
    nota: parseFloat(nota),
    assistido: "false",
  };
  res.send(filmes);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  delete filmes[id];
  res.send(filmes);
});

app.listen(3000);
