import React, {Component} from 'react';

class HostingActionTwo extends Component {
    render(){
        return(
            <section className="h_action_promo_area">
                <div className="overlay_bg" style={{backgroundImage: "url(" + (require("../img/hosting/hosting_action_bg.png")) + ")"}}></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="h_promo_content">
                                <h2>¿Necesitas nuestra ayuda?</h2>
                                <p>Contrata nuestra asesoría</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-right">
                            <a href="/#" className="hosting_btn btn_hover">Conozcámonos</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default HostingActionTwo;
