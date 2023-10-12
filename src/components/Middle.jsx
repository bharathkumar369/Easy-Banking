import React from "react";

const Middle = () => {
    return(
        <div className="middle-container">
            <div className="middle box-layout">
                <div className="middle-text">
                    <h1>Why Choose Easybank?</h1>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
                <div className="grid-box middle-grid">
                    <div>
                        <img src="../../images/icon-online.svg" alt="online" className="online"/>
                        <h4>Online Banking</h4>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </p>
                    </div>
                    <div>
                         <img src="../../images/icon-budgeting.svg" alt="budgeting" className="budgeting"/>
                        <h4>Simple Budgeting</h4>
                        <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                    </div>
                    <div>
                        <img src="../../images/icon-onboarding.svg" alt="onboarding" className="onboarding"/>
                        <h4>Fast Onboarding</h4>
                        <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div>
                        <img src="../../images/icon-api.svg" alt="open-api" className="open-api"/>
                        <h4>Open Api</h4>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}   
export default Middle;