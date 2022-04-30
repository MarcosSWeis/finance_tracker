export default function SwitchDates({ setSwitchDates, switchDates }) {
  return (
    <div class=" pl-2 mb-5">
      <h4> Buscar por fechas</h4>
      <div
        class="switch"
        onClick={(e) => {
          console.log(e);
          if (switchDates) {
            setSwitchDates(null);
          } else {
            setSwitchDates(true);
          }
        }}
      >
        <input
          type="checkbox"
          role="switch"
          checked={switchDates ? "checked" : ""}
        />
        <span class="slider"></span>
      </div>
    </div>
  );
}
