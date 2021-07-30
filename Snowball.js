class Snowball {
    constructor (x,y) {
           var options = {
              // isStatic: false,
               restitution: 0.1,
               friction: 0.001
           }
        this.snowfall = Bodies.circle(x,y,50, options);
        this.radius = 50;
        World.add(world,this.snowball);           
    }

    updateY () {
        if(this.snowfall.position.y>height) {
            Matter.Body.setPosition(this.snowfall, {x:random(0,400), y:random(0,400)})
        }
    }

    showBall() {
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.snowfall.position.x, this.snowfall.position.y,this.radius);
    }
}