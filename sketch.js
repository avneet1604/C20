var fRect, mRect;


function setup() {
  createCanvas(1200,800);
  fRect= createSprite(200, 200, 50, 80);
  fRect.shapeColor= "green";
 
  mRect= createSprite(400, 200, 80, 30);
  mRect.shapeColor= "green";
}

function draw() {
  background(255,255,255);  
 
 mRect.x= mouseX;
 mRect.y= mouseY;
 
console.log(mRect.x- fRect.x);

if(mRect.x- fRect.x < fRect.width/2 + mRect.width/2 &&  fRect.x- mRect.x < fRect.width/2 + mRect.width/2 
 && mRect.y- fRect.y < fRect.height/2 + mRect.height/2  && fRect.y- mRect.y < fRect.height/2 + mRect.height/2)
{
  mRect.shapeColor= "red";
  fRect.shapeColor= "red";
}
else
{
 mRect.shapeColor= "green";
fRect.shapeColor= "green";
}


  drawSprites();
}