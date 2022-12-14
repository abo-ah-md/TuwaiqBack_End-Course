const express = require("express");
const fs = require("fs");

const products = [
  {
    name: "iphone",
    price: 5100,
    description: "iphone 13 pro max, 128 gb memory, 6.7' screen",
  },
  {
    name: "samsung",
    price: 4900,
    description: "samsung s21 ultra, 128 gb, 6.8' screen",
  },
  {
    name: "Clean Code",
    price: 250,
    description:
      "written by Robert C. Martin, talks about the important principles when writing clean, easy to understand, and maintainable code ",
  },
  {
    name: "The Art of Game Design",
    price: 140,
    descriptions:
      "Good game design happens when you view your game from as many perspectives as possible",
  },
  {
    name: "Clay Mask by Plantifique",
    price: 70,
    description:
      "Plantifique superfoods clay face mask will cleanse and hydrate your skin without causing irritation or burns",
  },
  {
    name: "apple watch",
    price: 3000,
    description:
      "Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use",
  },
  {
    name: "Cadbury Dream 180g",
    price: 10,
    description:
      "Best By Date Reads As: DAY/MONTH/YEAR On All Australian & British Food Products",
  },
  {
    name: "Mansaf",
    price: 150,
    description: "the most delicious jordanian local meal",
  },
  {
    name: "Tesla",
    price: 2000000,
    description: "Model S All electric car",
  },
  {
    name: "16K Gold Your Name Bar Bracelet",
    price: 70,
    description:
      "【Personalised ID Bar Bracelet】 - This smooth and polished 16K bracelets features an engravable id tag for engraving.",
  },
];
const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  res.send(products);
});
//    /products/iphone
app.get("/products/:product/", (req, res) => {
  //Code here

  const result = products.find(
    (product) => product.name === req.params.product
  );
  res.send(result);
});

app.get("/namesOnly", (req, res) => {
  //code here
  const result1 = products.map((product, index) => product.name);
  res.send(result1);
});

app.post("/products", (req, res) => {
 
  products.push(req.body);

  res.send(products);
});

app.put("/products/:product", (req, res) => {
  const ind = products
    .map((productIndex) => productIndex.name)
    .indexOf(req.params.product);
  
  const productName = products.find(
    (product, index) => product.name === req.params.product
  );

  let keys = Object.keys(productName);

  let bodyKeys = Object.keys(req.body);

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < bodyKeys.length; j++) {
     

      if (bodyKeys[j] === keys[i]) {
        products[ind][keys[i]] = req.body[bodyKeys[j]];
        res.send(products);
      }
    }
  }

  
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is working on port ${PORT}`);
});
