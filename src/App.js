//----- CSS bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//----- CSS
import './App.css';

//----- Componenti react
import { useState, React } from "react";
//----- Componenti react-bootstrap
import { Container } from 'react-bootstrap';

//----- Componenti app
import MyNavbar from './Components/MyNavbar';
import Welcome from './Components/Welcome';
import Categorys from './Components/Categorys';
import MyFooter from './Components/MyFooter';

//----- Context 
import { Theme } from './modules/Context';




//----- App.js -----
function App() {

  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value); //metto la funzione nella variabile per passarla come parametro

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <Theme.Provider value={[theme, setTheme]}>

        <MyNavbar search={search} handleSearch={handleSearch} />

        <Container className='myContainer'>

          <Welcome />
          <Categorys search={search} />

        </Container>

        <MyFooter />

      </Theme.Provider>
    </>
  );
}

export default App;
