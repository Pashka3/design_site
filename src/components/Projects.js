import { Container, Row, Col } from "react-bootstrap"
import { useTranslation} from "react-i18next";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from "react";
import Images from "../files/data";
import  FirstApp  from "./Modals/FirstApp";
import  SecondApp  from "./Modals/SecondApp";
import ThirdApp from "./Modals/ThirdApp";







export const Projects =() =>{

    const {t} =useTranslation();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const toggleModal = () => {
             setShow(!show)
    }
    
    const toogleModal2 =() => {
            setShow2(!show2)
    }

    const toogleModal3 = () =>{
            setShow3(!show3)
    }

    const cards=[
        {   
            description: "Kiesoznkowa Appteka. App Design",
            imgUrl: Images.First_Project,
            comp: <FirstApp show={show} close={toggleModal}/>,
            click: toggleModal
        },
        {  
            description: "Hear the book. App Design",
            imgUrl: Images.Second_Project,
            comp: <SecondApp show2={show2} close2={toogleModal2}/>,
            click: toogleModal2
        },
        {   
            description: "Camping Hyjal. Web Design",
            imgUrl: Images.Third_Project,
            comp: <ThirdApp show3={show3} close3={toogleModal3} />,
            click: toogleModal3
        }
    ]



    return(
    <section className="Projects" id="Projects">
    <Container>
    <Row>
    <Col size={12}>
    <AnimationOnScroll animateIn=" animate__animated animate__slideInLeft" animateOnce="true">
    <h2 className="projects-h2">{t("h2_title")}</h2>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn=" animate__animated animate__slideInRight" animateOnce="true">
    <p className="projects-p">{t('p2_text')}</p>
    </AnimationOnScroll>
    </Col>
    <AnimationOnScroll animateIn="animate__animated animate__fadeIn" animateOnce="true">
    <Row>
    {cards.map(({index,imgUrl,description,comp, click}) =>(
    <Col size={12} sm={6} md={4}  className="Project-Col">
    <div key={index} data-content={description} onClick={click} className="img-con">
    {comp} 
    <img  src={imgUrl}   alt="card image" className="card_image img-fluid"/>
    </div>
    </Col>
    ))}
    </Row>
    </AnimationOnScroll>
    </Row>
    </Container>


    </section>
)
}






//  <Col className="Columns" size={12} sm={6} md={4}>
//<img key={index} src={imgUrl} alt="card image" className="card_image img-fluid" />
//<div className="image_overlay image_overlay--primary">
//<div className="title_image">{title}</div>
//<div className="description_image"> {description}  </div>
//</div>
//</Col>