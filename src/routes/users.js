// example of express routes

import express from "express";
import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();
const router = express.Router();

let users = [
  {
    name: "Leamsi Villafane",
    nge: 36,
    nd: uuidv4(),
  },
  {
    name: "Destiny Villafane",
    age: 34,
    id: uuidv4(),
  },
];
// Get All Users
router.get("/", (req, res, next) => {
  try {
    console.log("You Did It AGAIN Leamsi!");
    res.send(users);
  } catch (error) {
    return next(error);
  }
});
// Get User By ID
router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
  } catch (error) {
    return next(error);
  }
});
// Create User
router.post("/", (req, res, next) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  console.log("POST ROUTE REACHED");
  res.send(`User with the name ${user.name} added to the database`);
});
// Delete User
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted from the database`);
  } catch (error) {
    return next(error);
  }
});
// Update User
router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (name) user.name = name;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
});

export default router;
