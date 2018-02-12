'use strict';

var user = document.querySelector('.setup');
user.classList.remove('hidden');

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
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < userSettings.length; i++){
  fragment.appendChild(renderWizard(userSettings[i]));
}
similarListElement.appendChild(fragment);
console.log(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');