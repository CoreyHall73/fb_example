// Add DOM event listener IOTO manipulate html elements after they have been loaded
// This function will encapsulate all JS logic for the DOM
document.addEventListener('DOMContentLoaded' , () => {

    // Query Selector for Bird Variable
    const bird = document.querySelector('.bird')

    // Query Selector for Game Container
    const gameWindow = document.querySelector('.game-container')

    // Query Selector for Ground
    const ground = document.querySelector('.game-container')

    // To put bird in center of sky by adding distance
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2 // Setting gravity variable

    // Start game function
    function startGame() {
        birdBottom -= gravity; // using gravity variable to move bird div down pixels
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    
    // Setting an interval for gravity logic to be continuous
    let timerId = setInterval(startGame, 20) // 20 miliseconds

    // Jump logic
    function jump() {
        birdBottom += 50 // Adds 50 pixels to variable birdBottom
        bird.style.bottom = birdBottom + 'px' // Adds value of 'birdBottom' in pixels to bottom of bird div when function is invoked
    }
    // Event listener for jump function
    document.addEventListener('keyup', jump) // Says that when a key is unpressed, our jump function will be invoked

})