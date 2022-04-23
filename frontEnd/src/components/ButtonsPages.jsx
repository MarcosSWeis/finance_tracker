export default function ButtonsPages({ setPage, page, totalRowsBd }) {
  const limit = 10;
  const selectNumberPage = [1, 2, 2];
  function handlerPreviousPage() {
    //si la pagina en la que estoy es mayor que uno, entonces si puedo volver hacia atrás
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function handlerOnePage() {
    if (page != 1) {
      setPage(1);
    }
  }
  function handlerTwoPage() {
    if (page != 2) {
      setPage(2);
    }
  }
  function handlerThreePage() {
    if (page != 3 && totalRowsBd > limit * 3) {
      setPage(3);
    }
  }
  function handlerNextPage() {
    setPage(page + 1);
  }
  console.log(totalRowsBd, "totalRowsBd");
  console.log(page, "page*limit");
  return (
    <div className="w-100 mt-5 ">
      <nav aria-label="...">
        <ul class="pagination justify-content-center">
          <li class={`page-item  ${page == 1 ? "disabled" : ""}`}>
            <button
              class="page-link"
              tabindex="-1"
              onClick={handlerPreviousPage}
            >
              Previous
            </button>
          </li>
          <li class="page-item active">
            <button class="page-link" onClick={handlerOnePage}>
              1
            </button>
          </li>
          <li class="page-item ">
            <button class="page-link" onClick={handlerTwoPage}>
              2 <span class="sr-only">(current)</span>
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" onClick={handlerThreePage}>
              3
            </button>
          </li>

          <li
            class={`page-item ${
              !(totalRowsBd > limit * page) ? "disabled" : ""
            }`}
          >
            <button class="page-link" onClick={handlerNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
//   <button type="button" className="btn btn-primary">
//     Previous
//   </button>
//   <button type="button" className="btn btn-primary">
//     Next
//   </button>
