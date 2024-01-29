import React from 'react';
import TrackingLogo from '../TrackingLogo';

const TrackingBanner =()=>{
    return(
        <section className="tracking_banner_area text-center">
            <div className="container">
                <div className="tracking_banner_content">
                    <h3>Hosting <strong>WordPress</strong> </h3>
                    <p>Somos tu mejor partner</p>
                    <img src={require ("../../img/home-tracking/tracking_banner_img.png")} alt=""/>
                </div>
                <TrackingLogo/>
            </div>
        </section>
    )
}

export default TrackingBanner;