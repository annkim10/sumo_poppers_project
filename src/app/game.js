import Sumo from "./sumo"
import Player from "./player"
// // import "./main.css";
import { canvas, canvasPos, ctx, mouse} from "./utils"


const ring = document.getElementById("ring-img")
const ringImg = new Image();
ringImg.src = ring.src;

// let score = 0
// let gameFrame = 0

canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.x - canvasPos.left
    console.log("this is canvasPos")
    console.log(canvasPos)
    mouse.y = e.y - canvasPos.top
    mouse.click = true
    console.log(mouse)
})

canvas.addEventListener("mouseup", function (e) {
    mouse.click = false
    // console.log(mouse)
})

export default class Game {

    constructor() {
        this.sumosArr = []
        this.gameFrame = 0
        this.score = 0
        this.player = new Player()
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

    drawScore() {
        ctx.fillStyle = "#bd0028"
        ctx.fillText(`${this.score} popped!`, 35, 60)
        ctx.font = '18px Comfortaa'
    }

    makeSumos() {
        if (this.gameFrame % 50 === 0) {
            this.sumosArr.push(new Sumo(this.player))
            // console.log(this.sumosArr)
        }
        
        for (let i = 0; i < this.sumosArr.length; i++ ) {
            this.sumosArr[i].update()
            this.sumosArr[i].draw()
            if (this.sumosArr[i].y < 0 - this.sumosArr[i].radius * 2) {
                this.sumosArr.splice(i, 1)
                i--
            } else if (this.sumosArr[i].distance < this.sumosArr[i].radius + this.player.radius) {
                    if (!this.sumosArr[i].popped) {
                        this.score++
                        this.sumosArr[i].popped = true
                        this.sumosArr.splice(i, 1)
                        i--
                    }

            }
            //
        };
           
            // console.log(this.score)
        };



    }



