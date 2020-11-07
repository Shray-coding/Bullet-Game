
var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1300,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  
  bullet = createSprite(50, 200, 50, 5);

  bullet.velocityX = speed;

  bullet.shapeColor = color(255);


  wall = createSprite(1200, 200, thickness , height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);
  
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5* weight * speed* speed/thickness;

  if(damage>10)
  {
    wall.shapeColor="red";
  }

  if(damage<10)
  {
    wall.shapeColor="green";
  }
}
  
  
  drawSprites();
}

function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
      return false
}

