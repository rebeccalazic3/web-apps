const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error(`Greska: ${error.message}`);
  } else {
    console.log(`Pokrenut na ${PORT}`);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/hello_express.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

const users = [
  {
    id: 1,
    ime: "ime",
    prezime: "prezime",
  },
  { id: 1, ime: "ime", prezime: "prezime1" },
  { id: 1, ime: "ime", prezime: "prezime" },
];

app.get ('/users', (req, res) => {
    res.json(users); 
})

// users =[
//     {
//        ime: "ime",
//         prezime: "prezime"
//     },
//     {
//         ime: "ime1",
//         prezime: "prezime1"
//     }
// ]

// users[0].ime
