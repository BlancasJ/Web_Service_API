const PostIt = require("../models/postIt.model.js");

// Create and Save a new postIt
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a postIt
  const postIt = new PostIt({
    title: req.body.title,
    content: req.body.content
  });

  // Save postIt in the database
  PostIt.create(postIt, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post-it."
      });
    else res.send(data);
  });
};

// Retrieve all postIt from the database.
exports.findAll = (req, res) => {
  PostIt.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving post-its."
      });
    else res.send(data);
  });
};

// Find a single postIt with a postItId
exports.findOne = (req, res) => {
  PostIt.findById(req.params.postItId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post-it with id ${req.params.postItId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving post-it with id " + req.params.postItId
        });
      }
    } else res.send(data);
  });
};

// Update a postIt identified by the postItId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  PostIt.updateById(
    req.params.postItId,
    new PostIt(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found post-id with id ${req.params.postItId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating post-id with id " + req.params.postItId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a postIt with the specified postItId in the request
exports.delete = (req, res) => {
  PostIt.remove(req.params.postItId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post-it with id ${req.params.postItId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete post-it with id " + req.params.postItId
        });
      }
    } else res.send({ message: `post-it was deleted successfully!` });
  });
};

// Delete all postIts from the postIt.
exports.deleteAll = (req, res) => {
  PostIt.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all post-its."
      });
    else res.send({ message: `All post-its were deleted successfully!` });
  });
};
