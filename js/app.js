
var container = document.getElementsByClassName('hide-students')[0];
var select = document.getElementById('select');
var options =document.getElementsByClassName('option')
 select.onchange = function () {
   if(container.classList.contains('first')){
     console.log('hola')
     container.classList.remove('hide-students');
     container.classList.add('show-students');
   } else if (container.classList.contains('second')) {
     container.classList.remove('hide-students');
     container.classList.add('show-students');
   }

}
console.log(select)



/*
console.log(options);
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener('onchange', showStudents)
  console.log(options[i].getAttribute('value'))
}
function showStudents() {
  console.log("hola")
}


-----

console.log('evento')
if (container[0].classList.value=='hide-students') {
   container[0].classList.remove('hide-students');
   container[0].classList.add('show-students');
} else if (container[1].classList.value=='hide-students') {
  container[0].classList.remove('show-students');
  container[0].classList.add('hide-students');
  container[1].classList.remove('hide-students');
  container[1].classList.add('show-students');
}
*/
