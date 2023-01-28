import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import logo from '../images/logo.png';
import { useTranslation} from "react-i18next";
import i18next from 'i18next'
import cookies from 'js-cookie'



const languages =[
  { nr: '1',
    code: 'en',
    name: 'English',
    country_code: 'fi fi-gb mx-2',
  },
  { nr: '2',
    code: 'pl',
    name: 'Polski',
    country_code: 'fi fi-pl mx-2',
  }
]

export const NavBar = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const {t} =useTranslation();
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY >50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt="Logo" width="60%"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon ms-auto"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link href="#Home" className= {activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('Home')}>{t('Home')}</Nav.Link>
            <Nav.Link href="#Projects" className= {activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('Projects')}>{t('Projects')}</Nav.Link>
            <Nav.Link href="#About_me" className= {activeLink === 'About_me' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('About_me')}>{t('About_me')}</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/paweł-dąbrowski-512389247" target="_blank" className= {activeLink === 'Linkedin' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('Linkedin')}>Linkedin</Nav.Link>
            <Nav.Link href="#Contact" className= {activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('Kontakt')}>{t('Contact')}</Nav.Link>
          </Nav>
          <NavDropdown title={t('lang')} id="collasible-nav-dropdown">
             {languages.map(({nr,code,name,country_code}) =>(
              <Dropdown.Item key={nr} onClick={() => {i18next.changeLanguage(code)}} disabled={code === currentLanguageCode}>
                <span className={country_code} style={{opacity: currentLanguageCode === code ? 0.5 : 1, }}/>
                {name}
              </Dropdown.Item>
    ))}
  

          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}