// Black Jack
// the ace card is worth 11
// the joker, queen, king worth 10


let cards = []

let sum = 0

let hasBlackJack = false
let isAlive = false

let msg = ""
let msgEl = document.getElementById("message-el")
// let sumEl= document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let checkEl = document.getElementById("check")

// Making a player object
player = {
    pName: "Player",
    chips: 0
}

let playerEl = document.getElementById("player-el")

// playerEl.textContent = player.pName + ": $" + player.chips

function renderGame() {
    if (sum <= 20) {
    msg = "Do you want to draw a new card? 😐"
    } else if(sum === 21){
        msg = "Wohoo! You've got Blackjack! 🥳"
        player.chips += 10
        hasBlackJack = true
        playerEl.textContent = player.pName + ": $" + player.chips

    } else {
        msg = "You're out of the game!😭"
        isAlive = false
    }

    if (isAlive === true) {
        playerEl.textContent = player.pName + ": $" + player.chips
    }
  
    // // CASH OUT!
    // console.log(isALive)
    // console.log(hasBlackJack)

    // console.log(msg)
    msgEl.textContent = msg
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }
}

// Returns a  new  card
function newCard() {
       
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum = sum + card

        cards.push(card)
        
        renderGame()

    } else {
        checkEl.textContent = "You must start the game first!!!"
    }
}


function startGame() {
    isAlive = true
    hasBlackJack = false                  // No meaning here, just to understand the working
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    checkEl.textContent = ""

    renderGame()
}


// return random card
function getRandomCard() {
    let rCard = ((Math.floor(Math.random() * 13)) + 1)
    
    if (rCard === 1) {
        return 11
    } else if(rCard > 10){
        return 10
    } else {
        return rCard
    }

}