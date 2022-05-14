import Scene from "./scene";

// Scene extension as parent for all scenes within game.
// Setup resources/plugins that should be available on all scenes.
// This may include a state, PIXI resources, etc.
export default class GameScene extends Scene {
    constructor(context) {
        super(context)
    }
}
