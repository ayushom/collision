var rect1,still;


function setup() {
  createCanvas(800,400);
  
 rect1 = createSprite(400, 200, 50, 50);
 //rect1.shapeColor("red");
 still = createSprite(400,200,50,30)
// still.shapeColor("blue");
}

function draw() {
  background(255,255,255); 
  
  

  rect1.y=World.mouseY;
  rect1.x=World.mouseX;

  if((rect1.x-still.x<still.width/2+rect1.width/2) && (still.x-rect1.x<rect1.width/2+still.width/2) &&
     (rect1.y-still.y<still.height/2+rect1.height/2) && (still.y-rect1.x<rect1.height/2+still.height/2)) {
    rect1.shapeColor="purple"
    still.shapeColor="purple"
  }else{
    rect1.shapeColor="cyan"
    still.shapeColor="cyan"
  }



  
  drawSprites();
}