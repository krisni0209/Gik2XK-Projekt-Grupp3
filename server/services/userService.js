import { User } from "../models/index.js";

// Dummy / riktiga beroende på DB
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Kunde inte hämta användare" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user
      ? res.json(user)
      : res.status(404).json({ message: "Användaren hittades inte." });
  } catch (err) {
    res.status(500).json({ error: "Fel vid hämtning av användare." });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "User created", user: newUser });
  } catch (err) {
    res.status(400).json({ error: "Fel vid skapande av användare" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Användaren hittades inte." });

    await user.update(req.body);
    res.json({ message: `User ${req.params.id} updated`, user });
  } catch (err) {
    res.status(400).json({ error: "Fel vid uppdatering av användare" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Användaren hittades inte." });

    await user.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Fel vid borttagning av användare" });
  }
};
