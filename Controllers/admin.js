import Product from "../models/product.js";

function getAddProductPage(req, res) {
  res.render("Admin/editProduct.ejs",{edit:false});
}

async function addProduct(req, res) {
  const{title, imageUrl, price, description} =req.body;
 await req.user.createProduct(
    {
    description:description,
    price:price,
    imageUrl:imageUrl,
    title:title
    }
  );
  
  res.redirect("/");
}


async function getEditProductPage(req, res) {

  let id= req.params.id;
  let product= await Product.findByPk(id);
  res.render("Admin/editProduct.ejs",{product:product,edit:true});
}

async function editProduct(req,res)
{
  
    const {title, imageUrl, price, description,id } = req.body;
    let product=await Product.findByPk(id);
    product.title=title;
    product.imageUrl=imageUrl;
    product.price=price;
    product.description=description;

    await product.save();
     res.redirect("/Admin/products");

}

async function deleteProduct(req,res)
{
  let id=req.params.id;
  let product= await Product.findByPk(id);
  await product.destroy();
 
  res.redirect("/Admin/products"); 
}



async function getProducts(req, res) {
  const products = await Product.findAll();

  res.render("Admin/products", { products: products });
}


export { getAddProductPage, addProduct,getProducts,getEditProductPage,editProduct,deleteProduct };