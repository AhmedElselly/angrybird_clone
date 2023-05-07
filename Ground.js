class Ground extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.body.isStatic = true;
  }

  show() {
    const pos = this.body.position;
    const { angle } = this.body;
    // push();
    fill(0)
    // rotate(angle);
    // rectMode(CENTER);
    rect(pos.x, pos.y, this.w, this.h);
  }
}
