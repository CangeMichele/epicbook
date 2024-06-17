//----- Componenti react
import { useState, React } from "react";
//----- Componenti react-bootstrap
import { Button } from "react-bootstrap";

//----- Componenti app
import AllTheBooks from "./AllTheBooks";

//----- Json
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

//----- Categorys.jsx
function Categorys() {
  let [type, setType] = useState("fantasy");
  return (
    <>
      <Button variant="dark" className="m-1" onClick={() => setType("fantasy")}>
        Fantasy
      </Button>
      <Button variant="dark" className="m-1" onClick={() => setType("history")}>
        History
      </Button>
      <Button variant="dark" className="m-1" onClick={() => setType("horror")}>
        Horror
      </Button>
      <Button variant="dark" className="m-1" onClick={() => setType("romance")}>
        Romance
      </Button>
      <Button variant="dark" className="m-1" onClick={() => setType("scifi")}>
        Scifi
      </Button>

      {type === "fantasy" && <AllTheBooks category={fantasy} />}
      {type === "history" && <AllTheBooks category={history} />}
      {type === "horror" && <AllTheBooks category={horror} />}
      {type === "romance" && <AllTheBooks category={romance} />}
      {type === "scifi" && <AllTheBooks category={scifi} />}
    </>
  );
}
export default Categorys;
