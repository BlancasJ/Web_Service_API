module.exports = app => {
  const postIt = require("../controllers/postIt.controller.js");

  // create new post-it
  app.post("/api/postIt", postIt.create);

  // Retrieve all Customers
  app.get("/api/postIt", postIt.findAll);

  // Retrieve a single Customer with customerId
  app.get("/api/postIt/:postItId", postIt.findOne);

  // Update a Customer with customerId
  app.put("/api/postIt/:postItId", postIt.update);

  // Delete a Customer with customerId
  app.delete("/api/postIt/:postItId", postIt.delete);

  // Create a new Customer
  app.delete("/api/postIt", postIt.deleteAll);

};
