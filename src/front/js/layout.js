import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./views/HomePage/HomePage";
import ServicesPage from "./views/ServicesPage/ServicesPage";
import injectContext from "./store/appContext";

// Create your first component
const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename in the .env file located at the root of this project, E.g: BASENAME=/my-app/
    const basename = process.env.BASENAME || "";

    return (
        <Router basename={basename}>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </Router>
    );
};

export default injectContext(Layout);
