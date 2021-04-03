module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("videos", {
      img_url: {
        type: Sequelize.STRING(400)
      },
      title: {
        type: Sequelize.STRING(400)
      },
       text:{
           type:Sequelize.STRING(500)
       },
       Url:{
           type:Sequelize.STRING(500)
       }
    });
  
    return Tutorial;
  };