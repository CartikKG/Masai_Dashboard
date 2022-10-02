let alllecture = JSON.parse(localStorage.getItem("alllecture")) || [];
display(alllecture);

let allflag = localStorage.getItem("flag") || "false";
if (allflag == "false") {
  console.log("flea");
  document.querySelector("form").style.display = "none";
  document.getElementById("viewallstudent").style.display = "none";
} else {
  document.querySelector("form").style.display = "block";
  document.getElementById("viewallstudent").style.display = "block";
  document.querySelector("form").addEventListener("submit", displayandsetdata);
}
// let alllecture = JSON.parse(localStorage.getItem("alllecture")) || [];
// display(alllecture);
let Alldata = JSON.parse(localStorage.getItem("AllInstructorandStudent")) || [];
let email = localStorage.getItem("useremail");

Alldata.map((el) => {
  if (el.email == email) {
    if (el.flag == "true") {
      document.getElementById("buttons").innerHTML = `${el.name}`;
    } else {
      document.getElementById("buttons").innerHTML = `${el.name} ${el.batch}`;
    }
  }
});

function Lecture(a, b, c, d) {
  this.name = a;
  this.instuctor = b;
  this.time = c;
  this.date = d;
}
document.querySelector("form").addEventListener("submit", displayandsetdata);
function displayandsetdata() {
  event.preventDefault();
  console.log("ok");
  let name = document.getElementById("Lecture-name").value;
  let instuctor = document.getElementById("Instuctor-name").value;
  let time = document.getElementById("time").value;
  let date = document.getElementById("date").value;
  let alllecture = JSON.parse(localStorage.getItem("alllecture")) || [];
  let newlec = new Lecture(name, instuctor, time, date);
  alllecture.push(newlec);
  localStorage.setItem("alllecture", JSON.stringify(alllecture));
  display(alllecture);
}

function display(data) {
  document.getElementById("dataoflecture").innerHTML = "";
  data.map((el, en) => {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${el.name} -${el.date}</h3>
      <h4>${el.instuctor} Scheduled General at ${el.date} - ${el.time}</h4>`;

    document.getElementById("dataoflecture").append(li);
  });
}

document.getElementById("buttons").addEventListener("click", Changeui);
let flag = false;
function Changeui() {
  let pop = document.getElementById("showdivafterclick");
  if (flag) {
    pop.style.display = "none";
    flag = false;
  } else if (!flag) {
    pop.style.display = "block";
    flag = true;
  }
}

let useremail = "";
function editdivvisible() {
  let idd = document.getElementById("editdiv");
  idd.id = "editdivv";
  let Alldata =
    JSON.parse(localStorage.getItem("AllInstructorandStudent")) || [];
  let email = localStorage.getItem("useremail");
  useremail = email;
  Alldata.map((el) => {
    if (el.email == email && el.flag == "false") {
      document.getElementById("name").value = el.name;
      document.getElementById("email").value = el.email;
      document.getElementById("Batch").value = el.batch;
      document.getElementById("courcename").value = el.course;
      document.getElementById("unit").value = el.unit;
      document.getElementById("password").value = el.password;
    } else if (el.email == email && el.flag == "true") {
      document.getElementById("name").value = el.name;
      document.getElementById("email").value = el.email;
      document.getElementById("Batch").style.display = "none";
      document.getElementById("courcename").style.display = "none";
      document.getElementById("unit").style.display = "none";
      document.getElementById("password").value = el.password;
    }
  });
}
document.getElementById("submit").addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let namee = document.getElementById("name").value;
  let unitt = document.getElementById("unit").value;
  let coursee = document.getElementById("courcename").value;
  let Batchh = document.getElementById("Batch").value;
  let password = document.getElementById("password").value;

  let allflag = localStorage.getItem("flag") || "false";
  if (allflag == "false") {
    Alldata.map(function (el, idd) {
      if (el.email == useremail) {
        el.name = namee;
        el.course = coursee;
        el.unit = unitt;
        el.batch = Batchh;
        el.email = email;
        el.password = password;
      }
    });
    //  display(all);
    localStorage.setItem("AllInstructorandStudent", JSON.stringify(Alldata));
    let idd = document.getElementById("editdivv");
    idd.id = "editdiv";
  } else if (allflag == "true") {
    Alldata.map(function (el, idd) {
      if (el.email == useremail) {
        el.name = namee;
        el.email = email;
        el.password = password;
      }
    });

    // console.log(allstudent);
    // display(all);
    localStorage.setItem("AllInstructorandStudent", JSON.stringify(Alldata));
    let idd = document.getElementById("editdivv");
    idd.id = "editdiv";
  }
});

document.querySelector("#closetheedit").addEventListener("click", close);
function close() {
  let idd = document.getElementById("editdivv");
  idd.id = "editdiv";
  // document.querySelector("#main").style.opacity = "";
}

function Logout() {
  // localStorage.getItem("flag");
  window.open("./sign_in_masai.html", "_self");
}
let flagfornav = true;
function Changenav() {
  // document.getElementById("NAVBARUL").classList.toggle("changewholenav");
  document.getElementById("MOBILECLICK").classList.toggle("MOBILECLICKDISPLAY");
  if (flag) {
    document.querySelector("nav ul").style.display = "none";
    // do
    flag = false;
  } else {
    document.querySelector("nav ul").style.display = "block";
    flag = true;
  }
}
