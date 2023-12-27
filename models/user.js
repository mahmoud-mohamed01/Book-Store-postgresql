import sequelize from "../util/dbConfig.js";
import  Sequelize  from "sequelize";

const User=sequelize.define("user",{
    id:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },

    name:
    {
        type:Sequelize.STRING,
        allowNull:false
    }, 

    email:
    {
        type:Sequelize.STRING,
        allowNull:false

    }
});

export default User;
