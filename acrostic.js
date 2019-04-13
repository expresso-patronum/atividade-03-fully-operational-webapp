console.info('acrostic.js');

document.querySelector('h1').addEventListener('click', function(e) {
    e.target.textContent += '!';
});

const buttonAdd = document.querySelector('button:nth-of-type(1)');

buttonAdd.addEventListener('click', addWords);

function addWords(e) {
    const text = document.querySelector('textarea').value;
    console.info(text);
    // Split and add to a words list:
}

// Necessary code to read the word for acrostic generation
// and to assemble the table cells:
