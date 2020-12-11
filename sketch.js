var car, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(50,80);
  weight= random(150,250);

 car= createSprite(50, 200, 30, 30);
 wall= createSprite(1200,200,60,200);
 wall.shapeColor= "blue"
 car.velocityX= speed; 
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX= 0;
  var deformation= 0.5*width*speed*speed/22509;
     if (deformation<100)
   {
      car.shapeColor= color(0,255,0)
   }
     if(deformation<100 && deformation>180)
     {
       car.shapeColor= color(230,230,0)
     }
     if(deformation>180)
     {
       car.shapeColor= color(255,0,0)
     }
    }
  drawSprites();
}