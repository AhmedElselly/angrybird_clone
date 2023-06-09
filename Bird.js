class Bird {
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r);
    Matter.World.add(world, this.body);
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const { angle } = this.body;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    image(birdImage, 0,0, this.r * 2, this.r * 2);
    pop();
  }
}
