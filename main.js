/**
 * Author: Spencer McWilliams
 * 
 * Main file for a PIXI.js application
 * Some boilerplate code has been left in but commented out as examples
 * This tutorial is supremely helpful to acclamate to PIXI: https://github.com/kittykatattack/learningPixi
 */

// require('dotenv').config()
import {
    Application,
    utils as PIXIutils
} from 'pixi.js'
// import * as WebFont from 'webfontloader'
import SceneManager from "./scripts/lib/sceneManager"

// Custom Scenes
import DefaultScene from "./scripts/scenes/defaultScene"

// // Web Font Loading
// WebFont.load({
//     custom: {
//         families: ['Ghoulish'],
//         urls: ['./assets/GhoulFriAOE.ttf']
//     }
// })

// Initialize App
// https://pixijs.io/guides/index.html
const app = new Application({
    width: 768,
    height: 1024,
    resolution: 1,
    backgroundColor: '0xAAAAAA',
})
const viewContainer = document.querySelector('#canvas-container')
viewContainer.appendChild(app.view)

// PIXI Initialization Console Log
const type = PIXIutils.isWebGLSupported() ? 'WebGL' : 'canvas'
PIXIutils.sayHello(type)

// Instantiate Scene Manager
const sceneManager = new SceneManager(app)

// PIXI Asset Loading
app.loader
    //.add('some/resource')
    .load((loader, resources) => {
        const context = { app, resources }
        // Add all scenes to the sceneManager
        sceneManager.add('default', new DefaultScene(context))
        start()
    })

// Startup and display first scene
async function start() {
    sceneManager.display('default')
}

// Listen for a message from parent to set the active wallet
// This will be triggered by the CZ Arcade when a wallet is connected
window.addEventListener('message', (e) => {
    const { walletAddress } = e.data
    if (walletAddress) {
        window.walletAddress = walletAddress
    }
})
