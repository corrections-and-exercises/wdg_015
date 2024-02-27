console.log('hello world');
const div = document.getElementById('book');
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', showDescription);

function showDescription() {
    fetch('https://openlibrary.org/works/OL45804W.json')
        .then((res) => {
            if (!res.ok) throw new Error('Mist!' + res.status);

            return res.json();
        })
        .then((data) => {
            createParagraph(data.description);
        })
        .catch((error) => {
            console.log(error);
        });
}

function createParagraph(content) {
    const newP = document.createElement('p');
    newP.textContent = content;
    book.appendChild(newP);
}
