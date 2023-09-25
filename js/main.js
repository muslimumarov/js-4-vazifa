let elForm = document.querySelector('.form-info');
let elInput = document.querySelector('.form-info__input');
let elSeleсt = document.querySelector('.form-info__select');
let elText = document.querySelector('.text');
let elOption = document.querySelector('.form-info__select-option');
elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var nameInput = elInput.value;  //summa kelyapti
  var nameSeleсt = elSeleсt.value; //kurs
  var total = nameInput / nameSeleсt; //kopaygani
  elText.textContent = total;
});
