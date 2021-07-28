var jaxon;
var jaxonimg;
var path;
var pathimg;
function preload(){
  //pre-load images
  jaxonimg=loadAnimation("Runner-1.png","Runner-2.png")
  pathimg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage("pathpic",pathimg)
  jaxon=createSprite(200,300,50,100)
  jaxon.addAnimation("jaxonpic",jaxonimg)
  jaxon.scale=0.07
}
createEdgeSprites();
function draw() {
  background(0);
  path.velocityY=10
  jaxon.x=mouseX
  if (path.y>400){
    path.y=height/2
    // jaxon.bounceOff(leftEdge)
    
  }
  drawSprites()

}
