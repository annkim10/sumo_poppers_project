import Sumo from "./sumo"
import Player from "./player"
import { audio, canvas, ctx, mouse, scoreCanvas, scoreCtx} from "./utils"

let canvasPos = canvas.getBoundingClientRect()
const ring = document.getElementById("ring-img")
const ringImg = new Image();
ringImg.src = ring.src;

const muteButton = document.getElementById("mute-button")

window.addEventListener("resize", function(e){
    canvasPos = canvas.getBoundingClientRect()
    // console.log(canvasPos)
})

canvas.addEventListener("mousedown", function (e) { //originally "mousedown"
    mouse.x = e.x - canvasPos.left
    // console.log("this is canvasPos")
    // console.log(canvasPos)
    mouse.y = e.y - canvasPos.top
    mouse.click = true
    // console.log(mouse)
})

canvas.addEventListener("mouseup", function (e) {
    mouse.click = false
    // console.log(mouse)
})

// canvas.addEventListener("click", (e) => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.fillRect(e.x - canvasPos.left - 50, e.y - canvasPos.top-50, 100, 100)
//     console.log(mouse)
// })



export default class Game {

    constructor() {
        this.sumosArr = []
        this.gameFrame = 0
        this.score = 0
        this.player = new Player()
        this.sound = audio
        this.sound.src = audio.src
        this.sound.loop = false
    }

    startGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.player.update()
        this.player.draw()
        this.gameFrame++
        this.makeSumos()
        this.drawScore()
        requestAnimationFrame(this.startGame.bind(this))
    }

    beforeStart() {
        let sumo = new Sumo()
        sumo.animation()
    }

    drawScore() {
        scoreCtx.clearRect(0,0, scoreCanvas.width, scoreCanvas.height)
        scoreCtx.fillStyle = "white"
        scoreCtx.fillText(`${this.score}`, 30,30)
        scoreCtx.textAlign = "center"
        scoreCtx.font = '35px Fredoka One'
    }

    makeSumos() {
        if (this.gameFrame % 50 === 0) {
            this.sumosArr.push(new Sumo(this.player, this.gameFrame))
            // console.log(this.sumosArr)
        }

        for (let i = 0; i < this.sumosArr.length; i++ ) {
            this.sumosArr[i].update()
            this.sumosArr[i].draw()
            
            if (this.sumosArr[i].y < 0 - this.sumosArr[i].radius * 2) {
                // this.sumosArr.popped = true
                this.sumosArr.splice(i, 1)
                i--
            } else if (this.sumosArr[i].distance < this.sumosArr[i].radius + this.player.radius) {
                    if (!this.sumosArr[i].popped) {
                        this.score++
            
                        // this.sumosArr[i].popping()
                        this.sumosArr[i].popped = true
                        this.sound.play()
                        // this.binding = this.sumosArr.splice(this, )
                        // setTimeout(this.sumosArr.splice)
                        // this.sumosArr.splice(i, 1)
                        // i--
                      
                        // this.sumosArr[i].popping(this.sumosArr[i])
                        // setTimeout(() => console.log(this.sumosArr[i]), 2000)
                        
                    }
            }
    
            this.sumosArr.filter(sumo => !sumo.popped)
          
        }; 
            // console.log(this.score)
        };

        muteSound() {
            muteButton.addEventListener("click", () => {
                this.sound.muted = true
            }) 
        }

        

    }



