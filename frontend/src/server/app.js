const express = require("express");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const SECRET_KEY = "process.env.SECRET_KEY";
console.log(process.env);
const users = [
  { username: "Inácio", email: "client", password: "client" },
  { username: "Toni", email: "root", password: "root" },
];

const manageRegistry = (username, email, password, res) => {
  users.push({ username: username, email: email, password: password });
  res.cookie("loggedin", true);
  res.send({ username: username, status: 200 });
};

const generateToken = (payload) => {
  return jsonwebtoken.sign(payload, SECRET_KEY);
};

const authenticateToken = (req, res, next) => {
  if (token === null) return res.sendStatus(401);

  jsonwebtoken.verify(token, SECRET_KEY, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

//get users endpoint
app.get("/users", (req, res) => res.send(users));

//Authenticate endpoint
app.get("/authenticate", authenticateToken, (req, res) => {
  res.sendStatus(200);
});

//register endpoint
app.post("/new", (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let badUsername = false;
  let badEmail = false;

  users.forEach((user) => {
    if (user.username === username) {
      badUsername = true;
      return;
    }
  });

  users.forEach((user) => {
    if (user.email === email) {
      badEmail = true;
      return;
    }
  });
  badUsername === true
    ? res.send({ message: "Username already in use!", status: 400 })
    : badEmail === true
    ? res.send({ message: "Email already in use!", status: 400 })
    : manageRegistry(username, email, password, res);
});

//login endpoint
app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = "";

  let found = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      username = user.username;
      found = true;
    }
  });
  if (found) {
    const payload = { email: email, password: password, username: username };
    res.cookie("loggedin", true);
    res.cookie("JWT", generateToken(payload));
    res.send({ username: username.toUpperCase(), status: 200 });
  } else {
    res.send({ message: "Login Failed", status: 404 });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
