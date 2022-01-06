
import Game from "./app/game"
// import Sumo from "./app/sumo";
import "./main.css";

const startButton = document.getElementById("start-button")


window.onload = function() {
    var context = new AudioContext()
    var game = new Game()

    startButton.addEventListener("click", () => {
      
        game.startGame()
        context.resume().then(() => {
            console.log('Playback resumed successfully')
        })
    })

    game.muteSound()

    game.beforeStart()
    

}





