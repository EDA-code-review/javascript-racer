//getting the tracks for each player
var lane1 = document.getElementById("lane1")
var lane2 = document.getElementById("lane2")

var player1 = lane1.querySelectorAll('td')
var player2 = lane2.querySelectorAll('td')

//initialising player positions on track
var p1 = 0
var p2 = 0

document.addEventListener('keyup', updatePlayerPosition)

function updatePlayerPosition() {
    if (event.which === 90) {
        if (player1[p1 + 1].className === "finish") {
            player1[p1].className = ""
            player1[p1 + 1].className = "active"
            alert("Ugggghh Tina wins!")

        }
        if (player1[p1].className === "active") {
            player1[p1].className = ""
            player1[p1 + 1].className = "active"
        }
        p1++
    }

    else if (event.which === 77) {
        if (player2[p2 + 1].className === "finish") {
            player2[p2].className = ""
            player2[p2 + 1].className = "active"
            alert("Oh my god, Bob wins!")

        }
        if (player2[p2].className === "active") {
            player2[p2].className = ""
            player2[p2 + 1].className = "active"
        }
        p2++
    }
}
