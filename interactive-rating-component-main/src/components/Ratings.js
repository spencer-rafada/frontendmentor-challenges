import React from "react";
import star from "../images/icon-star.svg";

export default function Ratings() {
  return (
    <div className="ratings">
      <div className="ratings ratings__rating">
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
          <button>Submit</button>
        </div>
        {/* <!-- Rating state end --> */}
      </div>
      <div className="ratings ratings__thankyou">
        {/* <!-- Thank you state start --> */}
        You selected
        {/* <!-- Add rating here --> */}
        out of 5 Thank you! We appreciate you taking the time to give a rating.
        If you ever need more support, don’t hesitate to get in touch!
        {/* <!-- Thank you state end --> */}
      </div>
    </div>
  );
}
