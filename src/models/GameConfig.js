export class GameConfig {
    constructor({config}) {
        this.gravity = config.gravity;
        this.horizontalSpeed = config.horizontalSpeed;
        this.jumpSpeed = config.jumpSpeed;
        this.basePosition = config.basePosition;
        this.updateMs = config.updateMs;
    }
}