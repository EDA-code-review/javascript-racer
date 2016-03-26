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

document.addEventListener('keyup', choosePlayer)


function choosePlayer() {
    if (event.which === 90) {
        updatePlayerPosition(player1, p1)
        p1++
        if (player1[tracklength].className === "active") {
            tinaWins.innerHTML = "Uhhhhhhh Tina wins! You get all the butts."
            document.removeEventListener('keyup', choosePlayer)
        }
    }
    else if (event.which === 77) {
        updatePlayerPosition(player2, p2)
        p2++
        if (player2[tracklength].className === "active") {
            bobWins.innerHTML = "Oh my god! Bob wins!"
            document.removeEventListener('keyup', choosePlayer)
        }
    }
}

function updatePlayerPosition(player, p) {
    if (player[p].className === "active") {
        player[p].className = ""
        player[p + 1].className = "active"
    }
}

})
