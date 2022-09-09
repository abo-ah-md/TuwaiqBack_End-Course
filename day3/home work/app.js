const express = require("express");
const app = express();
const Joi = require("joi");
const People = require("./People");

app.use(express.json());

function vaildate(info) {
  const schema = Joi.object({
    id: Joi.number().positive(),
    firstName: Joi.string().min(3),
    lastName: Joi.string().min(3),
    city: Joi.string().min(3),
    age: Joi.number().min(0).max(100),
  });

  return schema.validate(info);
}

app.get("/:id", (req, res) => {
  const id = People.find((idNum) => idNum.id === parseInt(req.params.id));
  res.send(id);
});

app.post("/", (req, res) => {
  let idChecker;
  for (let i = 0; i < People.length; i++) {
    if (req.body.id === People[i].id) {
      idChecker = false;
      return res.send(`this id already exist `);
    } else {
      idChecker = true;
    }
  }
  if (idChecker === true) {
    People.push(req.body);
  }

  const { error } = vaildate(req.body); //result.error
  if (error) return res.status(400).send(error.details[0].message);

  res.send(People);
});

app.put("/:id", (req, res) => {
  const { error } = vaildate(req.body); //result.error
  if (error) return res.status(400).send(error.details[0].message);

  const ind = People.map((personIndex) => personIndex.id).indexOf(
    parseInt(req.params.id)
  );

  const personid = People.find(
    (person) => person.id === parseInt(req.params.id)
  );
  const j = People.map((d) => (ind === d.id))
  let keys = Object.keys(personid);

  let bodyKeys = Object.keys(req.body);

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < bodyKeys.length; j++) {
      if (bodyKeys[j] === keys[i]) {
        People[ind][keys[i]] = req.body[bodyKeys[j]];
        res.send(People);
      }
    }
  }
});

app.delete("/:id", (req, res) => {
  const id = People.find((idNum) => idNum.id === parseInt(req.params.id));
  People.splice(req.params.id - 1, 1);
  res.send(People);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("started");
});
