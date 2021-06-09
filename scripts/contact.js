//Animation Input
const inputs = document.querySelectorAll("form .form-control input");
//Ajouter un élément dans le formulaire de contact
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.classList.add("active-input");
    } else if (e.target.value === "") {
      e.target.classList.remove("active-input");
    }
  });
});

//Validation Form
const inpName = document.querySelector(".input-name");
const inpEmail = document.querySelector(".input-email");
const inpTel = document.querySelector(".input-tel");
const regexEmail = /\S+@\S+\.\S+/;
const regexPhoneFr = /^((\+)33|0)[1-9](\d{2}){4}$/;

const checkRegex = (input, regex) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.search(regex) === -1) {
      input.classList.add("alert-input");
    } else if (e.target.value.search(regex) === 0) {
      input.classList.remove("alert-input");
    }
  });
};

checkRegex(inpEmail, regexEmail);
checkRegex(inpTel, regexPhoneFr);

//Ajouter un élément dans le tableau
function ajouter() {
  var myForm = document.forms.TheForm;

  var name = myForm["from_name"].value;
  var email = myForm["from_email"].value;
  var tel = myForm["from_tel"].value;
  var pref = myForm['communication'].value;
  var message = myForm['message'].value;

  var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  if (name != "" && expressionReguliere.test(email)) {
    var table = document.getElementById('table_user');
    table.insertAdjacentHTML("beforeend", "<tr><td>" + name + "</td><td>" + email + "</td><td>" + tel + "</td><td>" + pref + "</td><td>" + message + "</td></tr>");
    bloque_bouton();
  }

}