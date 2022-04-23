export default function BtnSwitch({ setSwitchDates, switchDates }) {
  return (
    <div class="form-check form-switch pl-2 mb-5">
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Buscar por fechas
      </label>
      <input
        class="form-check-input positionBtnSwitch widthBtnSwitch"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={() => {
          if (switchDates) {
            setSwitchDates(null);
          } else {
            setSwitchDates(true);
          }
        }}
      />
    </div>
  );
}
