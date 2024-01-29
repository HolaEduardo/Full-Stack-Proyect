import React from 'react';
import HostingFeaturesItem from './HostingFeaturesItem';

const HostingFeaturesTwo =()=>{
    return(
        <section className="hosting_features_area">
            <div className="container">
                <HostingFeaturesItem rowClass="flex-row-reverse" hImage="business2.png" hTitle="Todo lo que necesitas en un solo lugar" hPragraph="No busques más y maneja todo desde nuestra plataforma y tus aplicaciones albergadas." 
                icon="icon9.png" icon2="icon10.png" text="Arriendo de VMs" text2="Wordpress Hosting" tdescription="Levanta tus servidores en tan solo un par de clicks." tdescription2="Contrata nuestro hosting WordPress de alto rendimiento."/>
            </div>
        </section>
    )
}

export default HostingFeaturesTwo;