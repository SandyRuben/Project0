function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  background(200, 30, 255);
  noStroke();
  
  //Mountain
  fill(180, 10, 50);

  beginShape();
  vertex(width*.25, height);
  vertex(width*.8, 0);
  vertex(width, 0);
  vertex(width, height);
  endShape();

  //snowCap
  fill(1, 1, 100);
  beginShape();
  vertex(width*.6, height*.35);
  bezierVertex(width*.7, height*.4, width*.85, height*.3, width, height*.35);
  vertex(width, 0);
  vertex(width*.8, 0);
  endShape();

  //wind

  beginShape();
  vertex(width*.2, height*.8);
  quadraticVertex(width*.6, height*.4, width*.6, height*.2);
  quadraticVertex(width*.6, height*.0, width*.4, height*.1);
  quadraticVertex(width*.2, height*.2, width*.4, height*.25);
  quadraticVertex(width*.45, height*.3, width*.5, height*.25);
  quadraticVertex(width*.4, height*.2, width*.35, height*.15);
  quadraticVertex(width*.5, height*.1, width*.525, height*.225);
  quadraticVertex(width*.5, height*.4, width*.15, height*.8);
  
  endShape();
}

function draw() {
}
