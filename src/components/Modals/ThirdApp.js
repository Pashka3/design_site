import { Row, Col, Modal, Button } from "react-bootstrap";
import { useTranslation} from "react-i18next";
import Images from "../../files/data";


const ThirdApp = (props) =>{

    const {t} =useTranslation();


         return(
        <Modal
        show={props.show3}
        onHide={props.close3}
        scrollable={true}
        size="lg"
        >
        <Modal.Header closeButton>
        <img src={Images.Hyjal_logo} title="Hyjal logo"/>
        </Modal.Header>
        <Modal.Body onClick={e => e.stopPropagation()}>
        
        <p className="Modal-p2">{t('Hyjal-p')}</p>
        <p className="Modal-p2">{t('Hyjal-p2')}</p>
        
        <p className="Modal-p2">{t('Hyjal-p3')}</p>
        <h2 className="FApp-h3">{t('Hyjal-Prototypes-test')}</h2>
        <div className="RnL-Button">
        <Button href="https://tiny.pl/wqg2b" variant="secondary" target="_blank">Campsite Hyjal</Button>
        </div>
        <p className="Modal-p2">{t('Hyjal-click')}</p>
        </Modal.Body>
        </Modal>
        )

         }

         export default ThirdApp;
