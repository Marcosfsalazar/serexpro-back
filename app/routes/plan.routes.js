module.exports = app => {
  const plans = require("../controllers/plan.controller.js");

  var router = require("express").Router();

  router.post("/", plans.create);

  router.get("/", plans.findAll);

  router.get("/:id", plans.findOne);

  router.put("/:id", plans.update);

  router.delete("/:id", plans.delete);

  router.delete("/", plans.deleteAll);

  app.use('/api/plans', router);
};