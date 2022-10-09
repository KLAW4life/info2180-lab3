/* The DOMContentLoaded event is fired when the initial HTML document has been 
completely loaded and parsed, without waiting for stylesheets, images, 
and subframes to finish loading. */
document.addEventListener("DOMContentLoaded", function(event) { 
    
    let squares = document.querySelectorAll("#board > div");  //overriding the div in the html with the #board css
    squares.forEach((e) => {e.className='square'}); //applying the square css to the board's grid

    
    
  })

