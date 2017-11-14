var container = document.getElementsByClassName('hide-students');
var select = document.getElementById('select');
var options = document.getElementsByClassName('option');
select.addEventListener("change", showStudents);

function showStudents(e) {
  if (select.value == "hidden") {
    container[0].style.display = "none";
    container[1].style.display = "none";
    container[2].style.display = "none";

  } else if (select.value == "fourth-class") {
    container[0].style.display = "block";
    container[1].style.display = "none";
    container[2].style.display = "none";
  } else if (select.value == "fifth-class") {
    container[1].style.display = "block";
    container[0].style.display = "none";
    container[2].style.display = "none";
  } else if (select.value == "sixth-class") {
    container[2].style.display = "block";
    container[0].style.display = "none";
    container[1].style.display = "none";
  }


}
