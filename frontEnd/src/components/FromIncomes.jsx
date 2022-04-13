import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getCategories } from "../helpers/get-categories-income";
export default function FormIncomes() {
  const [categories, setCategories] = useState(null);
  function handlerSubmit() {}
  function handlerChange() {}

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <div className="mx-auto pt-1 col-12 pl-0 mw-500px justify-content-around">
      <form onSubmit={handlerSubmit} id="formRegisters">
        <div className="mb-3">
          <label htmlFor="fixed_income" className="form-label">
            Ingreso fijo
          </label>
          <input
            name="fixed_income"
            type="number"
            onChange={handlerChange}
            className="form-control"
            id="fixed_income"
            placeholder="Ingreso Fijo"
            /* value={user.firstName}
             */
          />
        </div>

        <p className="text-danger" id="errorFirstName"></p>

        <div className="mb-3">
          <label htmlFor="varied_income" className="form-label">
            Ingreso variable
          </label>
          <input
            name="varied_income"
            type="number"
            onChange={handlerChange}
            className="form-control"
            id="varied_income"
            placeholder="Ingreso variable"
            /* value={user.lastName}
             */
          />
        </div>
        <label htmlFor="categories" className="d-block">
          Categorías
        </label>
        {categories ? (
          <select name="category_inc_id" id="categories">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
        ) : (
          <Skeleton />
        )}
        <p className="text-danger" id="errorLastName"></p>
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
            /* value={user.email}
             */
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
