import { Row, Col, Modal, Button } from "react-bootstrap";
import { useTranslation} from "react-i18next";
import Images from "../../files/data";


 const FirstApp = (props) =>{

    const {t} =useTranslation();


         return(
        <Modal
        show={props.show2}
        onHide={props.close2}
        scrollable={true}
        size="lg"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body onClick={e => e.stopPropagation()}>
        <Row className="RnL-first-section">
        <Col size={6}>
        <h1 className="RnL-h1">Read and Listen</h1>
        <p className="RnL-p1">{t('RnL-p1')}</p>
        </Col>
        <Col size={6}>
        <img className="Modal-Design" src={Images.RnL_Design} title="RnL Design" />
        </Col>
        </Row>
        <div className="FApp-second-section">
        <h2 className="Modal-h2">{t('RnL-Assum')}</h2>
        <p className="Modal-p2">{t('RnL-Assum-p')}</p>
        <h2 className="Modal-h2">{t('RnL-Goal')}</h2>
        <p className="Modal-p2">{t('RnL-Goal-p')}</p>
        <h2 className="Modal-h2">{t('RnL-Role')}</h2>
        <p className="Modal-p2">{t('RnL-Role-p')}</p>
        <h2 className="Modal-h2">{t('RnL-Users')}</h2>
        <Row className="FApp-Goal-section">
        <Col size={6}>
        <img className="Modal-User-image" src={Images.RnL_Woman} title="Woman" />
        </Col>
        <Col size={6}>
        <h2 className="Model-Goals">{t('Model-Goals')}</h2>
        <ul className="Model-Goals-ul">
        <li ClassName="Model-Goals-p">{t('RnL-Users-p1')} </li>
        <li ClassName="Model-Goals-p">{t('RnL-Users-p2')} </li>
        </ul>
        </Col>
        </Row>
        <h2 className="Modal-h2">{t('Modal-UserFlow')}</h2>
        <p className="Modal-p2">{t('RnL-UserFlow-p')}</p>
        <div className="RnL-Button">
        <img className="User-image" src={Images.RnL_UserFlow} title="User Flow"/>
        </div>
        <h2 className="Modal-h2">{t('RnL-Sketches')}</h2>
        <p className="Modal-p2">{t('RnL-Sketches-p')}</p>
        <img className="Modal-img" src={Images.RnL_Sketches} title="Sketches" />
        <div className="RnL-Wireframes-background">
        <h2 className="Modal-h2">{t('RnL-Wireframes')}</h2>
        <p className="Modal-p2">{t('RnL-Wireframes-p')}</p>
        <img className="Modal-img" src={Images.RnL_Frame} title="Frame" />
        <p className="Modal-p2">{t('RnL-Wireframes-p1')}</p>
        <img className="Modal-img" src={Images.RnL_Frame2} title="Frame" />
        </div>
        <div className="RnL-Wireframes-background">
        <h2 className="FApp-h3">{t('RnL-Prototypes-test')}</h2>
        <div className="RnL-Button">
        <Button href="https://tiny.pl/wqmnh" variant="secondary" target="_blank">Prototype</Button>
        </div>
        <h2 className="Modal-h2">{t('RnL-Summary')}</h2>
        <p className="Modal-p2">{t('RnL-Summary-p')}</p>
        </div>
        </div>

        </Modal.Body>
        </Modal>
    )

}

export default FirstApp;

