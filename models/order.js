import sequelize from "../util/dbConfig.js";
import Sequelize from "sequelize";

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Order;
