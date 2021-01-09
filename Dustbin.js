class Dustbin {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage('dustbingreen.png');
    this.body = Bodies.rectangle(x, y, width, height, { isStatic: true });

    World.add(world, this.body);
  }

  display() {
    const pos = this.body.position;
    imageMode(CENTER);
    fill('green');
    image(this.image, pos.x, pos.y, this.width, this.height);
  }
}
