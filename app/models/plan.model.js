module.exports = (sequelize, Sequelize) => {
  const Plan = sequelize.define("plan", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.DOUBLE
    },
    contractor:{
      type: Sequelize.STRING
    },
  });

  return Plan;
};
