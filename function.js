// Function expression
// let sayHi = function () {
//     alert('Hello world')
// };

// sayHi();
// alert(sayHi);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
    alert("You Agreed")
}

function showCancel() {
    alert("You canceled the execution")
}

ask("Do you agree? ", showOk, showCancel)
