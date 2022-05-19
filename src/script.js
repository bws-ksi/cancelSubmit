'use strict';
// объявление переменных
const submit = document.querySelector('.submit');
// const reset = document.querySelector('.reset');
const email = document.querySelector('.email_input').value;
// const genderRadio = document.getElementsByName('gender');
const radioInput = document.forms.main.gender;
const allInputFields = document.querySelectorAll('.input');
const pass = document.forms.main.pass.value;
const confirmPass = document.forms.main.confirm_pass.value;
console.log(allInputFields);


console.log(radioInput);
const collectionInput = Array.from(document.getElementsByClassName('input_field'));
class User {
  constructor(fName, lName, age, email) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.email = email;
  }
}
const userData = new User();
//============================================================
//============================================================
function checkFields() {
  event.preventDefault();
  // проверяю есть ли пустые поля в .input и RadioInput (проверяю каждый элемент)
  //
  //проверка
allInputFields.forEach((input) => {
  if(input.value === '') {
    input.parentNode.classList.add('error')
  } else {input.parentNode.classList.remove('error')}
})
radioInput.forEach((input) => {
  if(!input.checked) {
    input.parentNode.classList.add('error')
  } else {input.parentNode.classList.remove('error')}
}) 
  //
  //
  //
  //
  //проверка электронной почты
  //
  // проверка пароля
  //
  //когда все верно указано выполняется функция collectToSend

  collectToSend();
  
}


function collectToSend(event) {
  
  let choiceGender;

  for (let i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      choiceGender = radioInput[i].value;
    }
  }


  // for (let i = 0; i < genderRadio.length; i++) {
  //   if (genderRadio[i].checked) {
  //     choiceGender = genderRadio[i].value;
  //   }
  // }
  collectionInput.forEach((elem) => {
    userData[elem.name] = elem.value;
    userData.gender = choiceGender;
  })
  // console.log(userData);
  localStorage.setItem(`${userData.lName}`, JSON.stringify(userData));
  // document.getElementById('form').reset()
}

function validateEmail(email){
  const regex =  /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/i
  return regex.test(String(email))
}
function comparisonPasswords (pass, confirmPass) {
  if(String(pass) === String(confirmPass)) {
    return true;
  } return false;
}


// console.log(userData);
// событие на "отправить"
submit.addEventListener('click', checkFields);

// событие на "сбросить"
// reset.addEventListener('click', document.getElementById('form').reset())




