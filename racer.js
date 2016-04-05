document.addEventListener('DOMContentLoaded', function() {

//getting the tracks for each player
var lane1 = document.getElementById("lane1")
var lane2 = document.getElementById("lane2")
//get a length from the user to make track
var tracklength = prompt("How far do you want to race? 3-10?")

//build track
for (var j = 0; j < tracklength; j++) {
    lane1.appendChild(document.createElement('td'))
    lane2.appendChild(document.createElement('td'))
}

//initialise each player to a track
var player1 = lane1.querySelectorAll('td')
var player2 = lane2.querySelectorAll('td')

//insert finish line
player1[tracklength].className = "finish"
player2[tracklength].className = 'finish'

//initialise player positions on track
var p1 = 0
var p2 = 0

var tinaWins = document.getElementById('tina_wins')
var bobWins = document.getElementById('bob_wins')

var button = document.getElementById('restart')

document.addEventListener('keyup', choosePlayer)

// >>> function name not entirely clear. this is an event handler by the looks. could be "inputHandler"? 
function choosePlayer() {
// <<<<
    if (event.which === 90) {
        updatePlayerPosition(player1, p1)
        p1++
        if (player1[tracklength].className === "active") {
            tinaWins.className = ''
            endGame()

        }
    }
    else if (event.which === 77) {
        updatePlayerPosition(player2, p2)
        p2++
        // >>>> this code is used twice - looks like you could pull this out into another function
        if (player2[tracklength].className === "active") {
            bobWins.className = ''
            endGame()
        }
        // <<<<
    }
}

// nice
function updatePlayerPosition(player, p) {
    if (player[p].className === "active") {
        player[p].className = ""
        player[p + 1].className = "active"
    }
}

function endGame() {
    document.removeEventListener('keyup', choosePlayer)
    button.className = ''
    button.addEventListener('click', restart)
}

function restart() {
    for (var i = 0; i < tracklength; i++) {
        player1[i].className = ''
        player2[i].className = ''
    }
    player1[0].className = 'active'
    player1[tracklength].className = 'finish'
    player2[0].className = 'active'
    player2[tracklength].className = 'finish'
    button.className = 'hidden'
    bobWins.className = 'hidden'
    tinaWins.className = 'hidden'
    document.addEventListener('keyup', choosePlayer)
    p1 = 0;
    p2 = 0;
}
})
