import globals from "./globals.js"
import spaceship, { statuses } from "./spaceship.js"

const nave = spaceship.nave
const canvas = globals.canvas
const keysPressed = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
}

function updateStatus() {
    if (keysPressed.ArrowUp) {
        nave.setStatus(statuses.UP)
        return
    }
    if (keysPressed.ArrowLeft) {
        nave.setStatus(statuses.RIGHT)
        return
    }
    if (keysPressed.ArrowRight) {
        nave.setStatus(statuses.LEFT)
        return
    }
    nave.setStatus(statuses.NORMAL)
}

document.addEventListener("keydown", (ev) => {
    switch (ev.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowRight':
            keysPressed[ev.key] = true
            updateStatus()
            break
    }
})

document.addEventListener("keyup", (ev) => {
    switch (ev.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowRight':
            keysPressed[ev.key] = false
            updateStatus()
            break
    }
})