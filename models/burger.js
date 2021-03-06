// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  select: function(callBack) {
    orm.select("burgers", function(res) {
      callBack(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callBack) {
    console.log("Hit burger model")
    console.log(cols)
    console.log(vals)
    orm.create("burgers", cols, vals, function(res) {
      callBack(res);
    });
  },
  update: function(objColVals, condition, callBack) {
    orm.update("burgers", objColVals, condition, function(res) {
      callBack(res);
    });
  },
  delete: function(condition, callBack) {
    orm.delete("burgers", condition, function(res) {
      callBack(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;