export default function FormExpenses() {
  function handlerChange(event) {
    /*   setCreateIncome({
      ...createIncome,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name, event.target.value); */
  }
  function handlerSubmit(event) {}
  return (
    <div className="mx-auto pt-1 col-12 pl-0 mw-500px justify-content-around">
      <h2 className="mt-4 text-center text-danger">Agregar gasto</h2>
      <form onSubmit={handlerSubmit} id="formIncomes">
        <div className="mb-3">
          <label htmlFor="type_id" className="form-label">
            Tipo de gasto
          </label>
          <input
            name="type_id"
            type="text"
            onChange={handlerChange}
            className="form-control"
            id="type_id"
            placeholder="Tipo de gasto"
            /*  value={createIncome.fixed_income} */
          />
        </div>
        <p className="text-danger" id="errorType_id"></p>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Monto
          </label>
          <input
            name="amount"
            type="number"
            onChange={handlerChange}
            className="form-control"
            id="amount"
            placeholder="Monto"
            /*  value={createIncome.varied_income} */
          />
        </div>
        <p className="text-danger" id="errorAmount"></p>

        <label htmlFor="categories" className="d-block">
          Categorías
        </label>
        {/*  {categories ? (
          <select
            className="form-select"
            name="category_exp_id"
            id="categories"
            onChange={handlerChange}
          >
            <option value={0}>Categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
        ) : (
          <Skeleton />
        )} */}
        <p className="text-danger" id="errorCategories"></p>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <input
            name="description"
            type="text"
            onChange={handlerChange}
            className="form-control"
            id="description"
            placeholder="Descripción"
            /* value={createIncome.description} */
          />
        </div>
        <p className="text-danger" id="errorDescription"></p>
        <button type="submit" id="btnRegister" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
