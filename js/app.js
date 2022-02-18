
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




    const changeTile1 = () => {
    if (playerTurn ==='X' && tile1.innerText == '1' && gameEnd === false) {
        tile1.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile1.innerText == '1' && gameEnd === false) {
        tile1.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    const changeTile2 = () => { 
        if (playerTurn ==='X' && tile2.innerText == '2' && gameEnd === false) {
        tile2.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile2.innerText == '2' && gameEnd === false) {
        tile2.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    
    const changeTile3 = () => { 
        if (playerTurn ==='X' && tile3.innerText == '3' && gameEnd === false) {
        tile3.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile3.innerText == '3' && gameEnd === false) {
        tile3.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    const changeTile4 = () => {
        if (playerTurn ==='X' && tile4.innerText == '4' && gameEnd === false) {
        tile4.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile4.innerText == '4' && gameEnd === false) {
        tile4.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    
    const changeTile5 = () => {
        if (playerTurn ==='X' && tile5.innerText == '5' && gameEnd === false) {
        tile5.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile5.innerText == '5' && gameEnd === false) {
        tile5.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    
    const changeTile6 = () => { 
        if (playerTurn ==='X' && tile6.innerText == '6' && gameEnd === false) {
        tile6.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile6.innerText == '6' && gameEnd === false) {
        tile6.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    
    const changeTile7 = () => { 
        if (playerTurn ==='X' && tile7.innerText == '7' && gameEnd === false) {
        tile7.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile7.innerText == '7' && gameEnd === false) {
        tile7.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    
    const changeTile8 = () => {
        if (playerTurn ==='X' && tile8.innerText == '8' && gameEnd === false) {
        tile8.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile8.innerText == '8' && gameEnd === false) {
         tile8.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    
    
    const changeTile9 = () => {
        if (playerTurn ==='X' && tile9.innerText == '9' && gameEnd === false) {
        tile9.innerText = 'X'
        playerTurn = 'O'
        winCondition()
        }
        else if (playerTurn ==='O' && tile9.innerText == '9' && gameEnd === false) {
        tile9.innerText = 'O'
        playerTurn = 'X'
        }
        playText.innerText= `The current turn is ${playerTurn}`
        winCondition()
        }
    


    
    
    
    
    

// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
    //this function will reset the board
const reset = () => {
    window.location.reload()
    }
// Display a message to indicate which turn is about to be played.
    //this function will declare the winner in an alert
const winMessageX = () => {
    const winAlert = document.createElement('h2')
    resetButton.appendChild(winAlert)
    winAlert.innerText = 'X has won the game!'
    console.log(winAlert)
    gameEnd = true
}
const winMessageO = () => {
    const winAlert = document.createElement('h2')
    resetButton.appendChild(winAlert)
    winAlert.innerText = 'O has won the game!'
    console.log(winAlert)
    gameEnd = true
    }

const winCondition = () => {
    if ( tile1.innerText ==='X'  && tile2.innerText ==='X' && tile3.innerText ==='X' ) {
        winMessageX() }
    else if ( tile1.innerText ==='O'  && tile2.innerText ==='O' && tile3.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile4.innerText ==='X'  && tile5.innerText ==='X' && tile6.innerText ==='X' ) {
        console.log('win condition X')
        winMessageX()
    }
    else if ( tile4.innerText ==='O'  && tile5.innerText ==='O' && tile6.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile7.innerText ==='X'  && tile8.innerText ==='X' && tile9.innerText ==='X' ) {
        console.log('win condition O')
        winMessageX()
    }
    else if ( tile7.innerText ==='O'  && tile8.innerText ==='O' && tile9.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile1.innerText ==='X'  && tile4.innerText ==='X' && tile7.innerText ==='X' ) {
        console.log('win condition O')
        winMessageX()
    }
    else if ( tile1.innerText ==='O'  && tile4.innerText ==='O' && tile7.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile2.innerText ==='X'  && tile5.innerText ==='X' && tile8.innerText ==='X' ) {
        console.log('win condition O')
        winMessageX()
    }
    else if ( tile2.innerText ==='O'  && tile5.innerText ==='O' && tile8.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile3.innerText ==='X'  && tile6.innerText ==='X' && tile9.innerText ==='X' ) {
        console.log('win condition O')
        winMessageX()
    }
    else if ( tile3.innerText ==='O'  && tile6.innerText ==='O' && tile9.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile1.innerText ==='X'  && tile5.innerText ==='X' && tile9.innerText ==='X' ) {
        console.log('win condition O')
        winMessageX()
    }
    else if ( tile1.innerText ==='O'  && tile5.innerText ==='O' && tile9.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
    else if ( tile3.innerText ==='X'  && tile5.innerText ==='X' && tile7.innerText ==='X' ) {
        console.log('win condition O')
        winMessageX()
    }
    else if ( tile3.innerText ==='O'  && tile5.innerText ==='O' && tile7.innerText ==='O' ) {
        console.log('win condition O')
        winMessageO()
    }
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
    resetButton.addEventListener('click', reset)
    })
    

// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
