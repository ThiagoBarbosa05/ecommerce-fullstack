const express = require("express");
const passport = require("passport");

const app = express();
const cors = require("cors");
const { registerCustomers } = require("./controllers");
const productsRouter = require("./routes/productsRouter");

require("./controllers/passport");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  require("express-session")({
    secret: "testapiecommerce",
    resasve: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

app.post("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ message: "Logout bem sucedido!" });
  });
});

app.use(productsRouter)
app.use(registerCustomers);


// app.get("/profile", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.json({ message: req.user});
//   } else {
//     res.json({ message: "Você não está autenticado!" });
//   }
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
