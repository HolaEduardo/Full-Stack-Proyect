import React from 'react';
import HostingFeaturesItem from './HostingFeaturesItem';

const HostingFeatures =()=>{
    return(
        <section className="hosting_features_area">
            <div className="container">
                <HostingFeaturesItem hImage="business1.png" hTitle="Soluciones listas para tu negocio" hPragraph="¿Complicado? No te preocupes, nosotros nos encargamos, estás a un par de clicks de digitalizar tu negocio y ampliar tus posiblidades, permítenos acompañarte" 
                icon="icon7.png" icon2="icon8.png" text="Servidores de alta velocidad" text2="Desarrollo Ágil" tdescription="Toda nuestra infraestructura es del más alto nivel, garantizamos un 99,9%de uptime." tdescription2="Creamos nuestra propia metodología basada en desarrollo ágil y aumentamos la velocidad 5x en el desarollo."/>
            </div>
        </section>
    )
}

export default HostingFeatures;