import React from 'react';

const Page = ({ params, searchParams }) => {
    return (
        <section id="featured-cars" className="featured-cars">

            <div className="container">
                <div className="section-header">
                    <p>checkout <span>the</span> featured cars</p>
                    <h2>featured cars</h2>
                </div>
                <div className="featured-cars-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-featured-cars">
                                <div className="featured-img-box">
                                    <div className="featured-cars-img">
                                        <img src="assets/images/featured-cars/fc4.png" alt="cars" />
                                    </div>
                                    <div className="featured-model-info">
                                        <p>
                                            model: 2017
                                            <span className="featured-mi-span"> 3100 mi</span>
                                            <span className="featured-hp-span"> 240HP</span>
                                            automatic
                                        </p>
                                    </div>
                                </div>
                                <div className="featured-cars-txt">
                                    <h2><a href="#">infiniti <span>z5</span></a></h2>
                                    <h3>$36,850</h3>
                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-featured-cars">
                                <div className="featured-img-box">
                                    <div className="featured-cars-img">
                                        <img src="assets/images/featured-cars/fc5.png" alt="cars" />
                                    </div>
                                    <div className="featured-model-info">
                                        <p>
                                            model: 2017
                                            <span className="featured-mi-span"> 3100 mi</span>
                                            <span className="featured-hp-span"> 240HP</span>
                                            automatic
                                        </p>
                                    </div>
                                </div>
                                <div className="featured-cars-txt">
                                    <h2><a href="#">porsche <span>718</span> cayman</a></h2>
                                    <h3>$48,500</h3>
                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-featured-cars">
                                <div className="featured-img-box">
                                    <div className="featured-cars-img">
                                        <img src="assets/images/featured-cars/fc7.png" alt="cars" />
                                    </div>
                                    <div className="featured-model-info">
                                        <p>
                                            model: 2017
                                            <span className="featured-mi-span"> 3100 mi</span>
                                            <span className="featured-hp-span"> 240HP</span>
                                            automatic
                                        </p>
                                    </div>
                                </div>
                                <div className="featured-cars-txt">
                                    <h2><a href="#"><span>bmw 8-</span>series coupe</a></h2>
                                    <h3>$56,000</h3>
                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-featured-cars">
                                <div className="featured-img-box">
                                    <div className="featured-cars-img">
                                        <img src="assets/images/featured-cars/fc8.png" alt="cars" />
                                    </div>
                                    <div className="featured-model-info">
                                        <p>
                                            model: 2017
                                            <span className="featured-mi-span"> 3100 mi</span>
                                            <span className="featured-hp-span"> 240HP</span>
                                            automatic
                                        </p>
                                    </div>
                                </div>
                                <div className="featured-cars-txt">
                                    <h2><a href="#">BMW <span> x</span>series-6</a></h2>
                                    <h3>$75,800</h3>
                                    <p>
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Page;
