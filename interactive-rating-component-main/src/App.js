import { React, useState } from "react";
import "./style/style.css";
import Ratings from "./components/Ratings";
import ThankYou from "./components/ThankYou";

function App() {
  const [state, setState] = useState("ratings");

  const handleSubmitPressed = () => {
    if (state === "ratings") {
      setState("thanks");
    } else {
      setState("ratings");
    }
    console.log(state);
  };
  return (
    <div className="background">
      {state === "ratings" && (
        <Ratings onClick={handleSubmitPressed} state={state} />
      )}
      {state === "thanks" && <ThankYou />}
    </div>
  );
}

export default App;
