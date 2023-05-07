const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
let ground, bird, world, engine, mConstraint, slingshot;
let boxes = [];
let birdX = 150;

let boxImage, birdImage, backgroundImage

function preload() {
	boxImage = loadImage('assets/box2.png');
	birdImage = loadImage('assets/bird.png');
	backgroundImage = loadImage('Backgrounds/THEME_1_bg.png');
}

function setup() {
  const canvas = createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width, height - 20, width, 20);
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(450, 300 - i * 75, 50, 75);
  }

  bird = new Bird(birdX, 300, 25);
  slingshot = new Sling(birdX, 300, bird.body);
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function mouseReleased() {
  setTimeout(() => slingshot.fly(), 50);
}

function draw() {
  background(15);
  Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }

  bird.show();
  slingshot.show();
}
