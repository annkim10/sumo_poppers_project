import Player from "./player";
import Utils from "./utils"
import { canvas, canvasPos, ctx, mouse } from "./utils"

const animation = document.getElementById("animation")
const sumoImg = new Image();
sumoImg.src = animation.src;

const popped = document.getElementById("popped-animation")
const poppedSumo = new Image();
poppedSumo.src = popped.src

export default class Sumo {
    constructor(player) {
        this.player = player
        // (console.log(player))
        this.x = Math.random() * canvas.width
        // console.log(this.x)
        this.y = canvas.height + 100
        this.radius = 20
        this.speed = Math.random() * 1 + 1
        this.distance
        this.popped = false
    }

    update() {
        this.y -= this.speed
        let dx = this.x - this.player.x
        let dy = this.y - this.player.y
        this.distance = Math.sqrt(dx * dy + dy * dy)
    }

    draw() {
        ctx.drawImage(sumoImg, this.x, this.y, 100, 100)
    }

}
