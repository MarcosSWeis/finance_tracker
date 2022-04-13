import { Link } from "react-router-dom";

export default function HandlerButtonExpenses() {
  return (
    <>
      <div id="container-floating">
        <div class="nd4 nds">
          <img class="reminder" />
          <p class="letter">C</p>
        </div>

        <div class="nd3 nds">
          <img
            class="reminder"
            src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png"
          />
        </div>

        <div class="nd1 nds">
          <p class="letter">E</p>
        </div>

        <div id="floating-button">
          <Link to={"/expenses"}>
            <p class="plus">+</p>
            <img
              class="edit"
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
