import React from 'react';

const TrackingPrice =()=>{
    return(
        <section className="tracking_price_area sec_pad">
            <div className="container">
                <div className="tracking_price_inner wow fadeInUp">
                    <h2>Desde</h2>
                    <div className="d-flex track_body">
                        <div className="track_price">
                            <h3>$3.4</h3>
                            <h6>/mes</h6>
                        </div>
                        <div className="track_text">
                            <h4>Expándete</h4>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check"></i>Cancela en cualqueir momento.</li>
                                <li><i className="fas fa-check"></i>Pago automático</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="/#" className="software_banner_btn btn_submit f_500">Contratar</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackingPrice;