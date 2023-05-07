class Box {
  constructor(x, y, w, h) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    const pos = this.body.position;
    const { angle } = this.body;
    // push();

    // rotate(angle);
    // rectMode(CENTER);
    // imageMode(CENTER);
    image(boxImage, pos.x, pos.y, this.w, this.h);
  }
}
