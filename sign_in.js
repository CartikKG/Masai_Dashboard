const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});
////
document.querySelector("form").addEventListener("submit", checkdata);
function checkdata() {
  event.preventDefault();
  console.log("KATTT");
  let newemail = document.getElementById("email").value;
  let newpasswords = document.getElementById("id_password").value;
  let Alldata =
    JSON.parse(localStorage.getItem("AllInstructorandStudent")) || [];
  let flag = "false";
  let loginflag = false;
  let useremail = "";
  Alldata.forEach((element) => {
    if (element.email == newemail && element.password == newpasswords) {
      loginflag = true;
      useremail = element.email;
      if (element.flag == "true") {
        flag = "true";
      } else if (element.flag == "false") {
        flag = "false";
      }
    }
  });
  if (flag == "true") {
    localStorage.setItem("flag", "true");
  } else if (flag == "false") {
    localStorage.setItem("flag", "false");
  }

  if (loginflag) {
    localStorage.setItem("useremail", useremail);
    alert("Login Succesfully");
    window.open("./Students_Daily_Schedule.html");
  } else if (!loginflag) {
    alert("Wrong Credentials ");
  }
}
