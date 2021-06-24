const db = require("../models");
const Plan = db.plans;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const plan = {
      name: req.body.name,
      description: req.body.description,
      value: req.body.value,
      contractor: req.body.contractor,
    };
  
    Plan.create(plan)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Plan."
        });
      });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Plan.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Plans."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Plan.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Plan with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Plan.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Plan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Plaan with id=${id}. Maybe Plaan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Plaan with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Plan.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Plan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Plan with id=${id}. Maybe Plan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Plan with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Plan.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Plans were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Plans."
      });
    });
};