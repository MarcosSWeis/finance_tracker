import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { ExpensesContext } from "../context/ExpensesContext";
import { controllerBudget } from "../services/request/budget";
export default function CardsMetricsHome({ fixedIncome, category }) {
  //set setExpenses esta en fromexpense y le seata tru si le setearon una nueva expense
  // entonces expenses pasa a true le dice que actualice a la funcincion getExpenses y renderiza con la data actualizada
  const { expenses } = useContext(DataContext);
  const [categories, setCategories] = useState([]);
  const [dataExpenses, setDataExpenses] = useState([]);

  useEffect(() => {
    controllerBudget.getCategoriesIncome().then(({ data }) => {
      setCategories(data.data);
    });
  }, []);
  useEffect(() => {
    controllerBudget.getAllExpenses().then(({ data }) => {
      setDataExpenses(data.data);
    });
  }, [expenses]);
  //   console.log(categories, "categorieas");
  //   console.log(category, "category id");
  //   console.log(dataExpenses, "dataExpenses");
  let totalExpenses = 0;
  if (dataExpenses) {
    dataExpenses.map((expense) => {
      totalExpenses += expense.amount;
    });
  }
  console.log(totalExpenses, "totalExpenses");

  const percentageIncome = ((totalExpenses * 100) / fixedIncome).toFixed(2);
  return (
    <div className="col-md-10 w-100 pl-0 ">
      <div className="row ">
        <div className=" col-lg-4 m-auto">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div className="card l-bg-cherry" id="cardHome">
              <div className="card-statistic-3 p-2 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className=" d-flex ">
                  <h5 className="card-title ">Gastos totales</h5>
                  <h5 className="text-right  mb-3 ml-auto ">
                    $ {totalExpenses}
                  </h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h5 className="d-flex align-items-center mb-0"></h5>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      {percentageIncome} % <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-3 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${percentageIncome}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col-lg-4 m-auto">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div className="card l-bg-green-dark" id="cardHome">
              <div className="card-statistic-3 p-2 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className=" d-flex ">
                  <h5 className="card-title ">Ingreso fijo</h5>
                  <h5 className="text-right  mb-3 ml-auto ">$ {fixedIncome}</h5>
                </div>
                <div className=" d-flex ">
                  <span className="card-title ">Categoría</span>
                  <span className="text-right  mb-2 ml-auto ">
                    {categories
                      ? categories.map((categ) =>
                          categ.id == category ? categ.category : ""
                        )
                      : ""}
                  </span>
                </div>
                <div className="row  mb-2 d-flex"></div>
                <div
                  className="mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col-lg-4 m-auto">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div className="card" id="cardHome">
              <div className="card-statistic-3 p-2 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className=" d-flex ">
                  <h5 className="card-title ">...</h5>
                  <h5 className="text-right  mb-3 ml-auto ">$ {}</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">{}</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      ... <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-3 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `2%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
