//----- Componenti react
import { useState,useContext, React } from "react";
//----- Componenti react-bootstrap
import { Button } from "react-bootstrap";

//----- Componenti app
import AllTheBooks from "./AllTheBooks";

//----- Context
import { Theme } from "../modules/Context";

//----- Json
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

//----- Categorys.jsx
function Categorys({search}) {
  const [type, setType] = useState("fantasy");

  const categoryList = ["fantasy", "history", "horror", "romance", "scifi"];

  const [themeContext, setThemeContext] = useContext(Theme);

  return (
    <>
      {categoryList.map((categ) => (
        <Button
          variant={type === categ ? "secondary" : themeContext }
          className="m-1"
          onClick={() => setType(categ)}
        >
          {categ}
        </Button>
      ))}

      {type === "fantasy" && <AllTheBooks category={fantasy} search={search} />}
      {type === "history" && <AllTheBooks category={history} search={search}/>}
      {type === "horror" && <AllTheBooks category={horror} search={search}/>}
      {type === "romance" && <AllTheBooks category={romance} search={search} />}
      {type === "scifi" && <AllTheBooks category={scifi} search={search}/>}
    </>
  );
}
export default Categorys;
