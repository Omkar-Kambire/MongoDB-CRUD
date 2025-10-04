const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create a new user

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Siddhi",
    username: "siddhi123",
    email: "siddhi@example.com",
  });
  res.send(createdUser);
});

// Read all users

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

// Read users with a specific username

app.get("/read", async (req, res) => {
  let users = await userModel.find({username: "siddhi123"});
  res.send(users);
});

// Read a single user with a specific username
// returns the first match if multiple exist

app.get("/read", async (req, res) => {
  let users = await userModel.findOne({username: "siddhi123"});
  res.send(users);
});

// Update an existing user's email

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    {
      username: "omkar123",
    },
    { email: "omkar@test.com" },
    { new: true }
  );
  res.send(updatedUser);
});

// Delete a user with a specific username

app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({email: "omkar@example.com"});
  res.send(deletedUser);
});

app.listen(3000);
