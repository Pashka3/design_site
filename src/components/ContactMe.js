import { Col, Container, Row } from "react-bootstrap";
import { useTranslation} from "react-i18next";
import Images from "../files/data";
import ContactSection from '../files/ContactSection.tsx';
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const ContactMe = () =>{

    const {t} =useTranslation();

    return (
        <section className="Contact" id="Contact">
        <Container>
        <h6 className="h6-contact">{t('get_in')} </h6>
        <Row>
        <Col size={6}>
        <AnimationOnScroll animateIn=" animate__animated animate__heartBeat" animateOnce="true">
        <img className="message-contact" src={Images.message} href="https://www.flaticon.com/authors/freepik" title="Flaticon" />
        </AnimationOnScroll>
        <p className="p-fallow">{t('social')}</p>
        <div className="social"> 
        <a href="https://www.instagram.com/pavkodesign_/" target="_blank">
        <img className="img-fluid img-fallow" src={Images.instagram} alt="instagram" />
        </a>
        <a href="https://www.deviantart.com/pashkaaaa/" target="_blank">
        <img className="img-fluid img-fallow" src={Images.deviantart} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/paweł-dąbrowski-512389247" target="_blank">
        <img className="img-fluid img-fallow" src={Images.linkedin} alt="facebook" />
        </a>
        </div>
        </Col>
        <Col size={6}>
        <ContactSection/>
        </Col>
        </Row>
        </Container>
        <div>
        <p className="footer">© 2022 pavkodesign.com, All rights reserved. </p>
        </div>
        
        </section>
    )
}

//import 'dotenv/config'
//import express from 'express'