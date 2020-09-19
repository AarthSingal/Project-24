class Paper {
    constructor(x,y,radius){
        var Paper_options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.Paper  = Bodies.circle(x,y,radius,Paper_options);
        this.radius = radius;

        World.add(world,this.Paper);

    }

    display(){
        
        
        
        fill("lightBlue");
        ellipseMode(RADIUS);
        ellipse(this.Paper.position.x,this.Paper.position.y,this.radius,this.radius);
        
        

       

        
    }
}