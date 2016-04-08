var Rest = require('../models/Restaurant');

module.exports = function(req, res) {
  Rest.find({}, function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    }

    var arr = [];

    data.map(function(item) {
      var obj = {};

      obj.name = item.restaurant.name;
      obj.p_id = item.restaurant.p_id;
      obj._id = item._id;
      arr.push(obj);
    });

    arr.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    res.status(200).json(arr);
  });
};
