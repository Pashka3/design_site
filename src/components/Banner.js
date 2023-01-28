import { useTranslation} from "react-i18next";
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';



export const Banner =() =>{

    const {t} =useTranslation();

    return (
        <section className="banner"  id="Home">
        <Container>
        <Row>
        <Col xs={12} md={6} xl={7}>
        <h1 className="animate__animated animate__slideInLeft banner-h1">{t('Hello')}</h1>
        <p className="animate__animated animate__slideInRight banner-p1">{t('I_m')}</p>
        <Button href="#Contact" className="banner-button" variant="secondary" >{t('Contact_me')}</Button>
        </Col>
        </Row>
        </Container>
        </section>
    )
}