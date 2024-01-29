import React, {Component} from 'react';
import TrackingProductItem from './TrackingProductItem';


class TrackingProduct extends Component{
    render(){
        return(
            <section className="tracking_product_area sec_pad">
                <div className="container">
                    <TrackingProductItem image="watch_1.png" TrackingTitle="Hazlo tu mismo"  Trackingd="Lanzamiento tu hosting wordpress al instante, podrás editar y crear tu web por tu propia cuenta." Trackingbtn="Learn more"/>
                    <TrackingProductItem itemClass="tracking_pr_two" rowclass="flex-row-reverse" image="crismas.png" TrackingTitle="Landing page - Blog"  Trackingd="Con nuestro interfaz intuitivo y amigable podrás lanzar tus servicios en solo un par de clicks y realizar tus tareas en un mismo lugar." Trackingbtn="Learn more"/>
                    <TrackingProductItem itemClass="tracking_pr_three" image="month.png" TrackingTitle="Tienda en Linea"  Trackingd="Ofrecemos un servicio de desarrollo en el cual nuestro equipo se encarga de lanzar tus servicios por ti. Todo lo que necesitas hacer es decirnos tus objetivos y nosotros te guiaremos durante el proceso, sin que tengas que preocuparte por nada más." Trackingbtn="Contratar"/>
                </div>
            </section>
        )
    }
}

export default TrackingProduct;