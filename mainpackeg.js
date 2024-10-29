var sub = 100;
var frend = 10;
var phot = 0;
var proverca1 = 0;
var proverca2 = 0;
var proverca3 = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  main();
}

function main(){
  fill(100,120,102);
  rect(windowWidth/80,windowHeight/100,340,300)
  fill(250);
  text("this is photo",100,100,);
  fill(140);
  rect(windowWidth/80,313,340,100);
  fill(255);
  textSize(30);
  text(sub,23,350);
  fill(10);
  text("subsc.",14,380);
  text("frend",120,380);
  text("Photo",220,380);
  fill(250);
  text(frend,140,350);
  text(phot,250,350);
  fill(140);
  rect(5,windowHeight -50,347,50);
  fill(120);
  rect(5,windowHeight-270,347,200);
  fill(250);
  textSize(20);
  text("about to me:",5,windowHeight-250);
  fill(10);
  rect(12,windowHeight-40,30,30);
  rect(60,windowHeight - 40,30,30);
  rect(122,windowHeight - 40,30,30);
  //text(mouseX,100,600);
 // text(mouseY,100,500);
  if(mouseX >= 1 && mouseX <= 47 && mouseY >= 638 && mouseY <=700 && mouseIsPressed == true ){
       proverca1 += 10;
     }
  if(proverca1 > 2){
    subscriper();
  }
  if(mouseX >=56 && mouseX <= 95 && mouseY >= 638 && mouseY <= 700 && mouseIsPressed == true){
    proverca2 += 10;
  }
  if(proverca2 > 2){
    drug();
  }
  if(mouseX >= 116 ** mouseX <= 157 && mouseY >= 638 && mouseY <= 700 && mouseIsPressed == true ){
    proverca3 += 10;
  }
  if(proverca3 > 2){
    public();
  }
}
function subscriper(){
  fill(220);
  rect(1,1,windowWidth,windowHeight);
  fill(140);
  rect(5,windowHeight/40,340,60);
  fill(10);
  textSize(30);
  text("falower",15,windowHeight - 648);
  text(sub,150,windowHeight - 648);
  fill(250);
  rect(5,windowHeight /8,340,windowHeight);
  noFill();
}
function drug(){
  fill(220);
  rect(1,1,windowWidth,windowHeight);
  fill(140);
  rect(5,windowHeight/40,340,60);
  fill(10);
  textSize(30);
  text("frend",15,windowHeight - 648);
  text(frend,150,windowHeight - 648);
  fill(250);
  rect(5,windowHeight /8,340,windowHeight);
  noFill();
}
function public(){
  fill(220);
  rect(1,1,windowWidth,windowHeight);
   fill(140);
  rect(5,windowHeight/40,340,60);
  fill(10);
  textSize(30);
  text("photo",15,windowHeight - 648);
  text(phot,150,windowHeight - 648);
  fill(250);
  rect(5,windowHeight /8,340,windowHeight);
  noFill();
}