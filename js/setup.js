'use strict';

(function () {
  var user = document.querySelector('.setup');
  var usersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var usersSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var colorsCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorsEyes = ['black', 'red', 'blue', 'yellow', 'green'];

  var getRandomNumber = function (array) {
    return Math.floor(Math.random() * array.length);
  };

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

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artefactElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;
  var artefactCells = artefactElement.querySelectorAll('.setup-artifacts-cell');
  shopElement.addEventListener('dragstart',function (event) {
    if(event.target.tagName.toLowerCase() === 'img'){
      draggedItem = event.target;
      artefactCells.forEach(function (item) {
        if(item.innerHTML === ''){
          item.style.outline = '2px dashed red';
        }
      });
      event.dataTransfer.setData('text/plain', event.target.alt);
    }
  });
  artefactElement.addEventListener('dragover', function (event) {
    event.preventDefault();
    return false;
  });
  artefactElement.addEventListener('drop', function (event) {
    event.target.style.backgroundColor = '';
    event.target.appendChild(draggedItem);
    artefactCells.forEach(function (item) {
        item.style.outline = '';
    });
    event.preventDefault();
  });
  artefactElement.addEventListener('dragenter', function (e) {
    e.target.style.backgroundColor = 'yellow';
    e.preventDefault();
  });
  artefactElement.addEventListener('dragleave', function (e) {
    e.target.style.backgroundColor = '';
    e.preventDefault();
  })
})();




