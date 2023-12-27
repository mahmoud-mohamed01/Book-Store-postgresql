import Sequelize  from "sequelize";
import sequelize from "../util/dbConfig.js";


const Product=sequelize.define("product",
{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },

  title:{type:Sequelize.STRING},

  price:{
    type:Sequelize.REAL,
    allowNull:false
  },

  description:
  {
    type:Sequelize.STRING,
     allowNull:false
  },

  imageUrl:
  {
    type:Sequelize.STRING,
    allowNull:false
  }


});























/*let products = [];
let count=1;

import db from "../util/dbConfig.js";

class Product {
  constructor(title, imageUrl, description, price, id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id = id;
  }

  async save() {
    if (this.id) {
      let idx = products.findIndex((prod) => {
        return prod.id == this.id;
      });
      let updatedProduct = {
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        price: this.price,
        id: this.id,
      };
      products[idx] = updatedProduct;
    } else {
      products.push({
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        price: this.price,
        id: count,
      });

      await db.query(
        "insert into products (title,imageurl,description,price) values ($1,$2,$3,$4)",
        [this.title, this.imageUrl, this.description, this.price]
      );

      count++;
    }
  }

  static delete(id) {
    products = products.filter((prod) => {
      return prod.id != id;
    });
  }

  static async fetchAll() {
    let data = await db.query("select * from products");
    return data.rows;
  }

  static async getProductByID(id) {
    let product = await db.query("select * from products where id = $1", [id]);

    return product.rows[0];
  }
}
*/
export default Product;