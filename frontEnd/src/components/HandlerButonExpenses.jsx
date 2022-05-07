import React from "react";
import { Link } from "react-router-dom";

export default function HandlerButtonExpenses() {
  return (
    <>
      <div id="container-floating">
        <div className="nd4 nds">
          <img className="reminder" />
          <p className="letter">C</p>
        </div>

        <div className="nd3 nds">
          <img
            className="reminder"
            src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"
          />
        </div>

        <div className="nd1 nds">
          <p className="letter">E</p>
        </div>

        <div id="floating-button">
          <Link to={"/expenses"}>
            <p className="plus">+</p>
            <img
              className="edit"
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
