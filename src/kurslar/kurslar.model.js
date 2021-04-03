module.exports = (sequelize, DataTypes) => {
  const Kurslar = sequelize.define("kurslar", {
      
      img_url: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          maxlength: 500,
          validate: {
              notEmpty: true
          }
      },
      img_title: {
          type: DataTypes.STRING,
          maxlength: 500,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      }
  });

  return Kurslar;

}