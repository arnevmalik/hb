var hbd,n,c,s,m,i1,i2,i3,i4,i5;

function preload(){
  i1=loadImage("1.png")
  i2=loadImage("hb.png")
  i3=loadImage("gby.png")
  i4=loadImage("coe.png")
  i5=loadSound("h.mp3")
  }
  function setup() {
  createCanvas(600,900);
  n=createSprite(300,450, 200, 50, 50);
  n.addImage(i1)
  n.scale=0.5

  hbd=createSprite(300,150, 200, 150, 50);
  hbd.addImage(i2)
  hbd.scale=0.5
  m=createSprite(300,800, 200, 150, 50);
  m.addImage(i3)
  m.scale=0.7
  i5.loop()
  
}

function draw() {
  background(169,229,255); 
  n.velocityX=3
  if(n.x===570){n.x=30}
  if(frameCount%90===0){
c=createSprite(300,150, 200, 150, 50);
  c.addImage(i4)
  c.scale=0.5
  c.velocityY=9
  
  }

  drawSprites();
}