export class FlapiBird {
	constructor({ jumpSpeed, gravity, basePosition }) {
		this.jumpSpeed = jumpSpeed;
		this.gravity = gravity;
		this.verticalSpeed = 0;
		this.position = basePosition;
	}

	move() {
        this.verticalSpeed -= this.gravity;
        this.position.y -= this.verticalSpeed;
    }

    jump() {
        this.verticalSpeed += this.jumpSpeed;
    }
}
