import React from "react";

const Navbar = () => {

    // const [isMenu, setIsMenu] = React.useState(false);

    // const toggleMenu = () => {
    //     setIsMenu(!isMenu);
    // }

    return(
        <div className="navbar-container ">
            <div className="navbar-flex">
                <div>
                    <img src="../../images/logo.svg" alt="logo" className="logo"/>
                </div>
                {/* <div className={`menu ${isMenu ? 'open' : ""}`}> */}
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                 <a href="*" className="btn">Request Invite</a>
                </div>
                {/* <div>
                    <button className="hamburger-btn" onClick={toggleMenu}>
                        <img src="../../images/icon-hamburger.svg" alt="hamburger" className="hamburger"/>
                    </button>
                </div> */}
            </div>
        </div>
    )
}
export default Navbar;