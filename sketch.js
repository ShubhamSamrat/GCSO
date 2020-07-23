//Global Variable
var car, wall,speed,weight,status;




function setup() {
  createCanvas(800,400);
  
  car = createSprite(45, 200, 80, 65);
  wall = createSprite(785, 200, 30, 350);
  speed = Math.round(random(55,90));
  weight = Math.round(random(700,2000));
  car.velocityX = speed;
  
}

function draw() {
  background("black"); 

  if(wall.x - car.x < car.width/2 + wall.width/2 ) {

    
    car.velocityX = 0;
    
    var deformation = Math.round(0.5*weight*speed*speed/22500);
    textSize(30);
    fill("blue");
    text("Deformation = "+deformation,400,380);
    textSize(20);
    fill("white");
    text("Weight = " + weight,15,380);
    fill("white");
    text("Speed = "+ speed,200,380);
    textSize(30);
    fill("white");
    text("Status = "+ status,200,100);


    if(deformation > 180){
      car.shapeColor = color(255,0,0);
      status = "Dangerous";
    } else if(deformation < 100){
      car.shapeColor = color(0,255,0);
      status = "Safe";
    } else if(deformation > 100 && deformation < 180){
      car.shapeColor = color(255,255,0);
      status = "Average";

    }

  }   

  
  
  
  

  drawSprites();
}