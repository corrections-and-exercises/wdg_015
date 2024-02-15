const forms = document.querySelectorAll('form');

forms.forEach((form) =>
  form.addEventListener('submit', (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector('.results');
const keyInput = document.querySelector('.key');
const valueInput = document.querySelector('.value');
const removeInput = document.querySelector('.remove');
const storeBtn = document.querySelector('.store');
const showBtn = document.querySelector('.show');
const clearOneBtn = document.querySelector('.clearOne');
const clearAllBtn = document.querySelector('.clearAll');

// Add your code below
storeBtn.addEventListener('click', () => {
  localStorage.setItem(keyInput.value, valueInput.value);
});

clearOneBtn.addEventListener('click', () => {
  localStorage.removeItem(removeInput.value);
});

clearAllBtn.addEventListener('click', () => {
  localStorage.clear();
});

const showAllLocalStorage = () => {
  document
    .querySelectorAll('.localStorageList')
    .forEach((element) => element.remove());

  const allKeys = Object.keys(localStorage);

  let outputHtml = allKeys.reduce((acc, key) => {
    acc = acc + `<li>${key}: ${localStorage.getItem(key)}</li>`;
    return acc;
  }, '');

  outputHtml = `<ul class="localStorageList" display="inline-block">${outputHtml}</ul><br>`;

  const positionSelect = document.querySelector('.results>hr:last-of-type');
  positionSelect.insertAdjacentHTML('afterend', outputHtml);

  resultsDiv.removeChild(resultsDiv.lastChild);
};

// showBtn.addEventListener('click', () => {
//   //   console.log(localStorage);
//   showAllLocalStorage();
// });

showBtn.addEventListener('click', () => {
  //clear screen
  const displayedItem = document.querySelectorAll('.storedItem');
  if (displayedItem) {
    displayedItem.forEach((el) => el.remove());
  }
  // get data from localstorage
  const data = localStorage;
  const dataKeys = Object.keys(data);
  dataKeys.forEach((key) => {
    const p = document.createElement('p');
    p.setAttribute('class', 'storedItem');
    p.textContent = data[key];
    resultsDiv.appendChild(p);
  });
});
