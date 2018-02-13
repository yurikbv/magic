'use strict';

var user = document.querySelector('.setup');

var usersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var usersSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorsCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsEyes = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

var userSettings = [
  {
    name: usersNames[getRandomNumber(usersNames)] + ' ' + usersSurname[getRandomNumber(usersSurname)],
    coatColor: colorsCoat[getRandomNumber(colorsCoat)],
    eyesColor: colorsEyes[getRandomNumber(colorsEyes)]
  },
  {
    name: usersNames[getRandomNumber(usersNames)] + ' ' + usersSurname[getRandomNumber(usersSurname)],
    coatColor: colorsCoat[getRandomNumber(colorsCoat)],
    eyesColor: colorsEyes[getRandomNumber(colorsEyes)]
  },
  {
    name: usersNames[getRandomNumber(usersNames)] + ' ' + usersSurname[getRandomNumber(usersSurname)],
    coatColor: colorsCoat[getRandomNumber(colorsCoat)],
    eyesColor: colorsEyes[getRandomNumber(colorsEyes)]
  },
  {
    name: usersNames[getRandomNumber(usersNames)] + ' ' + usersSurname[getRandomNumber(usersSurname)],
    coatColor: colorsCoat[getRandomNumber(colorsCoat)],
    eyesColor: colorsEyes[getRandomNumber(colorsEyes)]
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}
var fragment = document.createDocumentFragment();
for (var i = 0; i < userSettings.length; i++){
  fragment.appendChild(renderWizard(userSettings[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = user.querySelector('.setup-user-name');
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

function popupEscPress(e) {
  if(e.keyCode === ESC_KEYCODE) {
    closePopUpSetup()
  }
}
function openPopUpSetup() {
  user.classList.remove('hidden');
  document.addEventListener('keydown',popupEscPress);
}
function closePopUpSetup() {
  user.classList.add('hidden');
  document.removeEventListener('keydown',popupEscPress);
}
setupOpen.addEventListener('click', openPopUpSetup);
setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE){
    openPopUpSetup();
  }
});
setupClose.addEventListener('click', closePopUpSetup);
setupClose.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE){
    closePopUpSetup();
  }
});
function inputUserFocus() {
  setupClose.removeEventListener('click',closePopUpSetup);
  document.removeEventListener('keydown',popupEscPress);
}
function inputUserBlur() {
  setupClose.addEventListener('click',closePopUpSetup);
  document.addEventListener('keydown',popupEscPress);
}
userNameInput.addEventListener('focus',inputUserFocus);
userNameInput.addEventListener('blur',inputUserBlur);

var myWizard = user.querySelector('.setup-wizard');
var myWizardCoat = myWizard.querySelector('.wizard-coat');
var myWizardEyes = myWizard.querySelector('.wizard-eyes');
var myWizardFireball = user.querySelector('.setup-fireball-wrap');
var colorsFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
myWizardCoat.addEventListener('click',function () {
  myWizardCoat.style.fill = colorsCoat[getRandomNumber(colorsCoat)]
});
myWizardEyes.addEventListener('click',function () {
  myWizardEyes.style.fill = colorsEyes[getRandomNumber(colorsEyes)]
});
myWizardFireball.addEventListener('click',function () {
  myWizardFireball.style.backgroundColor = colorsFireball[getRandomNumber(colorsFireball)]
});





