var bullet,bullet2,bullet3, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet = createSprite(400, 200, 50, 50);
  bullet2 = createSprite(200,100,50,50);
  bullet3 = createSprite(800,300,50,50);
  wall = createSprite(1300,200,60,200);
  wall.shapeColor = "blue";
  bullet.velocityX = 10;
  bullet2.velocityX = 15;
  bullet3.velocityX = 5;
}

function draw() {
  background(255,400,255);  
  if(wall.x - bullet.x < (wall.width + bullet.width)/2){
    bullet.velocityX = 0;
   deformation();
  }

  if(wall.x - bullet2.x < (wall.width + bullet2.width)/2){
    bullet2.velocityX = 0;
    deformation2();
  }
  
  if(wall.x - bullet3.x < (wall.width + bullet3.width)/2){
    bullet3.velocityX = 0;
    deformation3();
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "black";
    }
    if(damage<10){
      wall.shapeColor = "pink";
    }
  }

  if(hasCollided2(bullet2,wall)){
    bullet2.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "brown";
    }
    if(damage<10){
      wall.shapeColor = "purple";
    }
  }

  if(hasCollided3(bullet3,wall)){
    bullet3.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "yellow";
    }
  }

  drawSprites();
}

function deformation(){
  var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      bullet.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = "yellow";
    }
    if(deformation<100){
      bullet.shapeColor = "green";
    }
}

function deformation2(){
  var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      bullet2.shapeColor = "green";
    }
    if(deformation<180 && deformation>100){
      bullet2.shapeColor = "red";
    }
    if(deformation<100){

      bullet2.shapeColor = "yellow";
    }
}

function deformation3(){
  var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      bullet3.shapeColor = "black"
    }
    if(deformation<180 && deformation>100){
      bullet3.shapeColor = "purple"
    }
    if(deformation<100){
      bullet3.shapeColor = "blue"
    }
}

function hasCollided(bullet,wall){
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false;
}

function hasCollided2(bullet2,wall){
  bullet2RightEdge = bullet2.x + bullet2.width;
  wallLeftEdge = wall.x;
  if(bullet2RightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function hasCollided3(bullet3,wall){
  bullet3RightEdge = bullet3.x + bullet3.width;
  wallLeftEdge = wall.x;
  if(bullet3RightEdge>=wallLeftEdge){
    return true
  }
  return false;
}