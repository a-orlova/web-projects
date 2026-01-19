let guestPointsEl = document.getElementById("guest-points")
let homePointsEl = document.getElementById("home-points")

let homeNameEl = document.getElementById("home")
let guestNameEl = document.getElementById("guest")

let countHomeEl = 0
let countGuestEl = 0

function newGame() {
    countHomeEl = 0
    homePointsEl.textContent = countHomeEl
    countGuestEl = 0
    guestPointsEl.textContent = countGuestEl

    homeNameEl.textContent = "HOME"
    homeNameEl.style.color = "white"

    guestNameEl.textContent = "GUEST"
    guestNameEl.style.color = "white"
}

function addPoints(button) {
    if (button.closest(".home-buttons")) {
        countHomeEl+= Number(button.textContent)
        homePointsEl.textContent = countHomeEl

        if (countHomeEl >= 10) {
            homeNameEl.textContent = "WINNER"
            homeNameEl.style.color = "red"
        }
    }
    else {
        countGuestEl+= Number(button.textContent)
        guestPointsEl.textContent = countGuestEl

        if (countGuestEl >= 10) {
            guestNameEl.textContent = "WINNER"
            guestNameEl.style.color = "red"
        }
    }
}
