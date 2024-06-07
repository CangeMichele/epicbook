//----- CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//----- Componenti
import MyNavbar from './Components/MyNavbar';

import { Container} from 'react-bootstrap';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';

import MyFooter from './Components/MyFooter';

//----- Json 
import Fantasy from './books/fantasy.json'





function App() {
  return (
    <>
      <MyNavbar />

      <Container className='myContainer'>
       
            <Welcome />
         
            <AllTheBooks books={Fantasy} />

      </Container>

      <MyFooter />
    </>
  );
}

export default App;
