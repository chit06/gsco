var car,wall;
var speed,wieght;




function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  wieght=random(400,1500);
  car=createSprite=(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.VelocityX=speed;
  car.collide(wall);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation=0.5*wieght*speed*speed/22500;
if(deformation>180);
{
  car.shapeColor= Color(255,0,0);

}
if(deformation<180 && deformation > 100)
{
car.shapeColor=Color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=Color(0,255,0)
}
  }

}