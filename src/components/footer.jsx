const Footer = () => {
    return (
        // <div className="footer-container ">
        //     <div className="box-layout">
        //         <div className="logo-div flex">
        //             <div>
        //                 <img src="../../images/logo.svg" alt="logo" className="logo-footer"/>
        //             </div>
        //             <div>
        //                 <a href="*"><img src="../../images/icon-facebook.svg" alt="facebook" className="ic0n-facebook" /></a>
        //                 <a href="*"><img src="../../images/icon-youtube.svg" alt="icon-youtube" className="icon-youtube"/></a>
        //                 <a href="*"><img src="../../images/icon-twitter.svg" alt="icon-twitter" className="icon-twitter"/></a>
        //                 <a href="*"><img src="../../images/icon-instagram.svg" alt="icon-instagram" className="icon-instagram"/></a>
        //                 <a href="*"><img src="../../images/icon-pinterest.svg" alt="icon-pinterest" className="icon-pinterest"/></a>
        //             </div>
        //         </div>
        //         <div className="div">
        //             <div className="flex">
        //                 <ul>
        //                     <p>About US</p>
        //                     <p> Contact</p>
        //                     <p>Blog</p>
        //                 </ul>
        //             </div>
        //             <div className="flex">
        //                 <ul>
        //                     <p>Careers</p>
        //                     <p>Support</p>
        //                     <p>Privacy popcy</p>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="trademark-container">
        //         </div>
        //     </div>
        // </div>


        <div className="footer-container">
           <div className="box-layout flex foot-left">
                <div className="inline ">
                    <div className="logo-div">
                        <div>
                            <img src="../../images/logo.svg" alt="logo" className="logo-footer"/>
                        </div>
                        <div>
                            <a href="*"><img src="../../images/icon-facebook.svg" alt="facebook" className="ic0n-facebook" /></a>
                            <a href="*"><img src="../../images/icon-youtube.svg" alt="icon-youtube" className="icon-youtube"/></a>
                            <a href="*"><img src="../../images/icon-twitter.svg" alt="icon-twitter" className="icon-twitter"/></a>
                            <a href="*"><img src="../../images/icon-instagram.svg" alt="icon-instagram" className="icon-instagram"/></a>
                            <a href="*"><img src="../../images/icon-pinterest.svg" alt="icon-pinterest" className="icon-pinterest"/></a>
                        </div>
                    </div>
                </div>              
                <div className="div inline">
                    <div>
                        <p>About US</p>
                        <p> Contact</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p>Blog</p>                    
                    </div>
                </div>
                <div className="div inline">
                    <div>
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Privacy popcy</p>
                    </div>
                </div>    
                <div className="trademark">
                    <div>
                        <a href="*" className="btn">Request Invite</a> 
                    </div>
                    <div>
                        <p>&#169; copyright. All rights reserved</p>
                    </div>
                </div>             
            </div> 
            
        </div>
    )
}
export default Footer;