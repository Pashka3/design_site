import { Row, Col, Modal, Button } from "react-bootstrap";
import { useTranslation} from "react-i18next";
import Images from "../../files/data";


 const FirstApp = (props) =>{

    const {t} =useTranslation();


    const FApp_button =[
        {
            text: t('FApp-Button1'),
            hrefUrl: 'https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=46%3A2178&node-id=46%3A2179&viewport=132%2C371%2C0.2&scaling=scale-down&starting-point-node-id=315%3A11340'
        },
        {
            text: t('FApp-Button2'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=206%3A2511&node-id=208%3A2598&viewport=77%2C356%2C0.15&scaling=scale-down&starting-point-node-id=208%3A2598"
        },
        {   
            text: t('FApp-Button3'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=322%3A5836&node-id=322%3A5837&viewport=77%2C356%2C0.15&scaling=scale-down&starting-point-node-id=322%3A5837"
        },
        {
            text: t('FApp-Button4'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=106%3A2225&node-id=106%3A2226&viewport=51%2C285%2C0.12&scaling=scale-down&starting-point-node-id=106%3A2226"
        },
        {
            text: t('FApp-Button5'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=153%3A2398&node-id=153%3A2399&viewport=204%2C282%2C0.25&scaling=scale-down&starting-point-node-id=153%3A2399&show-proto-sidebar=1"
        },
        {
            text: t('FApp-Button6'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=251%3A3326&node-id=253%3A3481&viewport=27%2C165%2C0.27&scaling=scale-down&starting-point-node-id=253%3A3481"
        },
        {
            text: t('FApp-Button7'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=277%3A5041&node-id=277%3A5042&viewport=123%2C283%2C0.17&scaling=scale-down&starting-point-node-id=277%3A5042"
        },
        {
            text: t('FApp-Button8'),
            hrefUrl: "https://www.figma.com/proto/R05DimIOKjInAh40AAT1YN/Kieszonkowa-Appteka?page-id=295%3A4606&node-id=296%3A4810&viewport=148%2C316%2C0.13&scaling=scale-down&starting-point-node-id=296%3A4810"
        }
    ]

       return(
        <Modal
        show={props.show}
        onHide={props.close}
        scrollable={true}
        size="lg"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body onClick={e => e.stopPropagation()}>
        <Row className="FApp-first-section">
        <Col size={6}>
        <img className="FApp-logo" src={Images.FApp_logo} title="Logo" />
        <h1 className="FApp-h1">Kieszonkowa Appteka</h1>
        <p className="FApp-p1">{t('FApp-p1')}</p>
        </Col>
        <Col size={6}>
        <img className="Modal-Design" src={Images.FApp_press} title="First Presentation" />
        </Col>
        </Row>
        <div className="FApp-second-section">
        <h2 className="Modal-h2">{t('FApp-Assum')}</h2>
        <p className="Modal-p2">{t('FApp-Assum-p')}</p>
        <h2 className="Modal-h2">{t('FApp-Goal')}</h2>
        <p className="Modal-p2">{t('FApp-Goal-p')}</p>
        <h2 className="Modal-h2">{t('FApp-Role')}</h2>
        <p className="Modal-p2">{t('FApp-Role-p')}</p>
        <h2 className="Modal-h2">{t('FApp-Users')}</h2>
        <p className="Modal-p2">{t('FApp-Users-p')}</p>
        <Row className="FApp-Goal-section">
        <Col size={6}>
        <img className="Modal-User-image" src={Images.FApp_firstImg} title="Pills" />
        </Col>
        <Col size={6}>
        <h2 className="Model-Goals">{t('Model-Goals')}</h2>
        <ul className="Model-Goals-ul">
        <li ClassName="Model-Goals-p">{t('FApp-Model-Goals-p1')} </li>
        <li ClassName="Model-Goals-p">{t('FApp-Model-Goals-p2')} </li>
        <li ClassName="Model-Goals-p">{t('FApp-Model-Goals-p3')} </li>
        <li ClassName="Model-Goals-p">{t('FApp-Model-Goals-p4')} </li>
        </ul>
        </Col>
        </Row>
        <h2 className="Modal-h2">{t('Modal-UserFlow')}</h2>
        <p className="Modal-p2">{t('FApp-UserFlow-p')}</p>
        <Row className="FApp-Goal-section">
        <Col size={6}>
        <img className="User-image" src={Images.FApp_FirstLogon} title="First Logon"/>
        </Col>
        <Col size={6}>
        <img className="User-image" src={Images.FApp_Purchases} title="Purchase"/>
        </Col>
        </Row>
        <h2 className="Modal-h2">{t('FApp-Sketches')}</h2>
        <p className="Modal-p2">{t('FApp-Sketeches-p')}</p>
        <img className="Modal-img" src={Images.FApp_sketches} title="Sketches" />
        <div className="FApp-Wireframes-background">
        <h2 className="Modal-h2">{t('FApp-Wireframes')}</h2>
        <p className="Modal-p2">{t('FApp-Wireframes-p')}</p>
        <img className="Modal-img" src={Images.FApp_frame} title="Frame" />
        <p className="Modal-p2">{t('FApp-Wireframes-p2')}</p>
        <img className="Modal-img" src={Images.FApp_frame2} title="Frame" />
        </div>
        <p className="Modal-p2">{t('FApp-Wireframes-p3')}</p>
        <h2 className="FApp-h3">{t('FApp-Prototypes-test')}</h2>
        {FApp_button.map(({index,text,hrefUrl}) =>(
            <Button key={index} className="FApp-prototype-button" href={hrefUrl} variant="secondary" target="_blank">{text}</Button>
        ))}
        
        <div className="FApp-Wireframes-background">
        <h2 className="Modal-h2">{t('FApp-Summary')}</h2>
        <p className="Modal-p2">{t('FApp-Summary-p')}</p>
        </div>
        </div>

        </Modal.Body>
        </Modal>
    )

}

export default FirstApp;
