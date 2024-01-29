import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, company, message } = formData;

        const dataToSubmit = {
            name,
            email,
            phone,
            company,
            message
        };

        try {
            const response = await fetch('http://localhost:3000/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });

            if (response.ok) {
                setStatusMessage('¡Mensaje enviado con éxito!');
            } else {
                setStatusMessage('¡Ocurrió un error al enviar el mensaje!');
            }
        } catch (error) {
            setStatusMessage('Error al enviar la solicitud POST: ' + error.message);
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        });

        setShowModal(true);
    };


    return (
        <section className="contact_info_area sec_pad bg_color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Dirección</h6>
                            <p className="f_400 f_size_15">San Miguel, Santiago, Chile</p>
                        </div>
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Información de contacto</h6>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Whatsapp:</span> <a href="tel:3024437488">(+56) 9 6636 18 58</a></p>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Llamadas:</span> <a href="tel:3024437488">(+56) 9 6636 18 58</a>
                            <br>
                            </br>
                            <a href="tel:3024437488">(+56) 9 9699 42 25</a>
                            </p>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Correo:</span> <a href="mailto:saasland@gmail.com">e.jaramoreno@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="contact_form col-lg-9">
                        <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">Dejame un Mensaje</h2>
                        <form onSubmit={submitForm} className="contact_form_box" method="post" id="contactForm">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" value={formData.name} name="name" placeholder="Nombre" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group text_box">
                                        <input type="text" value={formData.email} name="email" placeholder="Correo" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <input type="text" value={formData.phone} name="phone" placeholder="Teléfono" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <input type="text" value={formData.company} name="company" placeholder="Asunto" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group text_box">
                                        <textarea value={formData.message} name="message" id="message" cols="30" rows="10" placeholder="Escribe aquí tu mensaje" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn_three">Enviar Mensaje</button>
                        </form>
                        {/* {emailStatus ? emailStatus : null} */}
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Body>{statusMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default Contacts;
