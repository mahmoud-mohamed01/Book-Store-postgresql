import sequelize from "../util/dbConfig.js";
import  Sequelize  from "sequelize";

const Cart=sequelize.define("cart",
{
    id:
    {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
})

export default Cart;