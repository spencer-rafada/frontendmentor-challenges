import { React, useState } from "react";
import star from "../images/icon-star.svg";
import thanks from "../images/illustration-thank-you.svg";

export default function Ratings() {
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
    <div className="ratings">
      {state === "ratings" && (
        <div className="ratings__rating">
          {/* <!-- Rating state start --> */}
          <div className="ratings__star">
            <img src={star} alt="star" />
          </div>
          <div className="ratings__title">
            <h1>How did we do?</h1>
          </div>
          <div className="ratings__body">
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="ratings__form">
            {/* TODO change this to a form */}
            <div className="ratings__form__input">1 2 3 4 5</div>
            <button
              className="ratings__form__button"
              onClick={handleSubmitPressed}
            >
              Submit
            </button>
          </div>
          {/* <!-- Rating state end --> */}
        </div>
      )}
      {state === "thanks" && (
        <div className="ratings ratings__thankyou">
          <img src={thanks} alt="thank you"></img>
          {/* <!-- Thank you state start --> */}
          You selected
          {/* <!-- Add rating here --> */}
          out of 5 Thank you! We appreciate you taking the time to give a
          rating. If you ever need more support, don’t hesitate to get in touch!
          {/* <!-- Thank you state end --> */}
        </div>
      )}
    </div>
  );
}
