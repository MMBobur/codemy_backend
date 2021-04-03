const db = require("../model");
const Kurslar = db.kurslar;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const amember = {
    img_url: req.body.img_url,
    img_title: req.body.img_title,
  };

  Kurslar.create(amember)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the courses.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Kurslar.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving courses.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Kurslar.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving courses with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Kurslar.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "courses was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update courses with id=${id}. Maybe courses was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating courses with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Kurslar.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Courses was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Courses with id=${id}. Maybe Courses was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Courses with id=" + id,
      });
    });
};
