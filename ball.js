class ClassBall{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.width = radius;
        this.height = radius;
        // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
          
        var angle = this.body.angle;
        push();
        fill ("purple")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}