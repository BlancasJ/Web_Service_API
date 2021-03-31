const sql = require("./db.js");

// constructor
const PostIt = function(postIt){
  this.title = postIt.title;
  this.content = postIt.content;
};

// create a new postit
PostIt.create = (newPostIt, result) => {
  sql.query("INSERT INTO postIts SET ?", newPostIt, (err, res) => {
    if(err){
      console.log(`Error: ${err}`);
      result(err, null);
      return;
    }

    console.log("created postit: ", {id: res.insertId, ...newPostIt});
    result(null, {id: res.insertId, ...newPostIt});
  });
};

// find a post it by id
PostIt.findById = (postItId, result) => {
  sql.query(`SELECT * FROM postIts WHERE id = ${postItId}`, (err, res) => {
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if(res.length){
      console.log("found postit: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

// get all post its
PostIt.getAll = result => {
  sql.query("SELECT * FROM postIts", (err, res) => {
    if(err){
      console.log(`Error: ${err}`);
      result(null, err);
      return;
    }

    console.log(`post it: ${res}`);
    result(null, res);
  });
};

// update post it by id 
PostIt.updateById = (id, postit, result) => {
  sql.query("UPDATE postIts SET title = ?, content = ? WHERE id = ?", [postit.title, postit.content, id], (err, res) => {
    if(err){
      console.log(`Error: ${err}`);
      result(null, err);
      return;
    }

    if(res.affectedRows === 0){
      //not found postit with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("update postit: ", {id: id, ...postit});
    result(null, {id: id, ...postit});
  });
};

// remove a post it
PostIt.remove = (id, result) => {
  sql.query("DELETE FROM postIts WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found postit with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted post-it with id: ", id);
    result(null, res);
  });
};

// remove all post its
PostIt.removeAll = result => {
  sql.query("DELETE FROM postIts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} post-its`);
    result(null, res);
  });
};

module.exports = PostIt;
