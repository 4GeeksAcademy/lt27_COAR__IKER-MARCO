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
import { CategoryCreate } from "./pages/CategoryCreate";
import { CategoryEdit } from "./pages/CategoryEdit";
import { Craftmen } from "./pages/craftmen";
import { Craftmendetail } from "./pages/craftmendetail";


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
                        <Route element={<Category />} path="/category" />
                        <Route element={<CategoryCreate />} path="/create" />
                        <Route element={<CategoryEdit />} path="/edit/:id" />
                        <Route element={<Craftmen />} path="/craftmen" />            
                        <Route
                         path="/craftmendetail/:id"
                         element={<Craftmendetail />}
                         component={Craftmendetail}
                         />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );

};

export default injectContext(Layout);
