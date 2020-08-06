Technologies used: 
HTML, CSS, JS with JQUERY and hosted on Github Pages.

Approach taken : 
The aim was to recreate the classic game of Minesweeper. However, despite making a similar Grid. I was having hard time with defining the end of grid. I ended up using position (top, left) properties of the object to recreate the effect. 

The code on load generates 100 DIV's each of 32 pixels on a grid. Each game starts with random squares being assigned as mines (max 10). Each mine is random and is unique.

The algorithm then checks the neighboring boxes of clicked DIV with "ON CLICK" event listener and pushes a value corresponding to the location of mine found and pushes it into an array.  This value is then displayed on the square.

The game ends with either the player clicking on a mine or the player clicks all squares without clicking on any mine. 

The code uses 3 modals : 
 *-* First one is to ask user / player for input of name.
 *-* The second is to display the game instructions.
 *-* The third is to display the top score.

The local storage is used to set the player name and win time as objects. The same data is retrieved and store in the third modal for the player to refer. This data is sorted in descending order. 

URL to live site : https://ameshalexk.github.io/minesweeper/

Unsolved Problems detected so far: 

*-* Recursion is missing as I feel the implementation could have been better. Hope to incorporate this feature in future.

*-* The game does not work on first load in any browser. However, on second load everything is fine.   

Instructions for MineSweeper
Quick Start:
You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) you win.
Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.
To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click (or hover with the mouse and press Space).
Detailed Instructions:
A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges.
To remove a bomb marker from a square, point at it and right-click again.
If you mark a bomb incorrectly, you will have to correct the mistake before you can win. Incorrect bomb marking doesn't kill you, but it can lead to mistakes which do.
You don't have to mark all the bombs to win; you just need to open all non-bomb squares.
Right-clicking twice will give you a question mark symbol which can be useful if you are unsure about a square