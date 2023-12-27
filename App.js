import express from "express";
import shop from "./routes/shop.js";
import admin from "./routes/admin.js";
import errorPage from"./Controllers/error.js"
import sequelize from "./util/dbConfig.js";
import User from "./models/User.js";
import Product from "./models/product.js";
import Cart from "./models/cart.js";
import cartItem from "./models/cartItem.js";
import Order from "./models/order.js";
import OrderItem from "./models/orderItems.js";

const app = express();
const port = 3000;




app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  let user = await User.findByPk(1);
  req.user = user;
  next();
});

app.use(shop);
app.use("/Admin", admin);



app.get("*",errorPage)

Product.belongsTo(User,{constraints:true,onDelete:"CASCADE"});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsToMany(Product,{through:cartItem});
Product.belongsToMany(Cart, { through: cartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{through:OrderItem});



sequelize.sync().then(result=>
  {

    User.findByPk(1).then(user=>{
      if(!user)
      {
        User.create({name:"mahmoud",email:"mh@gmail.com"})
      }
      else
      {
        user.createCart();

      }


       app.listen(port, (req, res) => {
         console.log("Server started on port " + port);
       });
    })
    

   
  }
  ).catch(err=>{
    console.log(err);
  })

