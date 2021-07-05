import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import web1 from "../images/web1.svg";
import web2 from "../images/web2.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    // For animation code
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
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
            <section id="center" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5  order-1 ">
                         <div className="b1 " data-aos="fade-up"data-aos-easing="ease-in-sine">
                            <div className="b2" data-aos="slide-right" data-aos-easing="ease-in-sine">
                            <h2 className="mt-3" >We Provide Quality Work with Gurantee</h2>
                            
                             <div className="mt-3" >
                             <NavLink to=""  className="btn1" >Check Here!</NavLink>
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
        </>
    );
}
export default Home;