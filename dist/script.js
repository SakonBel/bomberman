// const path = document.querySelector('.playground');
const field = document.querySelector('.field');


// Create the block of field

blocks = [];

for (i = 0; i < (15 * 15); i++) {
    let block = document.createElement('div');
    if ((i + 1) % 30 > 15 || (i + 1) % 30 === 0) {
        block.className = 'block even-line';
    } else {
        block.className = 'block odd-line';
    }
    block.style.backgroundColor = 'green';
    block.style.width = '6vh';
    block.style.height = '6vh';
    blocks.push(block);
    field.appendChild(block);
}


// Style the grass field

const even = document.querySelectorAll('.block:nth-child(even)');

for (i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = 'forestgreen';
}


// Add the unpassable block

const evenLine = document.querySelectorAll('.even-line:nth-child(odd)');

for (i = 0; i < evenLine.length; i++) {
    evenLine[i].style.backgroundColor = 'silver';
    evenLine[i].style.border = '2px solid black';
}




// console.log(blocks);

// const pathArea = (path.width * path.height);
// const fieldArea = (field.width * field.height);


// for (i = 0; i < path.length; i++) {

// }