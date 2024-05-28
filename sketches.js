let cor;
let X; // x
let Y; // y

function setup() {
  createCanvas(800, 640);
  background("rgba(255, 130, 194, 0.42)");
  cor = color(random(0,244), random(0,244), random(0,244));
  X = 800;
  Y = 640;
}


function draw() {
  
  fill(cor);
  circle(X,Y,70);
 
  
  
  if (mouseX < X){
    X =  X - 5;
  }
  
  if (mouseX > X){
    X =  X + 5;
  }
  
  if (mouseY < Y){
    Y--;
  }
    
  if (mouseY > Y){
    Y++;
  }
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255),           random(0,100));
  }
    
}
