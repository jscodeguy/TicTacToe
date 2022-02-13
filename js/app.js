
//this variable will be the reset button
const resetButton = document.querySelector('#reset')
//this variable will be the board and cells
const board = document.querySelector('.parent')
//these variables will house tiles and allow us to make our win condition and log which tiles have an x or o in them
const tile1 = document.querySelector('#tile1')
const tile2 = document.querySelector('#tile2')
const tile3 = document.querySelector('#tile3')
const tile4 = document.querySelector('#tile4')
const tile5 = document.querySelector('#tile5')
const tile6 = document.querySelector('#tile6')
const tile7 = document.querySelector('#tile7')
const tile8 = document.querySelector('#tile8')
const tile9 = document.querySelector('#tile9')



// A user should be able to click on different squares to make a move.
    //this function will change the tile to an x or an o
const changeTile1 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile1.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile2 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile2.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile3 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile3.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile4 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile4.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile5 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile5.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile6 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile6.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile7 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile7.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile8 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile8.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}
const changeTile9 = () => {
// const markTile = document.createElement('h2')
// markTile.classList.add('text')
//     tile9.appendChild(markTile)
//     markTile.innerText = 'X'
console.log('this works like a charm')
}

    //this function will be used to make the players move
const move = () => {

    //we need to add an event listener to select a tile
    
    //we need to mark the tile with an x or o
    


}
   
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
    //this function will reset the board
const reset = () => {

}
document.addEventListener('click', reset)
// Display a message to indicate which turn is about to be played.
    //this function will declare the winner in an alert
const winMessage = () => {

}
//this event will add the event listeners required to change the tiles every time the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    tile1.addEventListener('click',changeTile1)
    tile2.addEventListener('click',changeTile2)
    tile3.addEventListener('click',changeTile3)
    tile4.addEventListener('click',changeTile4)
    tile5.addEventListener('click',changeTile5)
    tile6.addEventListener('click',changeTile6)
    tile7.addEventListener('click',changeTile7)
    tile8.addEventListener('click',changeTile8)
    tile9.addEventListener('click',changeTile9)
})

// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.