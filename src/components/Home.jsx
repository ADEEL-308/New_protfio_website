import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import web1 from "../images/web1.svg";
import web2 from "../images/web2.svg";
import web3 from "../images/web3.svg";
import web4 from "../images/web4.svg";
import web5 from "../images/web5.svg";
import web6 from "../images/web6.svg";
import web7 from "../images/web7.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    // For animation code
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>

            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5  order-2 order-lg-1 d-flex align-items-center flex-column" >
                                    <h1 data-aos="fade-left" data-aos-easing="ease-in-sine" >Grow Your Bussiness with
                                        <strong className="brand"> Creative Solutions</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn-get-started" >Place Order</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 header-img mt-3">
                                    <img src={web1} className="img-fluid animated" alt="Not Found" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---------------------------Section_Two--------------------------------------- */}
            <section id="center" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5  order-1 ">
                                    <div className="b1 " >
                                        <div className="b2" data-aos="slide-right" data-aos-easing="ease-in-sine">
                                            <h2 className="mt-3" >We Provide Quality Work with Gurantee</h2>

                                            <div className="section_two_p mt-5" >
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                Facere impedit autem iusto est sit illum perferendis eaque quibusdam 
                                                velit aspernatur. Laboriosam nemo, cumque laborum sint consequatur 
                                                delectus repellat ipsam ex.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6  pt-5 order-2 " >
                                    <div className="b1" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                        <div className="img" data-aos="fade-left" data-aos-easing="ease-in-sine">
                                            <img src={web2} alt="Not Found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* -------------------------Section_third-------------------------- */}
            <section id="third_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <div className="main_heading pt-5">
                                    <h1>
                                        What We Provide
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="third_section_task">
                                        <div className="third_section_task1" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                            <img src={web5} alt="NOT FOUND" />
                                            <h2>Easy Setup</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="third_section_task">
                                        <div className="third_section_task1" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                            <img src={web3} alt="NOT FOUND" />
                                            <h2>Responsive Websites</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="third_section_task">
                                        <div className="third_section_task1" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                            <img src={web4} alt="NOT FOUND" />
                                            <h2>SEO</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ">
                                    <div className="third_section_task">
                                        <div className="third_section_task1" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                            <img src={web6} alt="NOT FOUND" />
                                            <h2>Payment Gate Way</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/*---------------------------Section_Four--------------------------------------- */}
            <section id="section_four" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row">
                                <div className="col-md-6  pt-5 order-1 " >
                                    <div className="b1" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                        <div className="img" data-aos="fade-left" data-aos-easing="ease-in-sine">
                                            <img src={web7} alt="Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5  order-2 ">
                                    <div className="b1 " >
                                        <div className="b2" data-aos="slide-right" data-aos-easing="ease-in-sine">
                                            <h2 className="mt-3" >Build Your Bussiness With Us</h2>

                                            <div className="section_two_p mt-5" >
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                Facere impedit autem iusto est sit illum perferendis eaque quibusdam 
                                                velit aspernatur. Laboriosam nemo, cumque laborum sint consequatur 
                                                delectus repellat ipsam ex.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;