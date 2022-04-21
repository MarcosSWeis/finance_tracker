export default function FrameExpenses() {
  return (
    <div className=" mt-20">
      <table className="table ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="px-0 w-20">
              Tipo de gasto
            </th>
            <th scope="col" className="px-0 w-20">
              Descripción
            </th>
            <th scope="col" className="px-0 w-20">
              Monto
            </th>
            <th scope="col" className="px-0 w-20">
              Categoría
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="align-middle ">
              1
            </th>
            <td className="align-middle p-0">tipo de gasto</td>
            <td className="align-middle p-0">desc</td>
            <td className="align-middle p-0">monto</td>
            <td className="align-middle p-0">categoría</td>
            <td className="p-1  mw-30px">
              <button type="button" className="btn btn-primary w-100 p-0 mb-1">
                Editar
              </button>
              <button type="button" class="btn btn-danger w-100 p-0">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
