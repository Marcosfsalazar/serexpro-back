module.exports = (sequelize, Sequelize) => {
  const Plan = sequelize.define("tutorial", {
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
