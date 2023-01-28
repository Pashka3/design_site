import { useTranslation} from "react-i18next";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Container,Row,Col } from "react-bootstrap";
import  Images from "../files/data"

export  const Skills = () =>
{
    const {t} =useTranslation();

    return(
        <section className="Skill" id="About_me">
        <Container>
        <Row className="row-background-skill " >
        <Col >
        <AnimationOnScroll animateIn=" animate__animated animate__slideInRight" animateOnce="true">
            <h3 className="h3-skill">{t('h3_title')}</h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn=" animate__animated animate__slideInLeft" animateOnce="true">
            <p className='p-skill'>{t('p3_text')}</p>
        </AnimationOnScroll>
        <div className="icons">
         <img className="skills-icon" src={Images.Illustrator} alt="adobe illustrator" />
         <img className="skills-icon" src={Images.Photoshop} alt="Adobe Photoshop" />
         <img className="skills-icon" src={Images.React} alt="React" />
         <img className="skills-icon" src={Images.Figma} alt="Figma" />
        </div>
        </Col>
        <Col className="col-img-skill d-none d-lg-block">
        <img src={Images.Kermit} alt="Kermit" className="img-skill"/>
        </Col>
        </Row>
        </Container>
        
        </section>
     )

}



//import Illustrator from "../images/icons/adobe-illustrator.png";
//import Photoshop from "../images/icons/adobe-photoshop.png";
//import React from "../images/icons/react.png";
//import Figma from "../images/icons/Figma.png";