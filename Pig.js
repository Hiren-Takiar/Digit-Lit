class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  this.visability = 255;
  }

  display(){
if(this.body.speed <2.15){
super.display();
} else{ 
World.remove(world,this.body);
this.visability = this.visability - 5;
push();
tint(255,this.visability);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}
  }
}
