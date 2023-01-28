import './App.css';
import React from "react";

import {NavBar} from '../src/components/Navbar';
import {Banner} from '../src/components/Banner';
import {Projects} from '../src/components/Projects';
import {Skills} from '../src/components/Skills';
import {Caro} from './components/Carousel'
import {Time} from './components/Free_time'
import { ContactMe } from './components/ContactMe';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Projects />
    <Skills />
    <Caro />
    <Time />
    <ContactMe />
    </div>
  );
}

export default App;
