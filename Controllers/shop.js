import Cart from "../models/cart.js";
import Product from "../models/product.js";

async function getProducts(req, res) {
  const products = await Product.findAll();
  console.log(products);
  res.render("shop/productList", { products: products });
}

async function getIndex(req,res)
{
  const products = await Product.findAll();
  res.render("shop/index", { products: products });

}

async function getCart(req, res) {


  let cart=await req.user.getCart();
  console.log(cart);
  let products = await cart.getProducts();

  console.log(products);
  res.render("shop/cart",{products:products});
}

async function postCart(req, res) {
  let cart=await req.user.getCart();
  let products=await cart.getProducts({where:{id:req.body.productId}});
  let existProduct;
  let newquantity = 1;
  if(products.length>0)
  {
    existProduct=products[0];
    newquantity=existProduct.cartItem.quantity+1;
    await cart.addProduct(existProduct, { through: { quantity: newquantity } });
  }

  else
  {
  let product =await Product.findByPk(req.body.productId);
  await cart.addProduct(product, { through: { quantity: newquantity } });
  }

  res.redirect("/cart");
}

async function deleteFromCart(req,res){
  let{id,price}=req.body;
  let cart=await req.user.getCart();
  let products=await cart.getProducts({where:{id:id}});
  await products[0].cartItem.destroy();


  res.redirect("/cart");
}


async function getOrders(req, res) {
   let orders = await req.user.getOrders({ include: ["products"] });

  res.render("shop/orders",{orders:orders});
}

async function postOrder(req,res)
{
  let cart=await req.user.getCart();
  let products=await cart.getProducts();
  console.log(products);
  let order= await req.user.createOrder();
  await order.addProducts(products.map(prod=>{
    prod.orderItem={quantity:prod.cartItem.quantity};
    return prod;
  }))

  await cart.setProducts(null);


  res.redirect("/orders",);
  
} 

async function getProduct(req,res){
  let id = req.params.id;
  const product= await Product.findByPk(id);
  res.render("shop/productDetail.ejs", { product: product });
}

export { getProducts,getIndex,getCart,getOrders,getProduct,postCart,deleteFromCart,postOrder};
