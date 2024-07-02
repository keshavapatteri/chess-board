document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.getElementById('chessboard');
    const rows = 8;
    const cols = 8;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            
            chessboard.appendChild(square);
        }
    }
});
