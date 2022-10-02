let allflag = localStorage.getItem("flag") || "false";
if (allflag == "false") {
  //   console.log("flea");
  document.getElementById("viewallstudent").style.display = "none";
} else {
  document.getElementById("viewallstudent").style.display = "block";
}

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
document.querySelector("#closetheedit").addEventListener("click", close);
function close() {
  let idd = document.getElementById("editdivv");
  idd.id = "editdiv";
}

let all = JSON.parse(localStorage.getItem("AllInstructorandStudent")) || [];
display(all);

function display(allstudent) {
  document.querySelector("tbody").innerHTML = "";
  console.log("kAR");

  allstudent.map(function (el, inn) {
    if (el.flag == "false") {
      let row = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = el.name;
      let td2 = document.createElement("td");
      td2.innerText = el.batch;
      let td3 = document.createElement("td");
      td3.innerText = el.course;
      let td4 = document.createElement("td");
      td4.innerText = el.unit;
      let td5 = document.createElement("td");
      td5.innerText = el.email;
      let td6 = document.createElement("td");
      td6.innerText = el.password;
      let td7 = document.createElement("td");
      td7.innerText = "REMOVE";
      td7.style.background = "red";
      td7.style.color = "white";
      td7.style.cursor = "pointer";

      td7.addEventListener("click", function () {
        removeit(inn);
      });
      let td8 = document.createElement("td");
      td8.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      td8.style.cursor = "pointer";
      td8.addEventListener("click", function () {
        edit_it(inn);
      });
      // td7.innerHTML.addEventListener("click", function () {
      //   edit_it(inn);
      // });
      row.append(td1, td2, td3, td4, td5, td6, td7, td8);
      document.querySelector("tbody").append(row);
    }
  });
  // displayqtyofallstudent(allstudent);
}

function removeit(inn) {
  all.splice(inn, 1);
  display(all);
  localStorage.setItem("AllInstructorandStudent", JSON.stringify(all));
}

function edit_it(index) {
  let targetarray = event.target.parentNode.childNodes;
  console.log(targetarray);

  let idd = document.getElementById("editdiv");
  idd.id = "editdivv";

  // document.querySelector("#main").style.opacity = "0.1";

  // console.log(targetarray[0]);
  let name = (document.getElementById("name").value = targetarray[0].innerHTML);
  let unit = (document.getElementById("unit").value = targetarray[3].innerHTML);
  1;
  let course = (document.getElementById("courcename").value =
    targetarray[2].innerHTML);
  let Batch = (document.getElementById("Batch").value =
    targetarray[1].innerHTML);
  let email = (document.getElementById("email").value =
    targetarray[4].innerHTML);
  useremail = targetarray[4].innerHTML;

  let password = (document.getElementById("password").value =
    targetarray[5].innerHTML);
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
    all.map(function (el, idd) {
      if (el.email == useremail) {
        el.name = namee;
        el.course = coursee;
        el.unit = unitt;
        el.batch = Batchh;
        el.email = email;
        el.password = password;
      }
    });

    // console.log(allstudent);
    display(all);
    localStorage.setItem("AllInstructorandStudent", JSON.stringify(all));
    let idd = document.getElementById("editdivv");
    idd.id = "editdiv";
  } else if (allflag == "true") {
    all.map(function (el, idd) {
      if (el.email == useremail) {
        el.name = namee;
        el.email = email;
        el.password = password;
      }
    });

    // console.log(allstudent);
    display(all);
    localStorage.setItem("AllInstructorandStudent", JSON.stringify(all));
    let idd = document.getElementById("editdivv");
    idd.id = "editdiv";
  }
});
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
