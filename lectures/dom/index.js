// console.log('hello world');

const headline = document.querySelector('h1');
// console.log(headline);

const gallery = document.getElementById('gallery');
// console.log(gallery);

const subtitle = document.querySelector('h2');
// console.log(subtitle);

const secondImage = document.querySelector('[data-id="2"]');
// console.log(secondImage);

const newsLetterForm = document.getElementById('newsletter-form');
// console.log(newsLetterForm);

// headline.style.color = 'green';

// subtitle.hidden = true;

// secondImage.remove();

// HTML COLLECTION
const cards = document.getElementsByClassName('card');
console.log(cards);
// NODELIST
const images = document.querySelectorAll('img');
console.log(images);

// console.log(
//   (cards[0].childNodes[1].src =
//     'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYXJ0fGVufDB8fDB8fHww')
// );

// create an element
const newCard = document.createElement('div');
newCard.classList.add('card');
const newImg = document.createElement('img');
const newPara = document.createElement('p');
newImg.dataset.id = cards.length + 1;
newImg.src =
  'https://upload.wikimedia.org/wikipedia/commons/1/16/Heroic_Roses.JPG';
newPara.textContent = 'Lorem Ipsum Lalala';

newCard.appendChild(newImg);
newCard.appendChild(newPara);
gallery.appendChild(newCard);

console.log(newCard);

for (card of cards) {
  card.style.backgroundColor = 'lightseagreen';
}

images.forEach(
  (img) =>
    (img.src =
      'https://images.unsplash.com/photo-1501423206691-be43ae609491?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYXJ0fGVufDB8fDB8fHww')
);

const colorArray = ['green', 'red', 'blue', 'yellow', 'purple'];

headline.onclick = () => {
  headline.style.color =
    colorArray[Math.floor(Math.random() * colorArray.length)];
  headline.style.fontSize = '50px';
};

// headline.onclick = () => {
//   headline.style.fontSize = '50px';
// };

// subtitle.onclick = () => (subtitle.style.color = 'purple');

// subtitle.addEventListener('click', () => {
//   subtitle.style.textTransform = 'uppercase';
// });

// subtitle.addEventListener('click', () => {
//   images.forEach((img) => img.remove());
// });

// images.forEach((img) =>
//   img.addEventListener('click', () => {
//     img.classList.toggle('active');
//   })
// );

newsLetterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target.elements[1].value);
  console.log(newsLetterForm.elements[1].value);
  console.log(event.target.elements.email.value);
});

gallery.addEventListener('click', (e) => {
  //   console.log('target', e.target);
  //   console.log('currentTarget', e.currentTarget);
  if (e.target.matches('img')) {
    console.log(e.target.dataset.id);
  }
});
