import $ from "jquery";
import { controllerBudget } from "../services/request/budget";
let errors = {};
export function validationFormQueryExpenseDate(
  {
    initialYear,
    initialMonths,
    initialDays,
    endYear,
    endMonths,
    endDays,
    errorInitialYear,
    errorInitialMonths,
    errorInitialDays,
    errorEndYear,
    errorEndMonths,
    errorEndDays,
    ulErrors,
  },
  optionsQueryDate,
  setQueryParameterDate
  //validar que la fecha de entrada es menor ala de la salida
) {
  if (optionsQueryDate.initialYear == 0) {
    errors.initialYear = "Debe ingresar un año de ingreso";
  } else if (
    !(optionsQueryDate.initialYear >= 2022) &&
    !(optionsQueryDate.initialYear <= 2040)
  ) {
    errors.initialYear = "Debe ingresar un año valido de ingreso";
  } else {
    if (errors.initialYear) {
      delete errors.initialYear;
      $(errorInitialYear).text("");
      //list-unstyled  clase de boostrap , elimina los circulos del ul
      $(errorInitialYear).addClass("list-unstyled");
      $(initialYear).removeClass("is-invalid");
    }
  }

  if (optionsQueryDate.initialMonths == 0) {
    errors.initialMonths = "Debe  ingresar un mes de ingreso";
  } else if (
    !(optionsQueryDate.initialMonths >= 1) &&
    !(optionsQueryDate.initialMonths <= 12)
  ) {
    errors.initialMonths = "Debe  ingresar un mes valido de ingreso";
  } else {
    if (errors.initialMonths) {
      delete errors.initialMonths;
      $(errorInitialMonths).text("");
      $(errorInitialMonths).addClass("list-unstyled");
      $(initialMonths).removeClass("is-invalid");
    }
  }

  if (optionsQueryDate.initialDays == 0) {
    errors.initialDays = "Debe  ingresar un dia de ingreso";
  } else if (
    !(optionsQueryDate.initialDays >= 1) &&
    !(optionsQueryDate.initialDays <= 31)
  ) {
    errors.initialDays = "Debe  ingresar un dia valido de ingreso";
  } else {
    if (errors.initialDays) {
      delete errors.initialDays;
      $(errorInitialDays).text("");
      $(errorInitialDays).addClass("list-unstyled");
      $(initialDays).removeClass("is-invalid");
    }
  }

  if (optionsQueryDate.endYear == 0) {
    errors.endYear = "Debe  ingresar un año final";
  } else if (
    !(optionsQueryDate.endYear >= 2022) &&
    !(optionsQueryDate.endYear <= 2040)
  ) {
    errors.endYear = "Debe  ingresar un año valido final";
  } else {
    if (errors.endYear) {
      delete errors.endYear;
      $(errorEndYear).text("");
      $(errorEndYear).addClass("list-unstyled");
      $(endYear).removeClass("is-invalid");
    }
  }

  if (optionsQueryDate.endMonths == 0) {
    errors.endMonths = "Debe  ingresar un mes final";
  } else if (
    !(optionsQueryDate.endMonths >= 1) &&
    !(optionsQueryDate.endMonths <= 12)
  ) {
    errors.endMonths = "Debe  ingresar un mes valido final";
  } else {
    if (errors.endMonths) {
      delete errors.endMonths;
      $(errorEndMonths).text("");
      $(errorEndMonths).addClass("list-unstyled");
      $(endMonths).removeClass("is-invalid");
    }
  }

  if (optionsQueryDate.endDays == 0) {
    errors.endDays = "Debe  ingresar un dia final";
  } else if (
    !(optionsQueryDate.endDays >= 1) &&
    !(optionsQueryDate.endDays <= 31)
  ) {
    errors.endDays = "Debe  ingresar un dia valido final";
  } else {
    if (errors.endDays) {
      delete errors.endDays;
      $(errorEndDays).text("");
      $(errorEndDays).addClass("list-unstyled");
      $(endDays).removeClass("is-invalid");
    }
  }
  //validacion de fechas
  //   if (!(initialYear < endYear)) {
  //     errors.orderDateYear = "El año de inicio debe ser menor que el año final";
  //   } else {
  //     if (errors.orderDateYear) {
  //       delete errors.orderDateYear;
  //       //list-unstyled  clase de boostrap , elimina los circulos del ul
  //       $(errorInitialYear).addClass("list-unstyled");
  //       $(initialYear).removeClass("is-invalid");
  //       $(errorInitialYear).addClass("list-unstyled");
  //       $(errorInitialYear).text("");
  //       $(endYear).removeClass("is-invalid");
  //     }
  //     if (initialMonths < endMonths) {
  //       errors.orderDateMonths =
  //         "El año de inicio debe ser menor que el año final";
  //     } else if ((initialMonths = endMonths)) {
  //       if (errors.orderDateMonths) {
  //         delete errors.orderDateMonths;
  //         $(errorInitialMonths).addClass("list-unstyled");

  //         $(initialMonths).removeClass("is-invalid");
  //         $(errorEndMonths).addClass("list-unstyled");
  //         $(errorEndMonths).text("");
  //         $(endMonths).removeClass("is-invalid");
  //       }
  //       if (initialDays < endDays) {
  //         errors.orderDateDay =
  //           "El año de inicio debe ser menor que el año final";
  //       } else {
  //         if (errors.orderDateDay) {
  //           delete errors.orderDateDay;
  //           $(errorInitialDays).addClass("list-unstyled");
  //           $(initialDays).removeClass("is-invalid");
  //           $(errorEndDays).addClass("list-unstyled");
  //           $(errorEndDays).text("");
  //           $(endDays).removeClass("is-invalid");
  //         }
  //       }
  //     }
  //   }

  console.log(errors);
  if (Object.keys(errors).length === 0) {
    console.log("no hay errores");
    const initialDate = `${optionsQueryDate.initialYear}-${
      optionsQueryDate.initialMonths < 10
        ? `0${optionsQueryDate.initialMonths}`
        : optionsQueryDate.initialMonths
    }-${
      optionsQueryDate.initialDays < 10
        ? `0${optionsQueryDate.initialDays}`
        : optionsQueryDate.initialDays
    }`;
    const endDate = `${optionsQueryDate.endYear}-${
      optionsQueryDate.endMonths < 10
        ? `0${optionsQueryDate.endMonths}`
        : optionsQueryDate.endMonths
    }-${
      optionsQueryDate.endDays < 10
        ? `0${optionsQueryDate.endDays}`
        : optionsQueryDate.endDays
    }`;
    const objQueryDate = {
      initialDate: initialDate,
      endDate: endDate,
    };
    setQueryParameterDate(objQueryDate);
  } else {
    $(ulErrors).removeClass("none");
    if (errors.initialYear) {
      $(errorInitialYear).text(errors.initialYear);
      $(errorInitialYear).removeClass("list-unstyled");
      $(initialYear).addClass("is-invalid");
    }
    if (errors.initialMonths) {
      $(errorInitialMonths).text(errors.initialMonths);
      $(errorInitialMonths).removeClass("list-unstyled");
      $(initialMonths).addClass("is-invalid");
    }
    if (errors.initialDays) {
      $(errorInitialDays).text(errors.initialDays);
      $(errorInitialDays).removeClass("list-unstyled");
      $(initialDays).addClass("is-invalid");
    }
    if (errors.endYear) {
      $(errorEndYear).text(errors.endYear);
      $(errorEndYear).removeClass("list-unstyled");
      $(endYear).addClass("is-invalid");
    }
    if (errors.endMonths) {
      $(errorEndMonths).text(errors.endMonths);
      $(errorEndMonths).removeClass("list-unstyled");
      $(endMonths).addClass("is-invalid");
    }
    if (errors.endDays) {
      $(errorEndDays).text(errors.endDays);
      $(errorEndDays).removeClass("list-unstyled");
      $(endDays).addClass("is-invalid");
    }

    if (errors.orderDateYear) {
      $(errorInitialYear).removeClass("list-unstyled");
      $(errorInitialYear).removeClass("list-unstyled");
      $(initialYear).addClass("is-invalid");
      $(endYear).addClass("is-invalid");
      $(errorInitialYear).text(errors.orderDateYear);
    }

    if (errors.orderDateMonths) {
      $(errorInitialMonths).removeClass("list-unstyled");
      $(errorEndMonths).removeClass("list-unstyled");
      $(initialMonths).addClass("is-invalid");
      $(endMonths).addClass("is-invalid");
      $(errorEndMonths).text(errors.orderDateMonths);
    }
    if (errors.orderDateDay) {
      $(errorInitialDays).removeClass("list-unstyled");
      $(errorEndDays).removeClass("list-unstyled");
      $(initialDays).addClass("is-invalid");
      $(endDays).addClass("is-invalid");
      $(errorEndDays).text(errors.orderDateDay);
    }
  }
}
