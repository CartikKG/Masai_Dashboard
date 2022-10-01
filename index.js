const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

function DataCreateforStudent(a, b, c, d, e, f) {
  this.name = a;
  this.batch = b;
  this.unit = c;
  this.course = d;
  this.email = e;
  this.password = f;
  this.flag = "false";
}
function DataCreateforadmin(a, b, c) {
  this.name = a;
  this.email = b;
  this.password = c;
  this.flag = "true";
}

document.querySelector("form").addEventListener("submit", collectdata);

function collectdata() {
  console.log("afsgasg");
  event.preventDefault();
  let name = document.getElementById("name").value || "";
  let batch = document.getElementById("Batch").value;
  let unit = document.getElementById("unit").value || "";
  let course = document.getElementById("courcename").value || "";
  let email = document.getElementById("email").value || "";
  let password = document.getElementById("id_password").value || "";
  let who = document.getElementById("who_i_am").value || "";
  if (who == "Admit" || batch == "" || unit == "" || course == "") {
    let newInstructor = new DataCreateforadmin(name, email, password);
    let AllInstructor =
      JSON.parse(localStorage.getItem("AllInstructorandStudent")) || [];
    AllInstructor.push(newInstructor);
    localStorage.setItem(
      "AllInstructorandStudent",
      JSON.stringify(AllInstructor)
    );
  } else if (who == "Student") {
    let newStudent = new DataCreateforStudent(
      name,
      batch,
      unit,
      course,
      email,
      password
    );
    let AllStudent =
      JSON.parse(localStorage.getItem("AllInstructorandStudent")) || [];
    AllStudent.push(newStudent);
    localStorage.setItem("AllInstructorandStudent", JSON.stringify(AllStudent));
  }
  window.open("./sign_in_masai.html", "_self");
}
