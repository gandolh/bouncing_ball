let x = 0,
  y = 0,
  stepX = 5,
  stepY = 7,
  size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  y = random(height);
  x= random(width);
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  ellipse(x + stepX, y + stepY, size);
  x += stepX;
  y += stepY;
  if (x + stepX > width || x + stepX < 0) {
    fill(random(255), random(255), random(255));
    if(abs(stepX)<25)if(stepX>0)stepX++;
    else stepX--;
    stepX = -stepX;
    
  }
  if (y + stepY > height || y + stepY < 0) {
    fill(random(255), random(255), random(255));
        if(abs(stepY)<25)if(stepY>0)stepY++;
    else stepY--;
    stepY = -stepY;
  }
}