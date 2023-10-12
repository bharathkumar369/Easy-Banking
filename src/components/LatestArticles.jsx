import React from "react";

const LatestArticles = () => {
    return(
        <div className="box-layout">
            <div>
                <p>Latest Articles</p>
            </div>
            <div className="grid-box">
                <div className="card">
                    <div  className="image-container">
                        <img src="../../images/image-currency.jpg" alt="currency" className="currency"/>
                    </div>
                    <div className="card__text">
                        <p>By Claire Robinson</p>
                        <h3>Receive money in any currency with no fees</h3>
                        <h5>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single … </h5>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src="../../images/image-restaurant.jpg" alt="restaurant"  className="restaurant"/>
                    </div>
                    <div className="card__text">
                        <p>By Wilson Hutton</p>
                        <h3>Treat yourself without worrying about money</h3>
                        <h5>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </h5>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                      <img src="../../images/image-plane.jpg"  alt="plane" className="plane"/>
                    </div >
                    <div className="card__text">
                        <p>By Wilson Hutton</p>
                        <h3>Take your Easybank card wherever you go</h3>
                        <h5>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you … </h5>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src="../../images/image-confetti.jpg" alt="confetti" className="confetti" />
                    </div>
                    <div className="card__text">
                        <p>By Claire Robinson</p>
                        <h3>Our invite-only Beta accounts are now live!</h3>
                        <h5>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ... </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestArticles;