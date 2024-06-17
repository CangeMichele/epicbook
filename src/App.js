//----- CSS
import './App.css';
//----- CSS bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//----- Componenti react
import React from "react"
//----- Componenti react-bootstrap
import { Container } from 'react-bootstrap';

//----- Componenti app
import MyNavbar from './Components/MyNavbar';
import Welcome from './Components/Welcome';
import Categorys from './Components/Categorys';
import MyFooter from './Components/MyFooter';



//----- App.js -----
function App() {
  return (
    <>
      <MyNavbar />

      <Container className='myContainer'>

        <Welcome />
        <Categorys />

      </Container>

      <MyFooter />
    </>
  );
}

export default App;
