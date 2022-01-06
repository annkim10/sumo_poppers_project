// import Canvas from "./canvas"

import { canvas, canvasPos, ctx, mouse } from "./utils"

let score = 0
let gameFrame = 0

// canvas.addEventListener("mousedown", function (e) {
//     mouse.x = e.x - canvasPos.left
//     // console.log("this is canvasPos left")
//     // console.log(canvasPos.left)
//     mouse.y = e.y - canvasPos.top
//     mouse.click = true
//     // console.log(mouse)
// })

// canvas.addEventListener("mouseup", function (e) {
//     mouse.click = false
//     // console.log(mouse)
// })

export default class Player {
    constructor() {
        this.x = (canvas.width / 2) - canvasPos.left
        this.y = canvas.height / 2
        console.log("player")
        console.log(this.x, this.y)
        console.log(mouse)
        this.radius = 10
        this.angle = 0
        this.frameX = 0
        this.frameY = 0
        this.frame = 0
        this.width = 50
        this.height = 50
    }

    update() {
        // console.log("beginning of update")
        // console.log(mouse)
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y

        // console.log("distances")
        // console.log(dx, dy)
        if (mouse.x != this.x) {
            (this.x -= dx)
            // console.log(mouse)
            // console.log(this.x)
            //dx/300
        }
        if (mouse.y != this.y) {
            (this.y -= dy)
        }
    }

    draw() {
        if (mouse.click) {
            ctx.lineWidth = 0.2;
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
        }
        ctx.fillStyle = "blue"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fillRect(this.x, this.y, this.radius, 10)
    }


}





