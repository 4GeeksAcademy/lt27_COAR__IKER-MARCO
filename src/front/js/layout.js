import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Category } from "./component/Category";
import { Buyer } from "./component/Buyer.js";
import { BuyerCreate } from "./pages/BuyerCreate";
import { BuyerEdit } from "./pages/BuyerEdit.js"
import { Admin } from "./component/Admin";
import { AdminEdit } from "./pages/AdminEdit";
import { AdminCreate } from "./pages/AdminCreate";
import { CategoryCreate } from "./pages/CategoryCreate";
import { CategoryEdit } from "./pages/CategoryEdit";
import { Craftmen } from "./pages/craftmen";
import { Craftmendetail } from "./pages/craftmendetail";
import { Craftmencreate } from "./pages/craftmencreate";
import { Productcreate } from "./pages/productcreate.js";
import { Productdetail } from "./pages/productdetail.js";
import { GoToDirection } from "./pages/GoToDirection.js";
import { OrdersView } from "./pages/OrdersViews.js";
import { CraftmanProducts } from "./pages/CraftmanProducts.js";
import { CraftmanOrders } from "./pages/CraftmanOrders.js";

import { Buyer_products } from "./pages/buyer_products.js";
import { Buyer_Productdetail } from "./pages/buyer_productdetail.js";

import { Login_craftmen } from "./pages/login_craftmen.js";
import { Login_buyer } from "./pages/login_buyer.js";
import { Login_admin } from "./pages/login_admin.js";

import { Signup_b } from "./component/formsignup_b";
import { CartView } from "./pages/CartView.js";

import { Paypalltest } from "./pages/paypaltest.js";
import { Shop } from "./pages/shop.js";
import { About } from "./pages/About.js";
import { Services } from "./pages/Services.js";
import { Blogpage } from "./pages/Blogpage.js";
import { Contactus } from "./pages/Contactus.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Craftmen />} path="/craftmen" />
            <Route element={<CraftmanProducts />} path="/product" />
            <Route element={<Productcreate />} path="/productcreate" />
            <Route element={<Craftmencreate />} path="/craftmencreate" />
            <Route element={<Single />} path="/single/:theid" />
            <Route
              path="/craftmendetail/:id"
              element={<Craftmendetail />}
              component={Craftmendetail}
            />
            <Route
              path="/productdetail/:id"
              element={<Productdetail />}
              component={Productdetail}
            />
            <Route element={<Buyer_products />} path="/buyer_products" />
            <Route
              path="/buyer_productdetail/:id"
              element={<Buyer_Productdetail />}
              component={Buyer_Productdetail}
            />
            <Route element={<CraftmanOrders />} path="/pedidos" />
            <Route element={<OrdersView />} path="/my-orders" />
            <Route element={<GoToDirection />} path="/go-to-direction" />
            <Route element={<CartView />} path="/cart" />
            <Route element={<Category />} path="/category" />
            <Route element={<Buyer />} path="/buyer" />
            <Route element={<BuyerCreate />} path="/buyer/new" />
            <Route element={<BuyerEdit />} path="/buyer/edit/:id" />
            <Route element={<Admin />} path="/admin" />
            <Route element={<AdminEdit />} path="/admin/edit/:id" />
            <Route element={<AdminCreate />} path="/new" />
            <Route element={<CategoryCreate />} path="/create" />
            <Route element={<CategoryEdit />} path="/edit/:id" />

            <Route element={<Buyer_products />} path="/buyer_products" />
            <Route
              path="/buyer_productdetail/:id"
              element={<Buyer_Productdetail />}
              component={Buyer_Productdetail}
            />

            <Route element={<Login_craftmen />} path="/login_craftmen" />
            <Route element={<Login_buyer />} path="/login_buyer" />
            <Route element={<Login_admin />} path="/login_admin" />

            <Route element={<Signup_b />} path="/signup_b" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Paypalltest />} path="/paypalltest" />

            <Route element={<Shop />} path="/shop" />
            <Route element={<About />} path="/about" />
            <Route element={<Services />} path="/services" />
            <Route element={<Blogpage />} path="/blogpage" />
            <Route element={<Contactus />} path="/contactus" />



          </Routes>
          <br />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
