/* The DOMContentLoaded event is fired when the initial HTML document has been 
completely loaded and parsed, without waiting for stylesheets, images, 
and subframes to finish loading. */
document.addEventListener("DOMContentLoaded", function(event) { 
    
    //Exercise 1
    let squares = document.querySelectorAll("#board > div");  //overriding the div in the html with the #board css
    //console.log(squares);
    squares.forEach((sq) => {
        sq.className='square'; //for each square in board grid, applying the square css to the board's grid
        
    }); 

    //Exercise 2
    const WIN_COMBINATIONS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const board = Array.from(document.querySelectorAll('.square'));
    //console.log(board);
    let playerx = true;
    let playero = false;

    
    squares.forEach((sq) => {

        sq.addEventListener("click", function(sq){
            if (playerx && sq.target.textContent == ''){   //sq.target means for the square that is being clicked currently. .textContent is for what is currently in the square
                sq.target.textContent = 'X';
                playerx = false;
                playero = true;
                
            }
            else if (playero && sq.target.textContent == ''){
                sq.target.textContent = 'O';
                playerx = true;
                playero = false;
            }
            
        }); 
    });

    
  })

