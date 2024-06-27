//----- Componenti react
import React, { useContext } from "react";
//----- Componenti react-bootstrap
import { Container, Nav, Navbar, Button } from "react-bootstrap";

//----- React Icons (Bootstrap Icons)
import { BsSun, BsMoon } from "react-icons/bs";

//----- Componenti app
import SearchForm from "./SearchForm";

//----- Context
import { Theme } from "../modules/Context";

//----- MyNavbar.jsx
function MyNavbar({ search, handleSearch }) {
  const [themeContext, setThemeContext] = useContext(Theme);
  console.log(Theme);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary fixed-top"
      bg={themeContext}
      data-bs-theme={themeContext}
    >
      <Container>
        <Navbar.Brand>EpicBook!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <SearchForm search={search} handleSearch={handleSearch} />
        <Button
          onClick={() => {
            themeContext === "dark"
              ? setThemeContext("light")
              : setThemeContext("dark");
          }}

          variant={themeContext}
        >
          {themeContext === "dark" ? <BsMoon /> : <BsSun />}
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
