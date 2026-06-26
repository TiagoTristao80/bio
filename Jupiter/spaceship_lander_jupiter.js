import { init } from './init.js'
import spaceship from './spaceship.js'
import './events.js'

const nave = spaceship.nave

function mainLoop() {
    nave.react() 
    setTimeout(mainLoop, 30);
}

init().then( () => {
    mainLoop()
})