const db = require("../model");
const Staff = db.staffs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const amember = {
    img_url: req.body.img_url,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    experience: req.body.experience,
  };

  Staff.create(amember)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Staffs.",
        status: "200 Status from Staff Page",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Staff.findAll({ where: condition })
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

  Staff.findByPk(id)
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

  Staff.update(req.body, {
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

  Staff.destroy({
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
