import { canvas, ctx } from "./utils"

const animation = document.getElementById("animation")
const sumoImg = new Image();
sumoImg.src = animation.src;

const popped = document.getElementById("popped-animation")
const poppedSumo = new Image();
poppedSumo.src = popped.src

const frames = document.getElementById("frames")
const sumoFrames = new Image();
sumoFrames.src = frames.src

export default class Sumo {
    constructor(player, gameFrame) {
        this.player = player
        // (console.log(player))
        this.x = Math.random() * canvas.width
        // console.log(this.x)
        this.y = Math.random() * canvas.width
        this.radius = 10
        this.speed = Math.random() * 1 + 1
        this.distance
        this.popped = false
        this.width = 300
        this.height = 300
        this.gameFrame = gameFrame || 0
        this.sumoFrames = []
        this.animationStates = [
            {
                name: 'pop',
                frames: 2

            },
            {
                name: 'unpop',
                frames: 16
            }
        ]
        this.makeFrames()
        console.log(this.sumoFrames)
    }

    update() {
        this.y -= this.speed
        let dx = this.x - this.player.x
        let dy = this.y - this.player.y
        this.distance = Math.sqrt(dx * dy + dy * dy)
    }

    makeFrames() {
        this.animationStates.forEach((state, idx) => {
            let frames = {
                loc: []
            }
            for (let j = 0; j < 16; j++) {
                let posX = j * this.width;
                let posY = idx * 300;
                frames.loc.push({ x: posX, y: posY })
            }
            this.sumoFrames[state.name] = frames;
        })
    }

    draw() {
        ctx.fillStyle = "#bd0028"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
        ctx.fillRect(this.x, this.y, this.radius, 0)
        ctx.drawImage(sumoImg, this.x-40, this.y-44, 80, 80)
        // ctx.globalAlpha = 0.5
    }

    // draw() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     let position = Math.floor(this.gameFrame / 7) % this.sumoFrames.unpop.loc.length;
    //     console.log(position)
    //     let frameX = this.width * position;
    //     console.log(this.sumoFrames)
    //     let frameY = this.sumoFrames.unpop.loc[position].y;
    //     console.log(frameX, frameY)
    //     ctx.drawImage(sumoFrames, frameX, frameY, this.width, this.height, this.x, this.y, canvas.width / 4, canvas.height / 4)
    //     ctx.globalAlpha = 0.5
    //     console.log(position)
    //     requestAnimationFrame(this.draw.bind(this))
    // }

    // animation() {
    //     this.draw()
    //     this.frameX += 300
    //     requestAnimationFrame(this.animation.bind(this))
    // }

}
