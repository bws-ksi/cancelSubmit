'use strict';
// объявление переменных
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
const email = document.querySelector('.email_input').value;
const genderRadio = document.getElementsByName('gender');

function checkFields(event) {
  event.preventDefault();
  //проверка


  console.log(userData);
  localStorage.setItem(`${userData.lName}`, JSON.stringify(userData));
}
let choiceGender;
for (let i = 0; i < genderRadio.length; i++) {  
  if (genderRadio[i].checked) {
    choiceGender = genderRadio[i].value;
  }
  console.log(choiceGender);
}
  

// создание массива
class User {
  constructor(fName, lName, age, email) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.email = email;
  }
}
const userData = new User();

// сбор данных по полям
const collectionInput = Array.from(document.getElementsByClassName('input_field'));

collectionInput.forEach((elem) => {
  userData[elem.name] = elem.value;
  userData.gender = choiceGender;
})
console.log(userData);
// событие на "отправить"
submit.addEventListener('click', checkFields);

// событие на "сбросить"
reset.addEventListener('click', document.getElementById('form').reset())