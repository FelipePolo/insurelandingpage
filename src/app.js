import React from 'react';
import {Container} from 'reactstrap';
import Navbartop from './components/navbartop';
import ContenIntro from './components/contentintro';
import SectionD from './components/sectiondiferrent';
import Findout from './components/findout';
import Footer from './components/footer';
import './app.scss';

function App(){
  return(
    <Container fluid = {"true"}>
      <Navbartop></Navbartop>
      <ContenIntro></ContenIntro>
      <SectionD></SectionD>
      <Findout></Findout>
      <Footer></Footer>
    </Container>
  );
}
////////////////////////////////////////////
export default App;
