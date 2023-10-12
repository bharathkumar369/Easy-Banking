import React from "react";
import Navbar from "./components/Navbar";
import LatestArticles from "./components/LatestArticles";
import Middle from "./components/Middle";
import Main from "./components/Main";
import Footer from "./components/footer";

const EasyBank = () => {
    return(
        <div>
            <Navbar />
            <Main />
            <Middle />
            <LatestArticles />
            <Footer />
        </div>
    )
}
export default EasyBank;