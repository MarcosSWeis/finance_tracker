import { controllerUser } from "../services/request/users";

let errors = {};

export default function validationRegister(
  {
    firstName,
    lastName,
    errorFirstName,
    errorLastName,
    email,
    errorEmail,
    password,
    errorPassword,
    confirmPassword,
    errorConfirmPassword,
    nickName,
    errorNickName,
    avatar,
    errorAvatar,
  },
  user,
  file,
  formRegisters,
  navigate
) {
  //NOMBRE
  if (user.firstName === "") {
    errors.firstName = "Debe llenar el campo Nombre";
  } else if (user.firstName.length < 3) {
    errors.firstName = "El campo nombre debe tener al menos 3 caracteres";
  } else {
    if (errors.firstName) {
      delete errors.firstName;
      firstName.classList.remove("is-invalid");
      errorFirstName.innerText = "";
    }
  }

  //APELLIDO
  if (user.lastName === "") {
    errors.lastName = "Debe llenar el campo Apellido";
  } else if (user.lastName.length < 3) {
    errors.lastName = "El campo apellido debe tener al menos 3 caracteres";
  } else {
    if (errors.lastName) {
      delete errors.lastName;
      lastName.classList.remove("is-invalid");
      errorLastName.innerText = "";
    }
  }

  // EMAIL;
  const validateEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (user.email === "") {
    errors.email = "Debe llenar el campo Email";
  } else if (!validateEmail.exec(email.value)) {
    errors.email = "El email debe ser un email valido";
  } else {
    if (errors.email) {
      delete errors.email;
      email.classList.remove("is-invalid");
      errorEmail.innerText = "";
    }
  }

  //PASSWORD
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  if (user.password === "") {
    errors.password = "Debe llenar el campo contraseña";
  } else if (!user.password.match(lowerCaseLetters)) {
    errors.password = "La contraseña debe tener al menos un minúscula";
  } else if (!user.password.match(upperCaseLetters)) {
    errors.password = "La contraseña debe tener al menos un mayúscula";
  } else if (!user.password.match(numbers)) {
    errors.password = "La contraseña debe tener al menos un numero";
  } else if (user.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else {
    if (errors.password) {
      delete errors.password;
      password.classList.remove("is-invalid");
      errorPassword.innerText = "";
    }
  }

  //CONFIRM_PASSWORD
  if (user.confirmPassword === "") {
    errors.confirmPassword = "Debe confirmar su contraseña";
  } else if (!user.confirmPassword.match(lowerCaseLetters)) {
    errors.confirmPassword = "Este campo debe tener al menos un minúscula";
  } else if (!user.confirmPassword.match(upperCaseLetters)) {
    errors.confirmPassword = "Este campo debe tener al menos un mayúscula";
  } else if (!user.confirmPassword.match(numbers)) {
    errors.confirmPassword = "Este campo debe tener al menos un numero";
  } else if (user.confirmPassword.length < 8) {
    errors.confirmPassword = "Este campo debe tener al menos 8 caracteres";
  } else if (user.confirmPassword !== user.password) {
    errors.confirmPassword = "Las contaseñas no coinciden";
  } else {
    if (errors.confirmPassword) {
      delete errors.confirmPassword;
      confirmPassword.classList.remove("is-invalid");
      errorConfirmPassword.innerText = "";
    }
  }

  //NICK_NAME
  if (user.nickName === "") {
    errors.nickName = "Debe Ingresar un apodo";
  } else if (user.nickName.length < 3) {
    console.log(user.nickName < 3, "< 3");
    errors.nickName = "El campo apodo debe tener al menos 3 caracteres";
  } else if (user.nickName.length > 15) {
    errors.nickName = "El campo apodo debe tener menos de 15 caracteres";
  } else {
    if (errors.nickName) {
      delete errors.nickName;
      nickName.classList.remove("is-invalid");
      errorNickName.innerText = "";
    }
  }

  //AVATAR
  const extensionAcepte = ["image/gif", "image/jpg", "image/png", "image/jpeg"];
  if (file) {
    if (!extensionAcepte.includes(file[0].type)) {
      errors.avatar =
        "Solo puede subir un archivo en los siguientes formatos jpg, png, gif ";
    } else {
      if (errors.avatar) {
        delete errors.avatar;
        errorAvatar.innerText = "";
      }
    }
  }
  if (Object.keys(errors) == 0) {
    const formData = new FormData(formRegisters);
    console.log(formData, " form fata regiter");
    controllerUser.register(formData).then(({ data }) => {
      console.log(data);
      if (data.status) {
        navigate("/");
      }
    });
  } else {
    if (errors.firstName) {
      firstName.classList.add("is-invalid");
      errorFirstName.innerText = errors.firstName;
    }
    if (errors.lastName) {
      lastName.classList.add("is-invalid");
      errorLastName.innerText = errors.lastName;
    }
    if (errors.email) {
      email.classList.add("is-invalid");
      errorEmail.innerText = errors.email;
    }
    if (errors.password) {
      password.classList.add("is-invalid");
      errorPassword.innerText = errors.password;
    }
    if (errors.confirmPassword) {
      confirmPassword.classList.add("is-invalid");
      errorConfirmPassword.innerText = errors.confirmPassword;
    }
    if (errors.nickName) {
      nickName.classList.add("is-invalid");
      errorNickName.innerText = errors.nickName;
    }
    if (errors.avatar) {
      avatar.classList.add("is-invalid");
      errorAvatar.innerText = errors.avatar;
    }
  }
}
