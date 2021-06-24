class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
    
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(){
        this.sling.bodyA = bird.body;
    }
    

    

    display(){
 
        image(this.sling1,140,30);
        image(this.sling2,110,30);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
             
            pop();

            if(pointA.x < 220){
                strokeWeight(7)
                line(pointA.x -20, pointA.y, pointB.x, pointB.y);   
                line(pointA.x -20, pointA.y, pointB.x +30, pointB.y);
                image(this.sling3, pointA.x -30, pointA.y -15,20,35);
            }
            else{
                strokeWeight(3)
                line(pointA.x +20, pointA.y, pointB.x, pointB.y);   
                line(pointA.x +20, pointA.y, pointB.x +30, pointB.y);
                image(this.sling3, pointA.x -30, pointA.y -15,20,35);
            }
        }
    }
    
}