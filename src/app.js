import React from 'react';
import {Container} from 'reactstrap';
import Navbartop from './components/navbartop';
import './app.scss';
import ContenIntro from './components/contentintro';


function App(){
  return(
    <Container fluid = {"true"}>
      <Navbartop></Navbartop>
      <ContenIntro></ContenIntro>
    </Container>
  );
}
////////////////////////////////////////////
export default App;
