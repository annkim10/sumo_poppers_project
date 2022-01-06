// import Canvas from "./canvas"

import { canvas,  ctx, mouse } from "./utils"


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
        this.x = canvas.width
        this.y = canvas.height/3
        console.log("player")
        console.log(this.x, this.y)
        console.log(mouse)
        this.radius = 5
    }

    update() {
        // console.log("beginning of update")
        // console.log(mouse)
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y

        // console.log("distances")
        // console.log(dx, dy)
        if (mouse.x !== this.x) {
            (this.x -= (dx/5))
            // console.log(mouse)
            // console.log(this.x)
            //dx/300
        }
        if (mouse.y !== this.y) {
            (this.y -= dy/5)
        }
    }

    draw() {
        if (mouse.click) {
            ctx.fillStyle = "#bd0028"
            ctx.lineWidth = 0.2;
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
        }
        ctx.fillStyle = "#bd0028"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fillRect(this.x, this.y, this.radius, 0)
    }


}





