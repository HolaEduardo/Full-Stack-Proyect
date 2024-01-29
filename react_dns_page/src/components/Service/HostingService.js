import React from 'react';
import Sectitle from '../Title/Sectitle';
import HRServiceItems from './HostingServiceitem';

const HostingService =()=> {
    return(
        <section className="hosting_service_area sec_pad">
            <div className="container">
                <Sectitle sClass="hosting_title text-center" Title="Construido para emprendedores" TitleP="Sabemos lo que es emprender y lo sacrificado que es, facilita tu trabajo con nuestras herramientas automatizadas para administrar tu negocio."/>
                <div className="row">
                    <HRServiceItems hostingicon="icon1.png" hostingserviceTitle="Hosting estático" hostingservicedescription="Haz uso compartido de los servidores y accede a precios increibles."/>
                    <HRServiceItems hostingicon="icon2.png" hostingserviceTitle="Gestiona tus dominios" hostingservicedescription="Compra y gestiona tus dominios desde nuestra plataforma."/>
                    <HRServiceItems hostingicon="icon3.png" hostingserviceTitle="Construye tu base de datos" hostingservicedescription="Almacena tus datos y usalos como tu quieras, siempre tendrás acceso a ellos."/>
                    <HRServiceItems hostingicon="icon4.png" hostingserviceTitle="Accesso seguro" hostingservicedescription="Somos expertos en seguridad informática, tus servidores estarán protegidos por nuestras medidas de seguridad."/>
                    <HRServiceItems hostingicon="icon5.png" hostingserviceTitle="Hasta 100 Mb/seg" hostingservicedescription="Contamos con ancho de banda de hasta 100 MB/s y una baja latencia para garantizar la rapidez del servicio."/>
                    <HRServiceItems hostingicon="icon6.png" hostingserviceTitle="Fácil integración" hostingservicedescription="El proceso es totalmente intuitvo, además contarás con documentación y asesoría vía E.V.A Assistance."/>
                </div>
            </div>
        </section>
    )
}
export default HostingService;