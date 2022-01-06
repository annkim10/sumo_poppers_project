// export const canvasBkgd = document.getElementById("canvas-bkgd")
// canvasBkgd.width = 1000
// canvasBkgd.width = 1000
// export const ctxBkgd = canvasBkgd.getContext("2d")

export const canvas = document.getElementById("canvas-ring")
canvas.width = 500;
canvas.height = 500;
console.log(canvas)
// export const canvasPos = canvas.getBoundingClientRect()
// console.log(canvasPos)
// canvas.style.background = "pink"
export const ctx = canvas.getContext("2d")
// console.log("width")
// console.log(canvas.width)
export const mouse = {
    x: canvas.width / 2,
    y: canvas.width / 2,
    click: false
}

export const scoreCanvas = document.getElementById("score")
scoreCanvas.width = 40
scoreCanvas.height = 40
export const scoreCtx = scoreCanvas.getContext("2d")


