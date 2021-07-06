import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="info3">
                                <div className="flogo">
                                    <h1>LOGO</h1>
                                    <hr className="hr3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="d1">
                                    <h2>
                                        Why us?
                                    </h2>
                                    <hr className="h4" />
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Possimus sequi expedita libero nostrum, 
                                        sapiente ipsa qui alias atque exercitationem ad recusandae 
                                        ullam natus quas, repudiandae dolorum quae. Cum, sapiente corrupti!.
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d1">
                                    <h2>
                                        Quick Links?
                                    </h2>
                                    <hr className="h4" />
                                    <ul>
                                        <li><NavLink to="#" id="a">Home</NavLink></li>
                                        <li><NavLink to="#" id="a">About us</NavLink></li>
                                        <li><NavLink to="#" id="a">Products</NavLink></li>
                                        <li><NavLink to="#" id="a">Contact us</NavLink></li>
                                        <li><NavLink to="#" id="a">Privacy Policy</NavLink></li>
                                        <li><NavLink to="#" id="a">Terms & conditions</NavLink></li>
                                    </ul>

                                </div>

                            </div>
                            <div className="col-md-3">
                                <div className="d1">
                                    <h2>
                                        Product Details
                                    </h2>
                                    <hr className="h4" />
                                    <ul>
                                        <li><NavLink to="#" id="a">Website</NavLink></li>
                                        <li><NavLink to="#" id="a">Seo</NavLink></li>
                                        <li><NavLink to="#" id="a">Mobile Applications</NavLink></li>
                                        <li><NavLink to="#" id="a">Responsive</NavLink></li>

                                    </ul>

                                </div>

                            </div>
                            <div className="col-md-3">
                                <div className="d1" id="d2">
                                    <h2>
                                        Contact Details
                                    </h2>
                                    <hr className="h4" />
                                    <ul>
                                        <li>
                                            <i className="fas fa-phone-volume"></i>
                                        </li>
                                        <span>Toll Free</span>
                                        <br />
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                        </li>
                                        <span>Email</span>
                                        <br />
                                        <li>
                                            <i className="fa fa-map-marker"></i>
                                        </li>
                                        <span>Address</span>
                                        <br />
                                        <li>

                                            <i className="fas fa-clock"></i>
                                            <span>Opening Hours</span></li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="f2">
                                    <p className="copy">Copyright Sale_Bazar All right reserved.</p>
                                    <div className="s1">
                                        <NavLink to="#"><i className="fab fa-facebook"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;