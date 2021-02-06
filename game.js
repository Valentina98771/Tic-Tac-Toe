let grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
let player = 'X', next = 0;

window.onload = function() {
    let button = document.getElementsByTagName("div")[0];
    for (let i = 0; i < 3; i++) {
       for (let j = 0; j < 3; ++j) {
        let ok = document.createElement("button");
        ok.id= '' + i + j;
          ok.addEventListener("click", function() {
               myFunction(i, j);
           }); 
           button.appendChild(ok)
        }
        document.getElementById("print").innerHTML = "Turn X is turn";
    }
};

function equals(a, b, c) {
    return a == b && b == c && a != ' ';
}

function myFunction(i, j) {
    grid[i][j] = player;
    if (player == 'X') {
        player = '0';
        next = 1;
    } else {
        player = 'X';
        next = 0;
    }
    
    document.getElementById('' + i + j).innerHTML = grid[i][j];
    let caseEquas = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (grid[i][j] == ' ')
                caseEquas = 1;
        }
    }
    
    let contor = null;
    for (let i = 0; i < 3; ++i) {
        // cases horizontal
        if (equals(grid[i][0], grid[i][1], grid[i][2])) {
            contor = grid[i][0];
        }
        if (equals(grid[0][i], grid[1][i], grid[2][i])) {
            contor = grid[0][i];
        }
        // cases on the diagonal
        if (equals(grid[0][0], grid[1][1], grid[2][2])) {
            contor = grid[0][0];
        }
        if (equals(grid[2][0], grid[1][1],grid[0][2])) {
            contor = grid[2][0];
        }
    }
    if (contor === 'X') {
        alert("Player X win")
        document.getElementById("print").innerHTML = "Player X win";
    }
    else if (contor === '0') {
        alert("Player 0 win")
        document.getElementById("print").innerHTML = "Player 0 win";
    } else if (caseEquas == 0) {
        document.getElementById("print").innerHTML = "Match equals";
    }  
    else {
        if (next == 0) {
            document.getElementById("print").innerHTML = "Turn X is turn";
        } 
        else  {
            document.getElementById("print").innerHTML = "Turn 0 is turn";
        }
    }
} 
