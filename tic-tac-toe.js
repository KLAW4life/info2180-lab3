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
    const win_combinations = [
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
                sq.target.className += ' X'
                playerx = false;
                playero = true;
                winner_check();
                
            }
            else if (playero && sq.target.textContent == ''){
                sq.target.textContent = 'O';
                sq.target.className += ' O'
                playerx = true;
                playero = false;
                winner_check();
            }
            
        }); 
    });

    //Exercise 3
    squares.forEach((sq) =>{
        sq.addEventListener("mouseover", function(sq){
            sq.target.className += " hover";
        })

        sq.addEventListener("mouseout", function(sq){
            sq.target.classList.remove("hover");
        })
    });

    //Exercise 4
    
    function winner_check(){
        let win = false;
        let winner = null;
        let box0, box1, box2;

        win_combinations.forEach((combo) =>{  //checking the boxes for their values of either 'X' or 'O'
            

            if (board[combo[0]].hasChildNodes()){
                box0 = board[combo[0]].childNodes[0].textContent
            }
            else {
                box0 = "";
            }

            if (board[combo[1]].hasChildNodes()){
                box1 = board[combo[1]].childNodes[0].textContent
            }
            else {
                box1 = "";
            }

            if (board[combo[2]].hasChildNodes()){
                box2 = board[combo[2]].childNodes[0].textContent
            }
            else {
                box2 = "";
            }

            if (box0 != "" && box1 != "" && box2 != ""){
                //console.log(box0,box1,box2);

                if (box0 == box1 && box1 == box2){
                    win = true;
                    //console.log(win);

                    let winner = document.getElementById('status');
                    winner.textContent = `Congradulations! ${box1} is the Winner!`
                    winner.classList += "you-won";

                }
            }


        });
        //console.log(winner);
        return winner;
    }

    //Exercise 5
    let btn = document.getElementsByClassName("btn")[0];
    btn.addEventListener("click", game_reset);

    function game_reset(){
        document.querySelectorAll('.square').forEach((e) => {
            e.innerHTML = "";
            location.reload();
        });
    }
    
  })
