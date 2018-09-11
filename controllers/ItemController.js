var mongoose = require("mongoose");
var Item = require("../models/Item");

var itemController = {};

//Get current list of items
itemController.list = (req, res) => {
  Item.find({}).exec((err, items) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/index", {items: items});
    }
  });
};

//Add item to list
itemController.add = (req, res) => {
  var item = new Item(req.body);

  item.save((err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Item Added");
      res.redirect("/");
    }
  });
};

//Remove item from list
itemController.delete = (req, res) => {
  Item.remove({_id: req.params.id}, (err) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Item deleted!");
      res.redirect("/");
    }
  });
};

module.exports = itemController;
