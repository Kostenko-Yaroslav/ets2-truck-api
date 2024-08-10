const express = require("express");
const app = express();
const port = 3000;

const trucks = [
  {
    id: 1,
    name: "DAF",
    model: "2021",
    hr: "367 hr",
    shasi: "4x2",
    hm: "1800",
    tank: "800 l",
    price: "€114,880",
  },
  {
    id: 2,
    name: "DAF",
    model: "XF",
    hr: "370 hr",
    shasi: "4x2",
    hm: "1800",
    tank: "1400 l",
    price: "€128,290",
  },
];

app.get("/api/trucks", (req, res) => {
  res.json(trucks);
});

app.get("/api/trucks/:id", (req, res) => {
  const truck = trucks.find((t) => t.id === parseInt(req.params.id));
  if (!truck) return res.status(404).send("Truck not found");
  res.json(truck);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
