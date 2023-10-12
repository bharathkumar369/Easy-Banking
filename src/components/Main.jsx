import React from "react";

const Main = () => {
    return (
        <div>
            <div className=" main-container ">
                <div className="main-left box-layout">
                    <h1>
                        Next generation digital banking
                    </h1>
                    <p >Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className="btn-main btn">Request Invite</button>
                </div>
                <div className="main-right">
                    <img src="../../images/bg-intro-desktop.svg" alt="intro" className="intro"/>
                </div>
            </div>
            <div className="mockup-container">
                <img src="../../images/image-mockups.png" alt="mockups" className="mockup"/>
            </div>
        </div>
    )
}   
export default Main;