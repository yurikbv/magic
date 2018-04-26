var getRandomNumber = function (max,min) {
  return Math.floor((min || 0) + Math.random() * max)
};

var setup = document.body.querySelector('.setup');
var setupSimilar = document.body.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var template = document.body.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var similarFragment = document.createDocumentFragment();

var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black','red','blue','yellow','green'];
var wizards = [{
  name: wizardName[getRandomNumber(wizardName.length)] + ' ' + wizardSurname[getRandomNumber(wizardSurname.length)],
  coatColor: coatColor[getRandomNumber(coatColor.length)],
  eyesColor: eyesColor[getRandomNumber(eyesColor.length)]
}, {
  name: wizardName[getRandomNumber(wizardName.length)] + ' ' + wizardSurname[getRandomNumber(wizardSurname.length)],
  coatColor: coatColor[getRandomNumber(coatColor.length)],
  eyesColor: eyesColor[getRandomNumber(eyesColor.length)]
}, {
  name: wizardName[getRandomNumber(wizardName.length)] + ' ' + wizardSurname[getRandomNumber(wizardSurname.length)],
  coatColor: coatColor[getRandomNumber(coatColor.length)],
  eyesColor: eyesColor[getRandomNumber(eyesColor.length)]
}, {
  name: wizardName[getRandomNumber(wizardName.length)] + ' ' + wizardSurname[getRandomNumber(wizardSurname.length)],
  coatColor: coatColor[getRandomNumber(coatColor.length)],
  eyesColor: eyesColor[getRandomNumber(eyesColor.length)]
}];

var renderSimilarWizard = function (wizard) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var renderSimilarWizards = function () {
  for(var i = 0; i < wizards.length; i++){
    similarFragment.appendChild(renderSimilarWizard(wizards[i]))
  }
  return similarFragment;
};

setupSimilarList.appendChild(renderSimilarWizards());
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');



