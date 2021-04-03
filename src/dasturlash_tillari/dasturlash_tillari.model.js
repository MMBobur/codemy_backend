module.exports = (sequelize, DataTypes) => {
  const Dasturlash_tillari = sequelize.define("dasturlash_tillari", {
    img_url: {
      type: DataTypes.STRING,
    },

    img_title: {
      type: DataTypes.STRING,
    },

    text: {
      type: DataTypes.STRING,
    },
  });

  return Dasturlash_tillari;
};
