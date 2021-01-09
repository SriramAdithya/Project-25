class Paper {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage('crumpledPaperImage.png');
    this.body = Bodies.circle(x, y, radius, {
      isStatic: false,
      restitution: 0.3,
      friction: 1.5,
      density: 1.2,
    });

    World.add(world, this.body);
  }

  display() {
    const pos = this.body.position;
    if (pos.x > 1150) {
      Matter.Body.applyForce(paperBall.body, paperBall.body.position, {
        x: 0,
        y: 250.8,
      });
    }
    imageMode(RADIUS);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
  }
}
