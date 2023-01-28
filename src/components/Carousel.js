import { useTranslation} from "react-i18next";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Images from "../files/data"

export const Caro = () => {
    const {t} = useTranslation();
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="Caro">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="Caro-bx wow zoomIn">
                                <h4>{t('h4_skills')}</h4>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={Images.First} alt="First Skill" />
                                </div>
                                <div className="item">
                                    <img src={Images.Second} alt="Second Skill" />
                                </div>
                                <div className="item">
                                    <img src={Images.Third} alt="Third Skill" />
                                </div>
                                <div className="item">
                                    <img src={Images.Fourth} alt="Fourth Skill" />
                                </div>
                                <div className="item">
                                    <img src={Images.Five} alt="Five Skill" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}