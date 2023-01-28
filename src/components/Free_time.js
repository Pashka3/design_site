import { Container } from "react-bootstrap";
import { useTranslation} from "react-i18next";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Images from "../files/data"
import PhotoAlbum from "react-photo-album";

const photos =[
    {
        id:1,
        src : Images.Moto,
        width: 1080,
        height: 780
      
    },
    {
        id:2,
        src : Images.Camper,
        width: 1080,
        height: 1620
       },
    {
        id:3,
        src : Images.Butterflies,
        width: 1080,
        height: 1620,
    },
    {
        id:4,
        src : Images.Planet,
        width: 1080,
        height: 1620
    },
    {
        id:5,
        src : Images.Puszek,
        width: 1080,
        height: 1620
    },
    {
        id:6,
        src : Images.Bike,
        width: 1080,
        height: 780
    }
]

export const Time = () =>{
   const {t} = useTranslation();
   
    return (
        <section className="FreeTime">
        <Container>
        <AnimationOnScroll animateIn=" animate__animated animate__slideInRight" animateOnce="true">
        <h5 className="h5-time">{t('h5_free')}</h5>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn=" animate__animated animate__slideInLeft" animateOnce="true">
        <p className="p-time">{t('p_free')}</p>
        </AnimationOnScroll>
        <PhotoAlbum layout="columns" photos={photos} columns={(containerWidth) => {
            if (containerWidth < 400) return 2;
            if (containerWidth < 800) return 3;
            return 3;
        }}/>
        </Container>
        
        </section>
    )
}