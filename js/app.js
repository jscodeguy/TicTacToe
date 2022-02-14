
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
//this array will hold the values of my game board tiles
const tileArray =[tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9]
let square = 0
let playerTurn ='X'


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
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile1.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile1.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile1.appendChild(markO)
            playerTurn = 'X'
    
            }
}
    const changeTile2 = () => {
    const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile2.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile2.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile2.appendChild(markO)
            playerTurn = 'X'
    
            }
    // for(i=0; i<tileArray.length;i++) { 
    //     tileArray[i].onclick = function () {
    //     const markTile = document.createElement('p')
    //     markTile.innerText = 'X'
    //     tileArray[i].appendChild(markTile)

    //     if (tileArray[i].firstChild){
    //         tileArray[i].removeChild(tileArray[i].firstChild)
    //     }
        
        
    //     if (playerTurn ==='X' && playerTurn !== 'O') {
    //         const markTile = document.createElement('p')
    //             markTile.innerText = 'X'
    //             tile2.appendChild(markTile)
    //             playerTurn = 'O'
    //             }
    //             else {
    //             markTile.innerText = 'O'
    //             tile2.appendChild(markTile)
    //             playerTurn = 'X'
        
    //             }
    // }
    // }
    }
    
    
    const changeTile3 = () => {
    // const markTile = document.createElement('p')
    //     markTile.innerText = 'X'
    //     tile3.appendChild(markTile)
    // for(i=0; i<tileArray.length;i++) { 
    //     tileArray[i].onclick = function () {
    //     const markTile = document.createElement('p')
    //     markTile.innerText = 'X'
    //     tileArray[i].appendChild(markTile)
        
        
    const markTile = document.createElement('p')
    markTile.innerText = 'X'
    tile3.appendChild(markTile)
if (playerTurn ==='X' && playerTurn !== 'O') {
    //const markTile = document.createElement('p')
       // markTile.innerText = 'X'
        //tile3.appendChild(markTile)
        playerTurn = 'O'
        }
        else {
        const markO = document.createElement('p')
        markO.innerText = 'O'
        tile3.appendChild(markO)
        playerTurn = 'X'

        }
}
   // }
   // }
//}
    
    
    const changeTile4 = () => {
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile4.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile4.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile4.appendChild(markO)
            playerTurn = 'X'
    
            }
    }
    
    
    const changeTile5 = () => {
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile5.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile5.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile5.appendChild(markO)
            playerTurn = 'X'
    
            }
    }
    
    
    const changeTile6 = () => {
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile6.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile6.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile6.appendChild(markO)
            playerTurn = 'X'
    
            }
    }
    
    
    const changeTile7 = () => {
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile7.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile7.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile7.appendChild(markO)
            playerTurn = 'X'
    
            }
    }
    
    
    const changeTile8 = () => {
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile8.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile8.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile8.appendChild(markO)
            playerTurn = 'X'
    
            }
    }
    
    
    const changeTile9 = () => {
        const markTile = document.createElement('p')
        markTile.innerText = 'X'
        tile9.appendChild(markTile)
    if (playerTurn ==='X' && playerTurn !== 'O') {
        //const markTile = document.createElement('p')
           // markTile.innerText = 'X'
            //tile9.appendChild(markTile)
            playerTurn = 'O'
            }
            else {
            const markO = document.createElement('p')
            markO.innerText = 'O'
            tile9.appendChild(markO)
            playerTurn = 'X'
    
            }
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