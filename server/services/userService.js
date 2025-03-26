export async function getAllUsers(req, res) {
  // dummydata just nu – byt till riktig databas om du har User-modellen
  res.json([
    {
      id: 1,
      first_name: "Anna",
      last_name: "Andersson",
      email: "anna@example.com",
    },
    {
      id: 2,
      first_name: "Erik",
      last_name: "Eriksson",
      email: "erik@example.com",
    },
  ]);
}

export async function getUserById(req, res) {
  const id = req.params.id;
  res.json({ id, name: "Demo User" });
}

export async function createUser(req, res) {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
}

export async function updateUser(req, res) {
  const id = req.params.id;
  const updatedUser = req.body;
  res.json({ message: `User ${id} updated`, user: updatedUser });
}

export async function deleteUser(req, res) {
  const id = req.params.id;
  res.status(204).send(); // No content
}
