var car,wall
var speed,wieght,deformation

function setup() {
  createCanvas(1600,400);

   speed = random(55,90)

   car = createSprite(50, 200, 50, 50);
   car.shapeColor = "white";
   car.velocityX = speed;

   wall = createSprite(1500,200,60,height/2);
   wall.shapeColor=(80,80,80);
   
   wieght = random(400,1500)

   
}

function draw() {
  background("black");  
  
  if (isTouching(car,wall)){
    car.velocityX=0;
    car.x=1450;
    car.shapeColor="red";
    deformation=0.5*wieght*speed*speed/22500;
      if (deformation<100){
        car.shapeColor="green";
        text("safe",1400,300);
      }
      if (deformation>180){
        car.shapeColor="red";
        text("lethal",1400,300);
      }
      if (deformation<180 && deformation>100 ){
        car.shapeColor="yellow";
        text("moderate",1400,300);
      }
  }
  drawSprites();
}