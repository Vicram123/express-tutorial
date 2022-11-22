const express = require("express");

const app = express();
const fromPeopleRouter = require("./routes/people");
const fromAuthRouter = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
//  parse form data
app.use(express.urlencoded({ extended: false }));
///    parse
app.use(express.json());

app.use("/api/people", fromPeopleRouter);
app.use("/login", fromAuthRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//                  Express.js
//    API              VS          SSR
// APP- JSON                    SSR - TEMPLATE
// SEND DATA                    SEND TEMPLATE
// RES.JSON()                   RES.RENDER()

//      path & callback function
//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR
//});

//  HTTP METHODS

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

// GET = read data = for example www.store.com/api/orders = get all orders
// GET = read data = for example www.store.com/api/orders/:id =  get single order(path params)
// POST = insert data = for example www.store.com/api/orders = place an order(send data)
// PUT  = update data = for example www.store.com/api/orders/:id = update specific order(params + send data)
// DELETE = for example www.store.com/api/orders/:id = delete read data = delete order(path params)
