import React from 'react';
import { useState } from 'react';
import Modal from 'react-responsive-modal';

const DomainSearch = () => {
    const [domain, setDomain] = useState('');
    const [extension, setExtension] = useState('.com');
    const [open, setOpen] = useState(false); // Estado para controlar la apertura y el cierre del modal
    const [modalMessage, setModalMessage] = useState('');
    const onOpenModal = () => {
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
    };

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    };

    const handleExtensionChange = (event) => {
        setExtension(event.target.value);
    };

    const verifyDomain = async () => {
        const apiUrl = 'https://dws.diggitaly.cl/api/dns/verify/';

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ domain: domain, extension: extension }),
        };

        console.log('Datos del formulario:', { domain, extension });

        try {
            const response = await fetch(apiUrl, requestOptions);
            const content = await response.json();
            console.log(content);
            if (content.available === true) {
                setModalMessage('El dominio está disponible!');
                onOpenModal();
            } else {
                setModalMessage('El dominio no está disponible');
                onOpenModal();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <section className="domain_search_area sec_pad">
            <div className="map_bg"></div>
            <div className="container">
                <div className="domain_box_info">
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Buscas un dominio?</h3>
                    <form action="#" method="post">
                        <div className="domain_form_inner">
                            <input type="text" className="form-control" value={domain} onChange={handleDomainChange} placeholder="Encuentra el tuyo" />
                            <div className="domain_select">
                                <select className="form-control selectpickers" value={extension} onChange={handleExtensionChange}>
                                    <option>.cl</option>
                                    <option>.com</option>
                                    <option>.ar</option>
                                    <option>.co</option>
                                    <option>.pe</option>
                                </select>
                            </div>
                            <button type="button" className="hosting_btn" onClick={verifyDomain}>
                                Match
                            </button>
                        </div>
                    </form>
                    <ul className="list-unstyled domain_price">
                        <li>.com <span>$12.99</span></li>
                        <li>.cl <span>$10.99</span></li>
                        <li>.ar <span>$11</span></li>
                        <li>.co <span>$9.50</span></li>
                        <li>.pe <span>$7.50</span></li>
                    </ul>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-white'>{modalMessage}</h2>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default DomainSearch;