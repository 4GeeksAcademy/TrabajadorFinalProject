import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Footer from "./components/footer";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import injectContext from "./store/appContext";
import ContactUs from "./pages/ContactUs";
import '../styles/AboutUs.css';
import AboutUs from "./pages/AboutUs";
import ReviewPage from "./pages/Reviews"
import CheckoutPage from "./pages/CheckoutPage"
import PaymentStatus from "./pages/Paymentstatus.js"
import Profile from "./pages/Profile.js";


// Create your first component
const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename in the .env file located at the root of this project, E.g: BASENAME=/my-app/
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                    <Route path="/reviews" element={<ReviewPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/paymentstatus" element={<PaymentStatus />} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
