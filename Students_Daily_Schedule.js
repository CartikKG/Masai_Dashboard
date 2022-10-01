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
let alllecture = JSON.parse(localStorage.getItem("alllecture")) || [];
display(alllecture);

let allflag = localStorage.getItem("flag") || "false";
if (allflag == "false") {
  //   console.log("flea");
  document.getElementById("viewallstudent").style.display = "none";
} else {
  document.getElementById("viewallstudent").style.display = "block";
}

document.getElementById("buttons").addEventListener("click", Changeui);
let flag = false;
function Changeui() {
  // console.log("IK");
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

// this.name = a;
// this.instuctor = b;
// this.time = c;
// this.date = d;
function display(data) {
  document.getElementById("displaydata").innerHTML = "";
  data.map((el) => {
    let li = document.createElement("li");
    li.innerHTML = ` <div class="sideforcolor">
      <div>
        <i class="fa-solid fa-calendar"></i> ${el.time}<br />
        LECTURE
      </div>
      <div>
        <h2>${el.name}-${el.date}</h2>
        <h4>${el.instuctor} starting at ${el.time}</h4>
        <div>
          <span>General</span>
          <span>Live</span>
        </div>
      </div>
    </div>
    <div>Details ></div>
      `;
    document.getElementById("displaydata").append(li);
  });
}
function Logout() {
  // localStorage.getItem("flag");
  window.open("./sign_in_masai.html", "_self");
}
