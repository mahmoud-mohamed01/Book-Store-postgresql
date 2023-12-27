import sequelize from "../util/dbConfig.js";
import Sequelize from "sequelize";

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: Sequelize.INTEGER,
});

export default OrderItem;
