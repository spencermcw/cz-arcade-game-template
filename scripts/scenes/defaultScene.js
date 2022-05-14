import { Text, Container } from "pixi.js"
import GameScene from '../lib/gameScene'

export default class DefaultScene extends GameScene {
    // This will get called only once when the scene is first instanciated.
    constructor(context) {
        super(context)
    }

    load() {
        this.container = new Container()
        // Create Text object
        const myText = new Text(`
            CryptoZoo Arcade Game Template!
            Made with PIXI.js

            This Scene: scripts/scenes/defaultScene.js
        `, { align: "center" })
        // Save reference so we can update later if necessary
        this.displayObjects.myText = myText
        // Add to scene's container
        this.container.addChild(myText)
        // Adjust myText's position
        this.container.position.set(
            this.app.screen.width/2 - myText.width/2,
            this.app.screen.height/2 - myText.height/2
        )
    }
}
