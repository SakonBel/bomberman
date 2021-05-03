const field = document.querySelector('.field');


// Create the blocks of field

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
    evenLine[i].className = 'impassable';

}

// Create the corners

const corner =[];

for (i = 0; i < blocks.length; i++) {
    if (i === 0 || i === 1 || i === 13 ||
        i === 14 || i === 15 || i === 29 || 
        i === (blocks.length-1) || 
        i === (blocks.length-2) || 
        i === (blocks.length-14) || 
        i === (blocks.length-15) || 
        i === (blocks.length-16) || 
        i === (blocks.length-30)) {
        // blocks[i].style.backgroundColor = 'lawngreen';
        blocks[i].className = 'corner';
        corner.push(blocks[i]);
    }

    if (i === 0 || i === 14 || 
        i === (blocks.length-1) || 
        i === (blocks.length-15)) {
        blocks[i].className = 'corner start'
    }
}

// Initailize bricks

const remainBlocks = blocks.filter(block => block.className.includes('block'));

const createBricks = () => {

    for (i = 0; i < 100; i++) {
        let randomBrick = (Math.floor(Math.random() * (remainBlocks.length)));
        remainBlocks[randomBrick].className = 'brick';
        remainBlocks[randomBrick].style.backgroundColor = 'darkgray';
        remainBlocks[randomBrick].style.border = '1px dimgray solid';
        remainBlocks.splice(randomBrick, 1);
    }
};

createBricks();

// Initialize the character

const charHitbox = document.createElement('div');
charHitbox.className = 'char-hitbox';
charHitbox.style.width = '4vh';
charHitbox.style.height = '4vh';
charHitbox.style.backgroundColor = 'black';
field.appendChild(charHitbox);


// Spawn the character

const charSpawn = () => {
    let spawnPoint = Math.floor(Math.random() * 4);

    switch (spawnPoint) {
        case 0:
            charHitbox.style.top = '1vh';
            charHitbox.style.left = '1vh';
            break;
        case 1:
            charHitbox.style.top = '1vh';
            charHitbox.style.right = '1vh';
            break;
        case 2:
            charHitbox.style.bottom = '1vh';
            charHitbox.style.left = '1vh';
            break;
        default:
            charHitbox.style.bottom = '1vh';
            charHitbox.style.right = '1vh';
            break;
    }
}

charSpawn();

// Move the character

const character = document.querySelector('.char-hitbox');
const gameArea = document.querySelector('body');
// gameArea.addEventListener('keydown', (e) => {

//     let up = character.style.bottom
    
//     switch (e.key) {
//         case 'ArrowUp': 
//             character.style.top = '';
//             if (character.style.bottom === '') {
//                 character.style.bottom = '1vh'
//             } else {
//                 let upValue = Number(up.slice(0, (up.length - 3)))++;
//                 up = upValue.toString()+'vh';
//             }
//             break;
//         case 'ArrowDown':
//             console.log(e.key)            
//             break;
//         case 'ArrowLeft':
//             console.log(e.key)            
//             break;
//         case 'ArrowRight':
//             console.log(e.key)            
//             break;
//         default:
//             break;
//     }
// })

console.log(charHitbox.style.width.length);
