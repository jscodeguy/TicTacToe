
//this variable will be the reset button
const resetButton = document.querySelector('#reset')
//this variable will be the board
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
const playText = document.querySelector('#playerTurn')
//this array will hold the values of my game board tiles
const tileArray =[tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9]
let square = 0
let playerTurn ='X'
let gameEnd = false
playText.innerText= `The current turn is ${playerTurn}`



// A user should be able to click on different squares to make a move.
    //this loop will change the tile to an x or an o
    
// Every click will alternate between marking an X and O
//we need to have a set of conditions that determine whos turn it is
//we need to have a function that will mark the tile with an x and an o


// for(i=0; i<tileArray.length;i++) { 
//     tileArray[i].onclick = function () {
//     const markTile = document.createElement('p')
//     markTile.innerText = 'X'
//     tileArray[i].appendChild(markTile)

//     if (tileArray[i].firstChild){
//         tileArray[i].removeChild(tileArray[i].firstChild)
//     }
// }}

    const changeTile1 = () => {
        const markTile = document.getElementById('tile1') 
    if (playerTurn ==='X' && markTile.innerText == '1' && gameEnd === false) {
           markTile.innerText = 'X'
            playerTurn = 'O'
            }
            else if (playerTurn ==='O' && markTile.innerText == '1' && gameEnd === false) {
            markTile.innerText = 'O'
            playerTurn = 'X'
            }
            playText.innerText= `The current turn is ${playerTurn}`
}
    const changeTile2 = () => {
        const markTile = document.getElementById('tile2') 
        if (playerTurn ==='X' && markTile.innerText == '2' && gameEnd === false) {
                markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '2' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
            }
    
    
    const changeTile3 = () => { 
        const markTile = document.getElementById('tile3') 
        if (playerTurn ==='X' && markTile.innerText == '3' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '3' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
            }
    
    const changeTile4 = () => {
        const markTile = document.getElementById('tile4') 
        if (playerTurn ==='X' && markTile.innerText == '4' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '4' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
    }
    
    
    const changeTile5 = () => {
        const markTile = document.getElementById('tile5') 
        if (playerTurn ==='X' && markTile.innerText == '5' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '5' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
    }
    
    
    const changeTile6 = () => {
        const markTile = document.getElementById('tile6') 
        if (playerTurn ==='X' && markTile.innerText == '6' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '6' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
    }
    
    
    const changeTile7 = () => {
        const markTile = document.getElementById('tile7') 
        if (playerTurn ==='X' && markTile.innerText == '7' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '7' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
    }
    
    
    const changeTile8 = () => {
        const markTile = document.getElementById('tile8') 
        if (playerTurn ==='X' && markTile.innerText == '8' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '8' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
    }
    
    
    const changeTile9 = () => {
        const markTile = document.getElementById('tile9') 
        if (playerTurn ==='X' && markTile.innerText == '9' && gameEnd === false) {
               markTile.innerText = 'X'
                playerTurn = 'O'
                }
                else if (playerTurn ==='O' && markTile.innerText == '9' && gameEnd === false) {
                markTile.innerText = 'O'
                playerTurn = 'X'
                }
                playText.innerText= `The current turn is ${playerTurn}`
    }
    


    
    
    
    
    

// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
    //this function will reset the board
const reset = () => {
    window.location.reload()
}
resetButton.addEventListener('click', reset)
// Display a message to indicate which turn is about to be played.
    //this function will declare the winner in an alert
const winMessage = () => {
const winAlert = document.createElement('h2')
resetButton.appendChild(winAlert)
winAlert.innerText = `${playerTurn} has won the game!`
console.log(winAlert)
gameEnd = true
//tile2.removeEventListener('click',changeTile2)
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
