const db = require("../model");
const Dasturlash_tillari = db.dasturlash_tillari;
const Op = db.Sequelize.Op;

// Create and Save a new Staff
exports.create = (req, res) => {
  const acourses = {
    img_url: req.body.img_url,
    img_title: req.body.img_title,
  };

  Dasturlash_tillari.create(acourses)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Staffs.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Dasturlash_tillari.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving staffs.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Dasturlash_tillari.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Staff with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Dasturlash_tillari.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Staff was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Staff with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Staff with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Dasturlash_tillari.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Staff was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Staff with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Staff with id=" + id,
      });
    });
};
