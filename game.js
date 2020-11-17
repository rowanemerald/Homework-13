var X = 100;
var Y = 100;
var Diameter=50
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

  var myXs = []; // array for x coordinate
  var myYs = []; //  array for y coordinate
  var myDiameters = []; // array for diameter of circles

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed=[];
var shapeYSpeed=[];

var rectX=200
var rectY=250
var rectXSpeed;
var rectYSpeed;

var angleX=90
var angleY=200
var angleXSpeed;
var angleYSpeed;

var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(400,400);
  // for loop
        for(var i = 0; i < 6; i++)
        {
    shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            // get all the random numbers to create a circles
            myXs[i] = getRandomNumber(400);
            myYs[i] = getRandomNumber(400);
            myDiameters[i] = getRandomNumber(100);
        }
    // get a random speed 
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
 function textWin()
 { if(X > width && Y > width-50)
    {
        fill(0);
        stroke(2);
        textSize(20);
        text("You Win!", width/2-50, height/2-50);
    }
 }
  function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }
function createBorder()
{ // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);}

    function moveCharacter()
    { if(keyIsDown(w))
        {
            Y -= 10;   
        }
        if(keyIsDown(s))
        {
            Y += 10;   
        }
        if(keyIsDown(a))
        {
           X -= 10;   
        }
        if(keyIsDown(d))
        {
            X += 10;   
        }
    }

  function createCharacter()
{strokeWeight(5)
   stroke('pink');
    fill('yellow');
    circle(X,Y,20);}


    function offScreen()
    {  if(shapeX > width)
        {
            shapeX = 0;
        }
        if(shapeX < 0)
        {
            shapeX = width;
        }
        if(shapeY > height)
        {
            shapeY = 0;
        }
        if(shapeY < 0)
        {
            shapeY = height;
        }
    }

function grayMovement()
{ if(angleX > width)
    {
        angleX=0;
    }
    if(angleY < 0)
    {
        angleX = width;
    }
    if(angleY > height)
    {
        angleY = 0;
    }
    if(angleY < 0)
    {
        angleY = height;
    }
}

function blueMovement()
{ if(rectX > width)
    {
        rectX=0;
    }
    if(rectY < 0)
    {
        rectX = width;
    }
    if(rectY > height)
    {
        rectY = 0;
    }
    if(rectY < 0)
    {
        rectY = height;
    }
}

function textExit()
{  textSize(16);
  textFont('papyrus')
    text("Exit", 350,370)}

function createEnemy()
{ strokeWeight(2)
  stroke('black')
    fill('green');
    circle(shapeX, shapeY,20);}

function createObstacles()
{fill('grey')
  rect(angleX,angleY,150,50)
  angleX+=5
  angleY+=5
   shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
fill('blue')
  rect(rectX,rectY,10,150)
  rectX+=5
  rectY+=2
  rectXSpeed=Math.floor(Math.random() * 10) + 1;
  rectYSpeed=Math.floor(Math.random() * 10) + 1;}

function createCircle()
{fill('purple');
    circle(mouseShapeX, mouseShapeY, 55);}

function draw()
{
    background('aqua');
    stroke(0);
    fill(0);
    
    //border function
    createBorder();

    // exit message
  textExit();

    //character
  createCharacter();

    // handle the keys function
    moveCharacter();
    
  
    //enemy
 createEnemy();
    
     for(var i = 0; i < myXs.length; i++)
        {
        // array
        circle(myXs[i], myYs[i], myDiameters[i]);
    shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      }
  //obstacles
  createObstacles();
  
  // gray rect moving function
grayMovement();
 
  //blue rect moving function
  blueMovement();
    
    // out of bounds function
    offScreen();

  // you win
    textWin();

    // create the shape based on the mouse click
    createCircle();
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;

}


