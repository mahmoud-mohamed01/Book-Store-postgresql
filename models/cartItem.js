import sequelize from "../util/dbConfig.js";
import  Sequelize  from "sequelize";


const cartItem = sequelize.define("cartItem", {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  quantity: Sequelize.INTEGER
});

export default cartItem;